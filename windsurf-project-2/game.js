(() => {
  'use strict';

  const P = {
    WHITE: 'W',
    BLACK: 'B',
  };

  const Phase = {
    NEED_ROLL: 'NEED_ROLL',
    MOVING: 'MOVING',
    AI_THINKING: 'AI_THINKING',
    GAME_OVER: 'GAME_OVER',
  };

  const ASSETS = {
    board: 'assets/board.svg',
    checkerWhite: 'assets/checker-white.svg',
    checkerBlack: 'assets/checker-black.svg',
    dice: (n) => `assets/dice-${n}.svg`,
  };

  const ANIM = {
    moveMs: 800,
    aiStepMs: 1000,
  };

  // ----- SFX (WebAudio) -----
  const SFX = (() => {
    /** @type {AudioContext | null} */
    let ctx = null;
    let enabled = true;

    function ensure() {
      if (!enabled) return null;
      if (ctx) return ctx;
      const AC = window.AudioContext || window.webkitAudioContext;
      if (!AC) return null;
      ctx = new AC();
      return ctx;
    }

    async function unlock() {
      const c = ensure();
      if (!c) return;
      if (c.state === 'suspended') {
        try {
          await c.resume();
        } catch {
          // ignore
        }
      }
    }

    function tone({ type = 'sine', freq = 440, dur = 0.08, gain = 0.06, when = 0, ramp = true } = {}) {
      const c = ensure();
      if (!c) return;

      const t0 = c.currentTime + when;
      const o = c.createOscillator();
      const g = c.createGain();
      o.type = type;
      o.frequency.setValueAtTime(freq, t0);
      g.gain.setValueAtTime(0.0001, t0);
      if (ramp) g.gain.exponentialRampToValueAtTime(gain, t0 + 0.01);
      else g.gain.setValueAtTime(gain, t0);
      g.gain.exponentialRampToValueAtTime(0.0001, t0 + dur);
      o.connect(g).connect(c.destination);
      o.start(t0);
      o.stop(t0 + dur + 0.01);
    }

    function noise({ dur = 0.10, gain = 0.06, when = 0, hp = 1200 } = {}) {
      const c = ensure();
      if (!c) return;
      const t0 = c.currentTime + when;

      const len = Math.max(1, Math.floor(c.sampleRate * dur));
      const buf = c.createBuffer(1, len, c.sampleRate);
      const data = buf.getChannelData(0);
      for (let i = 0; i < len; i++) data[i] = (Math.random() * 2 - 1) * 0.8;

      const src = c.createBufferSource();
      src.buffer = buf;

      const filter = c.createBiquadFilter();
      filter.type = 'highpass';
      filter.frequency.setValueAtTime(hp, t0);

      const g = c.createGain();
      g.gain.setValueAtTime(0.0001, t0);
      g.gain.exponentialRampToValueAtTime(gain, t0 + 0.005);
      g.gain.exponentialRampToValueAtTime(0.0001, t0 + dur);

      src.connect(filter).connect(g).connect(c.destination);
      src.start(t0);
      src.stop(t0 + dur + 0.01);
    }

    function woodTap({ bodyFreq = 220, clickFreq = 1400, dur = 0.10, gain = 0.07, when = 0 } = {}) {
      const c = ensure();
      if (!c) return;
      const t0 = c.currentTime + when;

      // Clicky component
      const len = Math.max(1, Math.floor(c.sampleRate * Math.min(0.05, dur)));
      const buf = c.createBuffer(1, len, c.sampleRate);
      const data = buf.getChannelData(0);
      for (let i = 0; i < len; i++) {
        const env = 1 - i / len;
        data[i] = (Math.random() * 2 - 1) * env;
      }

      const src = c.createBufferSource();
      src.buffer = buf;

      const bp = c.createBiquadFilter();
      bp.type = 'bandpass';
      bp.frequency.setValueAtTime(clickFreq, t0);
      bp.Q.setValueAtTime(2.2, t0);

      const gClick = c.createGain();
      gClick.gain.setValueAtTime(0.0001, t0);
      gClick.gain.exponentialRampToValueAtTime(gain * 0.55, t0 + 0.004);
      gClick.gain.exponentialRampToValueAtTime(0.0001, t0 + Math.min(0.05, dur));

      src.connect(bp).connect(gClick).connect(c.destination);
      src.start(t0);
      src.stop(t0 + Math.min(0.06, dur) + 0.01);

      // Resonant wooden "body" tone
      tone({ type: 'sine', freq: bodyFreq, dur, gain: gain * 0.55, when, ramp: true });
      tone({ type: 'triangle', freq: bodyFreq * 2.02, dur: dur * 0.85, gain: gain * 0.18, when: when + 0.002, ramp: true });
    }

    function dice() {
      // Multiple wooden ticks + short rattle
      woodTap({ bodyFreq: 240, clickFreq: 1600, dur: 0.09, gain: 0.07, when: 0.00 });
      woodTap({ bodyFreq: 210, clickFreq: 1500, dur: 0.09, gain: 0.06, when: 0.06 });
      woodTap({ bodyFreq: 260, clickFreq: 1750, dur: 0.09, gain: 0.065, when: 0.12 });
      noise({ dur: 0.13, gain: 0.020, when: 0.02, hp: 2200 });
    }

    function move() {
      // soft wooden checkers on board
      woodTap({ bodyFreq: 200, clickFreq: 1350, dur: 0.10, gain: 0.065, when: 0.00 });
    }

    function hit() {
      // aggressive wooden smack
      woodTap({ bodyFreq: 140, clickFreq: 950, dur: 0.14, gain: 0.11, when: 0.00 });
      woodTap({ bodyFreq: 180, clickFreq: 1200, dur: 0.11, gain: 0.06, when: 0.03 });
      noise({ dur: 0.16, gain: 0.030, when: 0.00, hp: 900 });
    }

    return { unlock, dice, move, hit };
  })();

  /**
   * Board representation:
   * - points[1..24] holds signed int: + = white checkers, - = black checkers
   * - bar/off counts are stored separately
   */
  function createInitialState() {
    const points = new Array(25).fill(0);

    // Standard backgammon start
    points[24] = 2;
    points[13] = 5;
    points[8] = 3;
    points[6] = 5;

    points[1] = -2;
    points[12] = -5;
    points[17] = -3;
    points[19] = -5;

    return {
      points,
      bar: { W: 0, B: 0 },
      off: { W: 0, B: 0 },
      turn: P.WHITE, // Human plays White
      phase: Phase.NEED_ROLL,
      dice: [],
      availableDice: [],
      selectedFrom: null,
      legalTargets: new Map(),
      history: [],
      message: 'Your turn. Click Roll.',
      winner: null,
    };
  }

  function pointCenterFor(player, ref) {
    // ref can be a point index 1..24, 'bar', or 'off'
    if (ref === 'bar') {
      const r = els.board.getBoundingClientRect();
      return { x: r.left + r.width * 0.5, y: r.top + r.height * 0.5 };
    }

    if (ref === 'off') {
      const r = els.board.getBoundingClientRect();
      // fly out to a corner
      if (player === P.WHITE) return { x: r.left + r.width * 0.10, y: r.top + r.height * 0.90 };
      return { x: r.left + r.width * 0.90, y: r.top + r.height * 0.10 };
    }

    const el = pointEls.get(ref);
    if (!el) {
      const r = els.board.getBoundingClientRect();
      return { x: r.left + r.width * 0.5, y: r.top + r.height * 0.5 };
    }

    const r = el.getBoundingClientRect();
    // Aim near the tip region
    if (el.classList.contains('point--top')) {
      return { x: r.left + r.width / 2, y: r.top + r.height * 0.62 };
    }
    return { x: r.left + r.width / 2, y: r.bottom - r.height * 0.62 };
  }

  function getActualCheckerPosition(player, from) {
    // Get the actual on-screen position of the checker being moved
    // Returns {x, y} or null if not found
    
    // Must be a valid from location
    if (from === 'bar') {
      const barZone = barEls[player];
      if (barZone) {
        const checkers = barZone.querySelectorAll('.barChip');
        if (checkers.length > 0) {
          const r = checkers[checkers.length - 1].getBoundingClientRect();
          return { x: r.left + r.width / 2, y: r.top + r.height / 2 };
        }
      }
    } else if (typeof from === 'number' && from >= 1 && from <= 24) {
      const pointEl = pointEls.get(from);
      if (pointEl) {
        // First try to find actual checker chips
        const checkers = pointEl.querySelectorAll('.checkerChip');
        if (checkers.length > 0) {
          // Get the topmost checker (first for top points, last for bottom points)
          const isTop = pointEl.classList.contains('point--top');
          const checker = isTop ? checkers[0] : checkers[checkers.length - 1];
          const r = checker.getBoundingClientRect();
          return { x: r.left + r.width / 2, y: r.top + r.height / 2 };
        }
      }
    }
    return null;
  }

  function animateMove(player, move, fromPos) {
    const ghost = document.createElement('img');
    ghost.className = 'moveGhost';
    ghost.src = player === P.WHITE ? ASSETS.checkerWhite : ASSETS.checkerBlack;
    ghost.alt = '';
    ghost.draggable = false;
    // Disable transition initially to set start position instantly
    ghost.style.transition = 'none';
    document.body.appendChild(ghost);

    const to = pointCenterFor(player, move.to);

    // size based on first computed point width
    const anyPoint = pointEls.get(13) || pointEls.get(1);
    if (anyPoint) {
      const r = anyPoint.getBoundingClientRect();
      const s = Math.max(28, Math.min(54, r.width * 0.82));
      ghost.style.width = `${s}px`;
      ghost.style.height = `${s}px`;
    }

    // Use actual checker position if available, otherwise fall back to point center
    const from = fromPos || pointCenterFor(player, move.from);

    // Set initial position instantly (no transition)
    ghost.style.transform = `translate(${from.x}px, ${from.y}px) translate(-50%, -50%)`;

    // Force reflow to ensure position is applied
    ghost.getBoundingClientRect();

    // Now enable transition and animate to destination
    requestAnimationFrame(() => {
      ghost.style.transition = 'transform 800ms cubic-bezier(0.25, 0.46, 0.45, 0.94)';
      ghost.style.transform = `translate(${to.x}px, ${to.y}px) translate(-50%, -50%)`;
    });

    return new Promise((resolve) => {
      window.setTimeout(() => {
        ghost.classList.add('is-done');
        window.setTimeout(() => {
          ghost.remove();
          resolve();
        }, 140);
      }, ANIM.moveMs);
    });
  }

  async function performMoveWithAnimation(player, move) {
    // Determine whether this move will hit a blot (for SFX)
    let willHit = false;
    if (typeof move.to === 'number') {
      const opp = opponent(player);
      const destOwner = pointOwner(state.points, move.to);
      const destCount = absPointCount(state.points, move.to);
      willHit = Boolean(destOwner && destOwner === opp && destCount === 1);
    }

    // CAPTURE the actual checker position BEFORE rendering removes it
    const fromPos = getActualCheckerPosition(player, move.from);

    // Render current state, then animate, then apply and re-render.
    renderAll();
    SFX.move();
    await animateMove(player, move, fromPos);
    applyMoveInPlace(state, player, move);
    const idx = state.availableDice.indexOf(move.die);
    if (idx >= 0) state.availableDice.splice(idx, 1);
    if (willHit) {
      SFX.hit();
      els.board.classList.add('is-hit');
      window.setTimeout(() => els.board.classList.remove('is-hit'), 280);
    }
    renderAll();
  }

  function cloneState(s) {
    return {
      ...s,
      points: s.points.slice(),
      bar: { ...s.bar },
      off: { ...s.off },
      dice: s.dice.slice(),
      availableDice: s.availableDice.slice(),
      selectedFrom: s.selectedFrom,
      legalTargets: new Map(s.legalTargets),
      history: s.history.slice(),
    };
  }

  function opponent(player) {
    return player === P.WHITE ? P.BLACK : P.WHITE;
  }

  function sign(player) {
    return player === P.WHITE ? 1 : -1;
  }

  function absPointCount(points, i) {
    return Math.abs(points[i] ?? 0);
  }

  function pointOwner(points, i) {
    const v = points[i] ?? 0;
    if (v > 0) return P.WHITE;
    if (v < 0) return P.BLACK;
    return null;
  }

  function rollDice() {
    const a = 1 + Math.floor(Math.random() * 6);
    const b = 1 + Math.floor(Math.random() * 6);
    return [a, b];
  }

  function expandDice([a, b]) {
    if (a === b) return [a, a, a, a];
    return [a, b];
  }

  function homeRange(player) {
    return player === P.WHITE ? { start: 1, end: 6 } : { start: 19, end: 24 };
  }

  function isInHome(player, pointIdx) {
    const r = homeRange(player);
    return pointIdx >= r.start && pointIdx <= r.end;
  }

  function allInHomeOrOff(state, player) {
    if (state.bar[player] > 0) return false;

    const sgn = sign(player);
    for (let i = 1; i <= 24; i++) {
      const v = state.points[i];
      if (v * sgn > 0 && !isInHome(player, i)) return false;
    }
    return true;
  }

  function entryPointFromBar(player, die) {
    // White enters on 24..19 (die 1 => 24), Black enters on 1..6
    return player === P.WHITE ? 25 - die : die;
  }

  function destinationFromMove(player, from, die) {
    return player === P.WHITE ? from - die : from + die;
  }

  function isPointBlockedFor(player, state, dest) {
    if (dest < 1 || dest > 24) return false;
    const owner = pointOwner(state.points, dest);
    if (!owner) return false;
    if (owner === player) return false;
    return absPointCount(state.points, dest) >= 2;
  }

  function canBearOffFrom(player, state, from, die) {
    if (!allInHomeOrOff(state, player)) return false;

    const dest = destinationFromMove(player, from, die);
    if (player === P.WHITE) {
      if (dest === 0) return true;
      if (dest < 0) {
        // Oversize die: allowed only if no checkers on higher points (within home) than from
        for (let i = from + 1; i <= 6; i++) {
          if (state.points[i] > 0) return false;
        }
        return true;
      }
      return false;
    }

    // Black
    if (dest === 25) return true;
    if (dest > 25) {
      for (let i = from - 1; i >= 19; i--) {
        if (state.points[i] < 0) return false;
      }
      return true;
    }
    return false;
  }

  function enumerateSingleMoves(state, player, die) {
    const moves = [];

    // Must enter from bar first
    if (state.bar[player] > 0) {
      const dest = entryPointFromBar(player, die);
      if (!isPointBlockedFor(player, state, dest)) {
        moves.push({ from: 'bar', to: dest, die });
      }
      return moves;
    }

    const sgn = sign(player);
    for (let from = 1; from <= 24; from++) {
      const v = state.points[from];
      if (v * sgn <= 0) continue;

      const dest = destinationFromMove(player, from, die);
      if (dest >= 1 && dest <= 24) {
        if (!isPointBlockedFor(player, state, dest)) {
          moves.push({ from, to: dest, die });
        }
      } else {
        if (canBearOffFrom(player, state, from, die)) {
          moves.push({ from, to: 'off', die });
        }
      }
    }

    return moves;
  }

  function applyMoveInPlace(state, player, move) {
    const sgn = sign(player);
    const opp = opponent(player);

    // Remove from source
    if (move.from === 'bar') {
      state.bar[player] -= 1;
    } else {
      state.points[move.from] -= sgn;
    }

    // Place to destination
    if (move.to === 'off') {
      state.off[player] += 1;
      return;
    }

    const dest = move.to;
    const destOwner = pointOwner(state.points, dest);
    const destCount = absPointCount(state.points, dest);

    // Hit if blot
    if (destOwner && destOwner === opp && destCount === 1) {
      state.points[dest] = 0;
      state.bar[opp] += 1;
    }

    state.points[dest] += sgn;
  }

  function anyLegalMove(state, player, dice) {
    for (const d of dice) {
      if (enumerateSingleMoves(state, player, d).length > 0) return true;
    }
    return false;
  }

  function generateMoveSequences(state, player, dice) {
    // Returns sequences maximizing number of used dice (standard rule: if only one die can be played, must play the higher)
    const results = [];

    function rec(currState, remainingDice, seq) {
      let progressed = false;

      // Try each distinct die choice (order matters in backgammon)
      for (let i = 0; i < remainingDice.length; i++) {
        const die = remainingDice[i];
        const moves = enumerateSingleMoves(currState, player, die);
        if (moves.length === 0) continue;

        progressed = true;
        for (const m of moves) {
          const next = {
            points: currState.points.slice(),
            bar: { ...currState.bar },
            off: { ...currState.off },
          };
          applyMoveInPlace(next, player, m);
          const nextDice = remainingDice.slice();
          nextDice.splice(i, 1);
          rec(next, nextDice, seq.concat([m]));
        }
      }

      if (!progressed) {
        results.push({ seq, end: currState });
      }
    }

    rec({ points: state.points.slice(), bar: { ...state.bar }, off: { ...state.off } }, dice.slice(), []);

    if (results.length === 0) return [];

    const maxUsed = Math.max(...results.map((r) => r.seq.length));
    let filtered = results.filter((r) => r.seq.length === maxUsed);

    // If only one move can be made using one die, must use the higher die if possible
    if (maxUsed === 1 && dice.length === 2 && dice[0] !== dice[1]) {
      const high = Math.max(dice[0], dice[1]);
      const highPossible = filtered.some((r) => r.seq[0]?.die === high);
      if (highPossible) filtered = filtered.filter((r) => r.seq[0]?.die === high);
    }

    return filtered;
  }

  function checkWinner(state) {
    if (state.off.W >= 15) return P.WHITE;
    if (state.off.B >= 15) return P.BLACK;
    return null;
  }

  // ----- AI -----

  function evaluateStateForBlack(endState) {
    // Higher is better for black.
    // Simple heuristic:
    // - bearing off progress
    // - putting white on bar
    // - avoid being on bar
    // - made points & blots
    const points = endState.points;

    let score = 0;
    score += endState.off.B * 140;
    score -= endState.off.W * 140;

    score += endState.bar.W * 60;
    score -= endState.bar.B * 80;

    // Blots and anchors
    for (let i = 1; i <= 24; i++) {
      const v = points[i];
      if (v < 0) {
        const c = -v;
        if (c >= 2) score += 8; // made point
        if (c === 1) score -= 10; // blot
      } else if (v > 0) {
        const c = v;
        if (c === 1) score += 6; // opponent blot (good target)
        if (c >= 2) score -= 4;
      }
    }

    // Pips (rough): encourage advancing
    // For black, farther from off is lower points; closer is higher points
    let blackPips = 0;
    let whitePips = 0;
    for (let i = 1; i <= 24; i++) {
      const v = points[i];
      if (v < 0) blackPips += (-v) * (25 - i);
      if (v > 0) whitePips += v * i;
    }
    score += (whitePips - blackPips) * 0.05;

    return score;
  }

  function pickAiSequence(state) {
    const dice = state.availableDice.slice();
    const seqs = generateMoveSequences(state, P.BLACK, dice);
    if (seqs.length === 0) return [];

    let best = seqs[0];
    let bestScore = -Infinity;

    for (const s of seqs) {
      const sc = evaluateStateForBlack(s.end);
      if (sc > bestScore) {
        bestScore = sc;
        best = s;
      }
    }

    return best.seq;
  }

  // ----- UI Layout -----

  const els = {
    board: document.getElementById('board'),
    overlay: document.getElementById('boardOverlay'),
    statusText: document.getElementById('statusText'),
    turnPill: document.getElementById('turnPill'),
    phasePill: document.getElementById('phasePill'),
    rollBtn: document.getElementById('rollBtn'),
    undoBtn: document.getElementById('undoBtn'),
    newGameBtn: document.getElementById('newGameBtn'),
    dieA: document.getElementById('dieA'),
    dieB: document.getElementById('dieB'),
    barText: document.getElementById('barText'),
    offText: document.getElementById('offText'),
    modal: document.getElementById('modal'),
    modalTitle: document.getElementById('modalTitle'),
    modalBody: document.getElementById('modalBody'),
    modalPrimaryBtn: document.getElementById('modalPrimaryBtn'),
  };

  // Pre-create point elements (1..24)
  const pointEls = new Map();
  const offEls = { W: null, B: null };
  const barEls = { W: null, B: null };

  function layoutPoints() {
    els.overlay.innerHTML = '';
    pointEls.clear();

    offEls.W = null;
    offEls.B = null;

    barEls.W = null;
    barEls.B = null;

    // Geometry derived from assets/board.svg (viewBox 920x640)
    // Felt inner rect: x=64..856, y=64..576
    // Quadrants: top rect y=72..320, bottom rect y=320..568
    // Triangles base width=60, height ~224; we allocate point hitboxes as the quadrant rects.
    const VB_W = 920;
    const VB_H = 640;

    const LEFT_X = 72;
    const RIGHT_X = 488;
    const COL_W = 60;
    const ROW_H = 248;
    const TOP_Y = 72;
    const BOT_Y = 320;

    const xPct = (x) => (x / VB_W) * 100;
    const yPct = (y) => (y / VB_H) * 100;
    const wPct = (w) => (w / VB_W) * 100;
    const hPct = (h) => (h / VB_H) * 100;

    // Top row points: 13..24 (left side 13..18, right side 19..24)
    // Bottom row points: 12..1 (left side 12..7, right side 6..1)

    function mkPoint(idx, x, y, isTop) {
      const d = document.createElement('div');
      d.className = `point ${isTop ? 'point--top' : 'point--bot'}`;
      d.dataset.point = String(idx);
      d.style.left = `${xPct(x)}%`;
      d.style.top = `${yPct(y)}%`;
      d.style.width = `${wPct(COL_W)}%`;
      d.style.height = `${hPct(ROW_H)}%`;
      d.addEventListener('click', onPointClick);
      els.overlay.appendChild(d);
      pointEls.set(idx, d);
    }

    // Left half columns (from left to center): 6 columns
    for (let c = 0; c < 6; c++) {
      const x = LEFT_X + c * COL_W;
      mkPoint(13 + c, x, TOP_Y, true);
      mkPoint(12 - c, x, BOT_Y, false);
    }

    // Right half columns (from center to right): 6 columns
    for (let c = 0; c < 6; c++) {
      const x = RIGHT_X + c * COL_W;
      mkPoint(19 + c, x, TOP_Y, true);
      mkPoint(6 - c, x, BOT_Y, false);
    }

    // Bearing-off (OFF) zones: top-right for Black, bottom-left for White
    function mkOff(player, x, y, w, h) {
      const d = document.createElement('div');
      d.className = 'offZone';
      d.dataset.off = player;
      d.style.left = `${xPct(x)}%`;
      d.style.top = `${yPct(y)}%`;
      d.style.width = `${wPct(w)}%`;
      d.style.height = `${hPct(h)}%`;
      d.textContent = 'OFF';
      d.addEventListener('click', onOffClick);
      els.overlay.appendChild(d);
      offEls[player] = d;
    }

    // Small zones inside the felt corners
    mkOff(P.WHITE, 72, 520, 80, 48);
    mkOff(P.BLACK, 768, 72, 80, 48);

    // Bar zones (captured checkers) on the center bar
    function mkBar(player, x, y, w, h) {
      const d = document.createElement('div');
      d.className = 'barZone';
      d.dataset.bar = player;
      d.style.left = `${xPct(x)}%`;
      d.style.top = `${yPct(y)}%`;
      d.style.width = `${wPct(w)}%`;
      d.style.height = `${hPct(h)}%`;

      const label = document.createElement('div');
      label.className = 'barZone__label';
      label.textContent = 'ÇUBUK';
      d.appendChild(label);

      els.overlay.appendChild(d);
      barEls[player] = d;
    }

    // Board bar in SVG: x=440..480, y=64..576
    // We provide two stacked bar zones inside it
    mkBar(P.BLACK, 440, 72, 40, 240);
    mkBar(P.WHITE, 440, 328, 40, 240);
  }

  // ----- UI rendering -----

  let state = createInitialState();

  function setStatus(text) {
    state.message = text;
    els.statusText.textContent = text;
  }

  function openModal(title, body) {
    els.modalTitle.textContent = title;
    els.modalBody.textContent = body;
    els.modal.classList.add('is-open');
    els.modal.setAttribute('aria-hidden', 'false');
  }

  function closeModal() {
    els.modal.classList.remove('is-open');
    els.modal.setAttribute('aria-hidden', 'true');
  }

  function dieImg(n) {
    return ASSETS.dice(Math.min(6, Math.max(1, n)));
  }

  function updateDiceUI() {
    const a = state.dice[0] ?? 1;
    const b = state.dice[1] ?? 1;
    els.dieA.src = dieImg(a);
    els.dieB.src = dieImg(b);

    const canRoll = state.phase === Phase.NEED_ROLL && state.turn === P.WHITE;
    els.rollBtn.disabled = !canRoll;
  }

  function renderStacks() {
    for (let i = 1; i <= 24; i++) {
      const el = pointEls.get(i);
      if (!el) continue;
      el.innerHTML = '';
      el.classList.remove('is-selectable', 'is-target');

      const v = state.points[i];
      const owner = pointOwner(state.points, i);
      const count = absPointCount(state.points, i);
      if (!owner || count === 0) continue;

      const rect = el.getBoundingClientRect();
      const isTop = el.classList.contains('point--top');

      // Chip size: based on point width; clamped so it doesn't look tiny on large screens or overflow on small.
      const chip = Math.max(26, Math.min(52, rect.width * 0.82));
      const padding = Math.max(4, Math.min(10, rect.height * 0.04));
      const usable = Math.max(0, rect.height - padding * 2);

      // For very tall stacks, we still draw a lot but cap to keep DOM reasonable.
      const maxChipsToDraw = 15;
      const chipsToDraw = Math.min(count, maxChipsToDraw);

      let step = chip * 0.78;
      if (chipsToDraw > 1) {
        step = Math.min(step, (usable - chip) / (chipsToDraw - 1));
      }
      if (!Number.isFinite(step) || step < 0) step = 0;

      for (let k = 0; k < chipsToDraw; k++) {
        const chipEl = document.createElement('div');
        chipEl.className = 'checkerChip';
        chipEl.style.width = `${chip}px`;
        chipEl.style.height = `${chip}px`;

        const offset = padding + k * step;
        if (isTop) {
          chipEl.style.top = `${offset}px`;
        } else {
          chipEl.style.bottom = `${offset}px`;
        }

        const img = document.createElement('img');
        img.className = 'checker';
        img.alt = owner === P.WHITE ? 'white checker' : 'black checker';
        img.src = owner === P.WHITE ? ASSETS.checkerWhite : ASSETS.checkerBlack;
        img.draggable = false;

        chipEl.appendChild(img);
        el.appendChild(chipEl);
      }

      if (count > maxChipsToDraw) {
        const badge = document.createElement('div');
        badge.className = 'stackBadge';
        badge.textContent = String(count);
        el.appendChild(badge);
      }
    }
  }

  function renderBar() {
    for (const player of [P.WHITE, P.BLACK]) {
      const zone = barEls[player];
      if (!zone) continue;

      const label = zone.querySelector('.barZone__label');
      zone.innerHTML = '';
      if (label) zone.appendChild(label);

      const count = state.bar[player];
      if (!count) continue;

      const rect = zone.getBoundingClientRect();
      const chip = Math.max(22, Math.min(40, rect.width * 0.92));
      const padding = 10;
      const usable = Math.max(0, rect.height - padding * 2);

      const chipsToDraw = Math.min(count, 10);
      let step = chip * 0.72;
      if (chipsToDraw > 1) step = Math.min(step, (usable - chip) / (chipsToDraw - 1));
      if (!Number.isFinite(step) || step < 0) step = 0;

      for (let i = 0; i < chipsToDraw; i++) {
        const chipEl = document.createElement('div');
        chipEl.className = 'barChip';
        chipEl.style.width = `${chip}px`;
        chipEl.style.height = `${chip}px`;

        const offset = padding + i * step;
        if (player === P.BLACK) {
          chipEl.style.bottom = `${offset}px`;
        } else {
          chipEl.style.top = `${offset}px`;
        }

        const img = document.createElement('img');
        img.className = 'checker';
        img.alt = player === P.WHITE ? 'white checker' : 'black checker';
        img.src = player === P.WHITE ? ASSETS.checkerWhite : ASSETS.checkerBlack;
        img.draggable = false;

        chipEl.appendChild(img);
        zone.appendChild(chipEl);
      }

      if (count > chipsToDraw) {
        const badge = document.createElement('div');
        badge.className = 'stackBadge';
        badge.textContent = String(count);
        zone.appendChild(badge);
      }
    }
  }

  function renderHighlights() {
    for (let i = 1; i <= 24; i++) {
      const el = pointEls.get(i);
      if (!el) continue;
      el.classList.remove('is-selectable', 'is-target');
    }

    // highlight selectable points for human
    if (state.turn !== P.WHITE || state.phase !== Phase.MOVING) return;

    const selectable = computeSelectableSourcesForHuman();
    for (const src of selectable) {
      if (src === 'bar') continue;
      const el = pointEls.get(src);
      if (el) el.classList.add('is-selectable');
    }

    // highlight targets for current selection
    for (const [to] of state.legalTargets.entries()) {
      if (to === 'off') {
        if (offEls.W) offEls.W.classList.add('is-target');
        continue;
      }
      const el = pointEls.get(to);
      if (el) el.classList.add('is-target');
    }
  }

  function onOffClick() {
    if (state.phase !== Phase.MOVING) return;
    if (state.turn !== P.WHITE) return;
    if (state.selectedFrom == null) return;

    const candidate = state.legalTargets.get('off');
    if (!candidate) return;

    const move = pickMoveForTarget(candidate);
    pushHistory();
    performMoveWithAnimation(P.WHITE, move).then(() => {
      state.selectedFrom = null;
      state.legalTargets = new Map();
      afterHumanMove();
    });
  }

  function updateMetaUI() {
    els.turnPill.textContent = state.turn === P.WHITE ? 'Sen (Beyaz)' : 'Bilgisayar (Siyah)';
    els.phasePill.textContent = state.phase;

    els.barText.textContent = `W ${state.bar.W} — B ${state.bar.B}`;
    els.offText.textContent = `W ${state.off.W} — B ${state.off.B}`;

    els.undoBtn.disabled = state.history.length === 0 || state.turn !== P.WHITE || (state.phase !== Phase.MOVING);
  }

  function renderAll() {
    updateDiceUI();
    renderStacks();
    renderBar();
    renderHighlights();
    updateMetaUI();

    const winner = checkWinner(state);
    if (winner && state.phase !== Phase.GAME_OVER) {
      state.winner = winner;
      state.phase = Phase.GAME_OVER;
      const msg = winner === P.WHITE ? 'You won!' : 'AI won.';
      openModal('Game Over', msg);
      setStatus(msg);
    }
  }

  // ----- Human interaction -----

  function computeSelectableSourcesForHuman() {
    // If bar has checkers, only bar is selectable (represented by not showing a point)
    if (state.bar.W > 0) return new Set(['bar']);

    const sources = new Set();
    const dice = state.availableDice;
    const sgn = sign(P.WHITE);

    for (const d of dice) {
      const moves = enumerateSingleMoves(state, P.WHITE, d);
      for (const m of moves) {
        if (m.from !== 'bar') sources.add(m.from);
      }
    }

    // If no moves exist, empty
    // Also allow selection if point has white checkers
    // (sources already handles legality)
    return sources;
  }

  function computeTargetsForSelection(selection) {
    const targets = new Map();
    for (const die of state.availableDice) {
      const moves = enumerateSingleMoves(state, P.WHITE, die);
      for (const m of moves) {
        if (m.from !== selection) continue;
        const key = m.to;
        if (!targets.has(key)) targets.set(key, []);
        targets.get(key).push(m);
      }
    }
    return targets;
  }

  function pickMoveForTarget(targetMoves) {
    // Prefer exact die usage / any ordering is okay; if multiple moves to same target exist
    // choose the one with higher die (generally more flexible)
    return targetMoves.slice().sort((a, b) => b.die - a.die)[0];
  }

  function onPointClick(e) {
    if (state.phase !== Phase.MOVING) return;
    if (state.turn !== P.WHITE) return;

    const point = Number(e.currentTarget.dataset.point);

    // If bar checkers exist, points cannot be selected, only entry targets
    if (state.bar.W > 0) {
      // Treat click as choosing entry target
      const targets = computeTargetsForSelection('bar');
      const candidate = targets.get(point);
      if (!candidate) return;

      const move = pickMoveForTarget(candidate);
      pushHistory();
      performMoveWithAnimation(P.WHITE, move).then(() => {
        state.selectedFrom = null;
        state.legalTargets = new Map();
        afterHumanMove();
      });
      return;
    }

    const owner = pointOwner(state.points, point);
    if (state.selectedFrom == null) {
      // Select source
      if (owner !== P.WHITE) return;

      const targets = computeTargetsForSelection(point);
      if (targets.size === 0) return;

      state.selectedFrom = point;
      state.legalTargets = targets;
      setStatus('Choose a highlighted destination.');
      renderAll();
      return;
    }

    // If the clicked point is a legal destination, move there (even if it contains your own checkers)
    const candidate = state.legalTargets.get(point);
    if (candidate) {
      const move = pickMoveForTarget(candidate);
      pushHistory();
      performMoveWithAnimation(P.WHITE, move).then(() => {
        state.selectedFrom = null;
        state.legalTargets = new Map();
        afterHumanMove();
      });
      return;
    }

    // If selecting a different source, switch
    if (state.selectedFrom !== point && owner === P.WHITE) {
      const targets = computeTargetsForSelection(point);
      if (targets.size > 0) {
        state.selectedFrom = point;
        state.legalTargets = targets;
        renderAll();
      }
      return;
    }
  }

  function pushHistory() {
    state.history.push({
      points: state.points.slice(),
      bar: { ...state.bar },
      off: { ...state.off },
      availableDice: state.availableDice.slice(),
      selectedFrom: state.selectedFrom,
    });
  }

  function undo() {
    if (state.history.length === 0) return;
    const prev = state.history.pop();
    state.points = prev.points;
    state.bar = prev.bar;
    state.off = prev.off;
    state.availableDice = prev.availableDice;
    state.selectedFrom = prev.selectedFrom;
    state.legalTargets = new Map();
    setStatus('Undone. Continue your move.');
    renderAll();
  }

  function applyMoveAndConsumeDie(move) {
    applyMoveInPlace(state, P.WHITE, move);
    const idx = state.availableDice.indexOf(move.die);
    if (idx >= 0) state.availableDice.splice(idx, 1);
    state.selectedFrom = null;
    state.legalTargets = new Map();
  }

  function afterHumanMove() {
    const winner = checkWinner(state);
    if (winner) {
      renderAll();
      return;
    }

    if (state.availableDice.length === 0) {
      endTurnToAI();
      return;
    }

    // If no legal moves left with remaining dice, end turn
    if (!anyLegalMove(state, P.WHITE, state.availableDice)) {
      endTurnToAI();
      return;
    }

    setStatus('Your move.');
    renderAll();
  }

  // ----- Turn management -----

  function beginTurn(player) {
    state.turn = player;
    state.phase = Phase.NEED_ROLL;
    state.dice = [];
    state.availableDice = [];
    state.selectedFrom = null;
    state.legalTargets = new Map();
    state.history = [];

    if (player === P.WHITE) {
      setStatus('Sıra sende. Zar at.');
    } else {
      setStatus('Bilgisayar sırası. Zar atılıyor…');
    }

    renderAll();
  }

  function doRoll() {
    if (state.phase !== Phase.NEED_ROLL) return;

    SFX.dice();
    const d = rollDice();
    state.dice = d;
    state.availableDice = expandDice(d);

    if (state.turn === P.WHITE) {
      // If no legal moves, pass automatically
      if (!anyLegalMove(state, P.WHITE, state.availableDice)) {
        setStatus('Geçerli hamle yok. Bilgisayara geçiliyor.');
        renderAll();
        window.setTimeout(endTurnToAI, 450);
        return;
      }

      state.phase = Phase.MOVING;
      setStatus('Hamlen.');
      renderAll();
      return;
    }

    // AI
    state.phase = Phase.AI_THINKING;
    setStatus('Bilgisayar düşünüyor…');
    renderAll();
    window.setTimeout(runAiTurn, 350);
  }

  function endTurnToAI() {
    state.selectedFrom = null;
    state.legalTargets = new Map();
    beginTurn(P.BLACK);
    // Auto roll for AI
    window.setTimeout(doRoll, 250);
  }

  function endTurnToHuman() {
    beginTurn(P.WHITE);
  }

  function runAiTurn() {
    if (state.turn !== P.BLACK) return;
    if (state.phase !== Phase.AI_THINKING) return;

    if (!anyLegalMove(state, P.BLACK, state.availableDice)) {
      setStatus('AI has no legal moves. Your turn.');
      renderAll();
      window.setTimeout(endTurnToHuman, 500);
      return;
    }

    const seq = pickAiSequence(state);

    (async () => {
      for (const m of seq) {
        await performMoveWithAnimation(P.BLACK, m);
        await new Promise((r) => window.setTimeout(r, ANIM.aiStepMs));
      }

      const w = checkWinner(state);
      if (w) {
        renderAll();
        return;
      }

      setStatus('Your turn.');
      renderAll();
      window.setTimeout(endTurnToHuman, 450);
    })();
  }

  // ----- New game -----

  function newGame() {
    closeModal();
    state = createInitialState();
    layoutPoints();
    setStatus('Your turn. Click Roll.');
    renderAll();
  }

  // ----- Wire up -----

  els.rollBtn.addEventListener('click', () => {
    if (state.phase !== Phase.NEED_ROLL) return;
    doRoll();
  });

  els.undoBtn.addEventListener('click', () => {
    undo();
  });

  els.newGameBtn.addEventListener('click', () => {
    newGame();
  });

  els.modalPrimaryBtn.addEventListener('click', () => {
    newGame();
  });

  // Initial paint
  layoutPoints();
  newGame();

  // Unlock audio on first user gesture (browser autoplay policies)
  window.addEventListener('pointerdown', () => {
    SFX.unlock();
  }, { once: true });
})();
