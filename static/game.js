import { Backgammon3D } from './src/Backgammon3D.js';

(() => {
  'use strict';

  console.log('game.js loaded successfully');

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

  // Global multiplayer variables
  let isMultiplayer = false;
  let playerColor = null;
  let roomCode = null;
  let opponentName = null;

  // 3D Engine
  const bg3d = new Backgammon3D();

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
      if (!c || c.state !== 'running') return; // Prevent errors if suspended

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
      if (!c || c.state !== 'running') return; // Prevent errors if suspended

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
      if (!c || c.state !== 'running') return; // Prevent errors if suspended

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
    // const fromPos = getActualCheckerPosition(player, move.from);

    // Render current state, then animate, then apply and re-render.
    // Render current state, then animate, then apply and re-render.
    renderAll();
    SFX.move();
    // await animateMove(player, move, fromPos); // DOM
    await bg3d.animateMove(player, move); // 3D
    applyMoveInPlace(state, player, move);
    const idx = state.availableDice.indexOf(move.die);
    if (idx >= 0) state.availableDice.splice(idx, 1);
    if (willHit) {
      SFX.hit();
      els.board.classList.add('is-hit');
      window.setTimeout(() => els.board.classList.remove('is-hit'), 280);
    }
    renderAll();

    // Send move to peer in multiplayer
    if (isMultiplayer) {
      sendMove(move);
    }

    // Handle turn switching
    if (isMultiplayer) {
      if ((playerColor === 'W' && player === P.WHITE) || (playerColor === 'B' && player === P.BLACK)) {
        afterHumanMove();
      }
    } else if (player === P.WHITE) {
      afterHumanMove();
    }
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
    // FIX: Use generateMoveSequences to properly handle bar re-entry with multiple checkers
    // This correctly tries all permutations instead of just checking each die independently
    const seqs = generateMoveSequences(state, player, dice);

    // DEBUG LOG - sadece bar'da 2+ taş varsa
    const barCount = state.bar[player];
    if (barCount >= 2) {
      const playerName = player === P.WHITE ? 'WHITE' : 'BLACK';
      const hasValidMoves = seqs.length > 0;
      console.log(`[MOVE CHECK] ${playerName} Bar:${barCount} Dice:${dice.join(',')} → ${hasValidMoves ? '✓ HAM LE VAR' : '✗ HAMLE YOK'}`);
    }

    return seqs.length > 0;
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
    youLabel: document.getElementById('youLabel'),
    aiLabel: document.getElementById('aiLabel'),
    opponentLabel: document.getElementById('opponentLabel'),
    barText: document.getElementById('barText'),
    offText: document.getElementById('offText'),
    modal: document.getElementById('modal'),
    modalTitle: document.getElementById('modalTitle'),
    modalBody: document.getElementById('modalBody'),
    modalPrimaryBtn: document.getElementById('modalPrimaryBtn'),
    fullscreenBtn: document.getElementById('fullscreenBtn'),
    multiplayerBtn: document.getElementById('multiplayerBtn'),
    multiplayerModal: document.getElementById('multiplayerModal'),
    multiplayerModalTitle: document.getElementById('multiplayerModalTitle'),
    playerNameInput: document.getElementById('playerNameInput'),
    roomCodeInput: document.getElementById('roomCodeInput'),
    createRoomBtn: document.getElementById('createRoomBtn'),
    joinRoomBtn: document.getElementById('joinRoomBtn'),
    leaveRoomBtn: document.getElementById('leaveRoomBtn'),
    currentRoomCode: document.getElementById('currentRoomCode'),
    opponentName: document.getElementById('opponentName'),
    roomInfo: document.getElementById('roomInfo'),
    multiplayerModalClose: document.getElementById('multiplayerModalClose'),
  };

  // Pre-create point elements (1..24)
  const pointEls = new Map();
  const offEls = { W: null, B: null };
  const barEls = { W: null, B: null };

  function layoutPoints() {
    els.overlay.innerHTML = '';
    pointEls.clear();

    // Aggressively hide old board overlay
    const boardWrap = document.querySelector('.boardWrap');
    if (boardWrap) boardWrap.style.display = 'none';

    // Init 3D Engine
    const container = document.getElementById('board-container');
    bg3d.init(container);

    // Setup callbacks
    bg3d.callbacks.onPointClick = (pointIdx) => {
      // Simulate DOM event for existing logic
      // We can just call onPointClick with a fake target or simple logic
      handlePointClick(pointIdx);
    };

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

    // Can roll when it's NEED_ROLL and it's this client's turn.
    const isPlayerTurn = isMultiplayer ? (state.turn === playerColor) : (state.turn === P.WHITE);
    const canRoll = state.phase === Phase.NEED_ROLL && isPlayerTurn;
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
      // store chip size on the point so CSS can size children responsively
      el.style.setProperty('--chip-size', `${chip}px`);
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
        // Position using percentage so stacking scales with point height
        const offsetPx = padding + k * step;
        const offsetPct = (offsetPx / rect.height) * 100;
        if (isTop) {
          chipEl.style.top = `${offsetPct}%`;
        } else {
          chipEl.style.bottom = `${offsetPct}%`;
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
        // size via CSS variable on the zone
        zone.style.setProperty('--chip-size', `${chip}px`);
        const offsetPx = padding + i * step;
        const offsetPct = (offsetPx / rect.height) * 100;
        if (player === P.BLACK) {
          chipEl.style.bottom = `${offsetPct}%`;
        } else {
          chipEl.style.top = `${offsetPct}%`;
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
    const currentPlayer = isMultiplayer ? playerColor : P.WHITE;
    if (state.turn !== currentPlayer || state.phase !== Phase.MOVING) return;

    const selectable = computeSelectableSourcesForHuman();
    for (const src of selectable) {
      if (src === 'bar') continue;
      const el = pointEls.get(src);
      if (el) el.classList.add('is-selectable');
    }

    // highlight targets for current selection
    for (const [to] of state.legalTargets.entries()) {
      if (to === 'off') {
        if (currentPlayer === 'W' && offEls.W) offEls.W.classList.add('is-target');
        if (currentPlayer === 'B' && offEls.B) offEls.B.classList.add('is-target');
        continue;
      }
      const el = pointEls.get(to);
      if (el) el.classList.add('is-target');
    }
  }

  function onOffClick() {
    if (state.phase !== Phase.MOVING) return;

    // Check if it's the current player's turn
    const currentPlayer = isMultiplayer ? playerColor : P.WHITE;
    if (state.turn !== currentPlayer) return;
    if (state.selectedFrom == null) return;

    const candidate = state.legalTargets.get('off');
    if (!candidate) return;

    const move = pickMoveForTarget(candidate);
    pushHistory();
    performMoveWithAnimation(currentPlayer, move).then(() => {
      state.selectedFrom = null;
      state.legalTargets = new Map();
      afterHumanMove();
    });
  }

  function updateMetaUI() {
    if (isMultiplayer) {
      // Multiplayer: show both players with their colors
      if (playerColor === 'W') {
        els.turnPill.textContent = state.turn === P.WHITE ? 'Sen (Beyaz)' : 'Rakip (Siyah)';
        els.youLabel.textContent = 'Beyaz';
        els.aiLabel.textContent = 'Siyah';
      } else {
        els.turnPill.textContent = state.turn === P.BLACK ? 'Sen (Siyah)' : 'Rakip (Beyaz)';
        els.youLabel.textContent = 'Siyah';
        els.aiLabel.textContent = 'Beyaz';
      }
      // Update opponent label to show their name
      els.opponentLabel.textContent = opponentName || 'Rakip';
    } else {
      // Single player: Bilgisayar vs player
      els.turnPill.textContent = state.turn === P.WHITE ? 'Sen (Beyaz)' : 'Bilgisayar (Siyah)';
      els.youLabel.textContent = 'Beyaz';
      els.aiLabel.textContent = 'Siyah';
      els.opponentLabel.textContent = 'Bilgisayar';
    }

    els.phasePill.textContent = state.phase;

    els.barText.textContent = `W ${state.bar.W} — B ${state.bar.B}`;
    els.offText.textContent = `W ${state.off.W} — B ${state.off.B}`;

    els.undoBtn.disabled = state.history.length === 0 || state.turn !== P.WHITE || (state.phase !== Phase.MOVING);
  }

  // ----- Global Functions for HTML Access -----

  function getGameState() {
    // Create a clean copy of state without Map objects (PeerJS can't serialize Maps)
    const cleanState = {
      ...state,
      legalTargets: {} // Remove Map object
    };
    return cleanState;
  }

  function initializeGame(receivedState) {
    state = receivedState;
    // Convert legalTargets back to Map object
    state.legalTargets = new Map();
    isMultiplayer = true;
    renderAll();
    setStatus('Oyun başladı! İyi eğlenceler!');
  }

  // Make functions global for HTML onclick (moved to end)
  window.openMultiplayerModal = openMultiplayerModal;
  window.createRoom = createRoom;
  window.joinRoom = joinRoom;
  window.leaveRoom = leaveRoom;
  window.closeMultiplayerModal = closeMultiplayerModal;
  window.getGameState = getGameState;
  window.initializeGame = initializeGame;
  window.updateOpponentName = updateOpponentName;

  // Move handlePointClick outside of onPointClick to be reused
  function handlePointClick(point) {
    if (state.phase !== Phase.MOVING) return;

    const currentPlayer = isMultiplayer ? playerColor : P.WHITE;
    if (state.turn !== currentPlayer) return;

    // Check Bar First
    if (state.bar[currentPlayer] > 0) {
      // Treat click as choosing entry target
      const targets = computeTargetsForSelection('bar');
      const candidate = targets.get(point);
      if (!candidate) return;

      const move = pickMoveForTarget(candidate);
      pushHistory();
      performMoveWithAnimation(currentPlayer, move).then(() => {
        state.selectedFrom = null;
        state.legalTargets = new Map();
        afterHumanMove();
      });
      return;
    }

    const owner = pointOwner(state.points, point);
    if (state.selectedFrom == null) {
      if (owner !== currentPlayer) return;

      const targets = computeTargetsForSelection(point);
      if (targets.size === 0) return;

      state.selectedFrom = point;
      state.legalTargets = targets;
      setStatus('Choose a highlighted destination.');
      renderAll();
      return;
    }

    // Destination?
    const candidate = state.legalTargets.get(point);
    if (candidate) {
      const move = pickMoveForTarget(candidate);
      pushHistory();
      performMoveWithAnimation(currentPlayer, move).then(() => {
        state.selectedFrom = null;
        state.legalTargets = new Map();
        afterHumanMove();
      });
      return;
    }

    // Switch selection?
    if (state.selectedFrom !== point && owner === currentPlayer) {
      const targets = computeTargetsForSelection(point);
      if (targets.size > 0) {
        state.selectedFrom = point;
        state.legalTargets = targets;
        renderAll();
      }
      return;
    }
  }

  function renderAll() {
    updateDiceUI();
    // renderStacks(); // Removed DOM rendering
    // renderBar();    // Removed DOM rendering
    renderHighlights(); // Updates 3D highlights
    updateMetaUI();

    // Sync 3D State
    bg3d.syncState(state);

    // Apply board rotation for Black player in multiplayer
    if (isMultiplayer && playerColor === 'B') {
      els.board.classList.add('board--black-view');
    } else {
      els.board.classList.remove('board--black-view');
    }

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
    const currentPlayer = isMultiplayer ? playerColor : P.WHITE;

    // If bar has checkers, only bar is selectable (represented by not showing a point)
    if (state.bar[currentPlayer] > 0) return new Set(['bar']);

    const sources = new Set();
    const dice = state.availableDice;

    for (const d of dice) {
      const moves = enumerateSingleMoves(state, currentPlayer, d);
      for (const m of moves) {
        if (m.from !== 'bar') sources.add(m.from);
      }
    }

    // If no moves exist, empty
    // Also allow selection if point has current player's checkers
    // (sources already handles legality)
    return sources;
  }

  function computeTargetsForSelection(selection) {
    const currentPlayer = isMultiplayer ? playerColor : P.WHITE;
    const targets = new Map();
    for (const die of state.availableDice) {
      const moves = enumerateSingleMoves(state, currentPlayer, die);
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

    // In multiplayer, check if it's the current player's turn
    // In single-player, only WHITE can make moves
    const currentPlayer = isMultiplayer ? playerColor : P.WHITE;
    if (state.turn !== currentPlayer) return;

    const point = Number(e.currentTarget.dataset.point);

    // If bar checkers exist, points cannot be selected, only entry targets
    if (state.bar[currentPlayer] > 0) {
      // Treat click as choosing entry target
      const targets = computeTargetsForSelection('bar');
      const candidate = targets.get(point);
      if (!candidate) return;

      const move = pickMoveForTarget(candidate);
      pushHistory();
      performMoveWithAnimation(currentPlayer, move).then(() => {
        state.selectedFrom = null;
        state.legalTargets = new Map();
        afterHumanMove();
      });
      return;
    }

    const owner = pointOwner(state.points, point);
    if (state.selectedFrom == null) {
      // Select source
      if (owner !== currentPlayer) return;

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
      performMoveWithAnimation(currentPlayer, move).then(() => {
        state.selectedFrom = null;
        state.legalTargets = new Map();
        afterHumanMove();
      });
      return;
    }

    // If selecting a different source, switch
    if (state.selectedFrom !== point && owner === currentPlayer) {
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

    // Turn ends if no dice are left, OR no legal moves are possible with the remaining dice.
    if (state.availableDice.length === 0 || !anyLegalMove(state, state.turn, state.availableDice)) {
      console.log(`[TURN END] ${state.turn === P.WHITE ? 'WHITE' : 'BLACK'} hamle yapamıyor, sıra rakibe geçiyor`);

      if (isMultiplayer) {
        // End of current player's turn, switch to opponent.
        state.turn = opponent(state.turn);
        console.log(`[MULTIPLAYER] Sıra şimdi: ${state.turn === P.WHITE ? 'WHITE' : 'BLACK'}`);
        beginTurn(state.turn);
      } else {
        // In single player, switch to AI.
        console.log(`[SINGLE PLAYER] AI'ya geçiliyor`);
        endTurnToAI();
      }
      return; // Crucial: exit after handling turn end.
    }

    // If we reach here, it means the current player's turn continues.
    // Set status and re-render to allow for the next move.
    console.log(`[TURN CONTINUE] ${state.turn === P.WHITE ? 'WHITE' : 'BLACK'} hamle yapmaya devam edebilir`);
    setStatus('Devam et.'); // "Continue."
    renderAll();
  }

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
    } else if (isMultiplayer) {
      setStatus('Rakip sırası');
    } else {
      setStatus('Bilgisayar sırası. Zar atılıyor…');
    }

    renderAll();
  }

  function doRoll() {
    if (state.phase !== Phase.NEED_ROLL) return;

    // Multiplayer turn control
    if (isMultiplayer) {
      const isMyTurn = (playerColor === 'W' && state.turn === P.WHITE) ||
        (playerColor === 'B' && state.turn === P.BLACK);
      if (!isMyTurn) {
        setStatus('Rakibin sırası');
        return;
      }
    }

    // Multiplayer: ask server to roll and broadcast result
    if (isMultiplayer) {
      SFX.dice();
      if (!ws || ws.readyState !== WebSocket.OPEN) {
        setStatus('Sunucuya bağlı değil');
        return;
      }
      console.log(`[MULTIPLAYER ROLL] ${state.turn === P.WHITE ? 'WHITE' : 'BLACK'} zar atma isteği gönderiliyor`);
      sendRollRequest();
      setStatus('Zar isteniyor...');
      return;
    }

    // Single-player local roll
    SFX.dice();
    const d = rollDice();
    state.dice = d;
    state.availableDice = expandDice(d);

    if (state.turn === P.WHITE) {
      // If no legal moves, pass automatically
      if (!anyLegalMove(state, P.WHITE, state.availableDice)) {
        setStatus('Geçerli hamle yok. Rakibe geçiliyor.');
        renderAll();
        window.setTimeout(() => {
          if (isMultiplayer) {
            beginTurn(opponent(state.turn));
          } else {
            endTurnToAI();
          }
        }, 450);
        return;
      }

      state.phase = Phase.MOVING;
      setStatus('Hamlen.');
      renderAll();
      return;
    }

    // Multiplayer: Black player's turn
    if (isMultiplayer && state.turn === P.BLACK) {
      if (!anyLegalMove(state, P.BLACK, state.availableDice)) {
        setStatus('Rakip geçerli hamle yok. Sıra sende.');
        renderAll();
        window.setTimeout(() => {
          state.turn = P.WHITE;
          state.phase = Phase.NEED_ROLL;
          setStatus('Sıra sende. Zar at.');
        }, 450);
        return;
      }

      state.phase = Phase.MOVING;
      setStatus('Rakip hamle yapıyor.');
      renderAll();
      return;
    }
    if (isMultiplayer && state.turn === P.WHITE) {
      if (!anyLegalMove(state, P.WHITE, state.availableDice)) {
        setStatus('Rakip geçerli hamle yok. Sıra sende.');
        renderAll();
        window.setTimeout(() => {
          state.turn = P.BLACK;
          state.phase = Phase.NEED_ROLL;
          setStatus('Sıra sende. Zar at.');
        }, 450);
        return;
      }

      state.phase = Phase.MOVING;
      setStatus('Rakip hamle yapıyor.');
      renderAll();
      return;
    }

    // Single player: AI's turn
    if (state.turn === P.BLACK) {
      state.phase = Phase.AI_THINKING;
      renderAll();
      window.setTimeout(runAiTurn, ANIM.aiStepMs);
    }
  }

  function newGame() {
    closeModal();
    state = createInitialState();
    if (isMultiplayer) {
      playerColor = isHost ? 'W' : 'B';
      beginTurn(P.WHITE);
      if (ws && ws.readyState === WebSocket.OPEN) {
        ws.send(JSON.stringify({ type: 'NEW_GAME' }));
      }
    } else {
      beginTurn(P.WHITE);
    }
  }

  function updateOpponentName(name) {
    opponentName = name;
    els.opponentName.textContent = name;
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

  // ----- Multiplayer (WebSocket) -----

  let ws = null;
  let isHost = false;

  function openMultiplayerModal() {
    console.log('Opening multiplayer modal');
    els.multiplayerModal.classList.add('is-open');
    els.multiplayerModal.setAttribute('aria-hidden', 'false');
  }

  function closeMultiplayerModal() {
    els.multiplayerModal.classList.remove('is-open');
    els.multiplayerModal.setAttribute('aria-hidden', 'true');
  }

  function showRoomInfo(code, opponent) {
    els.currentRoomCode.textContent = code;
    els.opponentName.textContent = opponent || 'Bekleniyor...';
    els.roomInfo.style.display = 'block';
  }

  function hideRoomInfo() {
    els.roomInfo.style.display = 'none';
  }

  function connectWS() {
    if (ws && ws.readyState === WebSocket.OPEN) return;

    const proto = location.protocol === 'https:' ? 'wss' : 'ws';
    const host = location.hostname || 'localhost';
    const port = location.port ? `:${location.port}` : '';
    const url = `${proto}://${host}${port}`;

    ws = new WebSocket(url);

    ws.addEventListener('open', () => {
      console.log('WebSocket connected to', url);
      setStatus('Sunucuya bağlandı');
    });

    ws.addEventListener('message', (ev) => {
      try {
        const data = JSON.parse(ev.data);
        handleServerMessage(data);
      } catch (err) {
        console.error('Invalid WS message', err);
      }
    });

    ws.addEventListener('close', () => {
      console.log('WebSocket closed');
      setStatus('Rakip bağlantısı kesildi');
      resetMultiplayer();
      ws = null;
    });

    ws.addEventListener('error', (err) => {
      console.error('WebSocket error', err);
      setStatus('WebSocket hatası');
    });
  }

  function handleServerMessage(msg) {
    // DEBUG: Log all incoming messages
    if (msg.type === 'DICE_ROLLED' || msg.type === 'MOVE_MADE') {
      console.log(`[SERVER MSG] Type: ${msg.type}`, msg);
    }

    switch (msg.type) {
      case 'ROOM_CREATED':
        roomCode = msg.roomCode;
        playerColor = msg.player === 'W' ? 'W' : 'B';
        isHost = msg.player === 'W';
        state = msg.gameState || createInitialState();
        isMultiplayer = true;
        showRoomInfo(roomCode, 'Bekleniyor...');
        setStatus(`Oda oluşturuldu: ${roomCode}. Rakip bekleniyor...`);
        renderAll();
        break;

      case 'JOINED':
        // Direct confirmation for the joining client
        roomCode = msg.roomCode;
        playerColor = msg.player;  // 'W' or 'B' from server
        isHost = false;
        state = msg.gameState || createInitialState();
        isMultiplayer = true;
        showRoomInfo(roomCode, 'Bekleniyor...');
        setStatus(`Odaya katıldınız: ${roomCode}`);
        renderAll();
        break;

      case 'PLAYER_JOINED':
        state = msg.gameState || state;
        isMultiplayer = true;
        setStatus('Rakip katıldı, oyun başlıyor');
        showRoomInfo(roomCode, 'Rakip');
        renderAll();
        break;

      case 'DICE_ROLLED':
        console.log(`[DICE ROLLED] BEFORE - state.dice=${JSON.stringify(state.dice)} | state.phase=${state.phase}`);

        if (msg.gameState) {
          console.log(`[GAMESTATE CHECK] msg.gameState.dice=${JSON.stringify(msg.gameState.dice)} | msg.gameState.phase=${msg.gameState.phase}`);

          state = msg.gameState;
          state.legalTargets = new Map();

          console.log(`[GAMESTATE AFTER] state.dice=${JSON.stringify(state.dice)} | state.phase=${state.phase} | state.turn=${state.turn}`);

          // If server didn't send dice/availableDice, use msg fields
          if (msg.dice && (!state.dice || state.dice.length === 0)) {
            state.dice = msg.dice;
            state.availableDice = msg.availableDice || expandDice(msg.dice);
            console.log(`[DICE ROLLED FIX] msg'den dice alındı: ${state.dice.join(',')}`);
          }

          console.log(`[DICE ROLLED FINAL] Zarlar: ${state.dice ? state.dice.join(',') : 'BOŞŞ!'} | Available: ${state.availableDice ? state.availableDice.join(',') : 'BOŞŞ!'} | Turn: ${state.turn === P.WHITE ? 'WHITE' : 'BLACK'} | Phase: ${state.phase}`);

          // Check if turn player has legal moves
          if (!anyLegalMove(state, state.turn, state.availableDice)) {
            console.log(`[TURN END AUTO] ${state.turn === P.WHITE ? 'WHITE' : 'BLACK'} hamle yapamıyor, sıra değişiyor`);
            state.turn = opponent(state.turn);
            state.phase = Phase.NEED_ROLL;
            setStatus(`Geçerli hamle yok. ${state.turn === playerColor ? 'Senin sıran.' : 'Rakip sırası'}`);
          } else {
            state.phase = Phase.MOVING;
            setStatus(`Zar atıldı: ${state.dice.join(', ')}. ${state.turn === playerColor ? 'Hamlen.' : 'Rakip hamle yapıyor.'}`);
          }
        }
        renderAll();
        break;

      case 'MOVE_MADE':
        if (msg.move) {
          // server already updated gameState; prefer authoritative state
          if (msg.gameState) {
            state = msg.gameState;
            state.legalTargets = new Map();
          } else {
            applyMoveFromPeer(msg.move, msg.player || (playerColor === 'W' ? 'B' : 'W'));
          }
          renderAll();
          setStatus('Rakip hamle yaptı');
        }
        break;

      case 'MOVE_UNDONE':
      case 'NEW_GAME':
        if (msg.gameState) {
          state = msg.gameState;
          state.legalTargets = new Map();
          renderAll();
        }
        break;

      case 'ERROR':
        alert(msg.message || 'Sunucu hatası');
        break;

      default:
        console.log('Unhandled server message', msg.type);
    }
  }

  function sendMove(move) {
    if (!ws || ws.readyState !== WebSocket.OPEN) return;
    ws.send(JSON.stringify({ type: 'MAKE_MOVE', move }));
  }

  function sendRollRequest() {
    if (!ws || ws.readyState !== WebSocket.OPEN) return;
    ws.send(JSON.stringify({ type: 'ROLL_DICE' }));
  }

  function createRoom() {
    const playerName = els.playerNameInput.value.trim();
    if (!playerName) {
      alert('Lütfen isminizi girin');
      return;
    }
    connectWS();
    // send create room request once socket is open
    const sendCreate = () => {
      if (!ws || ws.readyState !== WebSocket.OPEN) {
        setTimeout(sendCreate, 150);
        return;
      }
      ws.send(JSON.stringify({ type: 'CREATE_ROOM', playerName }));
    };
    sendCreate();
    isHost = true;
    closeMultiplayerModal();
  }

  function joinRoom() {
    const roomCodeInput = els.roomCodeInput.value.trim();
    const playerName = els.playerNameInput.value.trim();

    if (!playerName) {
      alert('Lütfen isminizi girin');
      return;
    }

    if (!roomCodeInput) {
      alert('Lütfen oda kodunu girin');
      return;
    }
    // enforce 2-digit numeric room codes
    if (!/^\d{2}$/.test(roomCodeInput)) {
      alert('Oda kodu iki rakam olmalıdır (ör. 42)');
      return;
    }

    connectWS();
    const sendJoin = () => {
      if (!ws || ws.readyState !== WebSocket.OPEN) {
        setTimeout(sendJoin, 150);
        return;
      }
      ws.send(JSON.stringify({ type: 'JOIN_ROOM', roomCode: roomCodeInput, playerName }));
      roomCode = roomCodeInput;
      isHost = false;
      closeMultiplayerModal();
    };
    sendJoin();
  }

  function leaveRoom() {
    if (ws) {
      try { ws.close(); } catch { }
      ws = null;
    }
    resetMultiplayer();
    setStatus('Çok oyunculu moddan çıkıldı');
    state = createInitialState();
    renderAll();
  }

  function resetMultiplayer() {
    isMultiplayer = false;
    playerColor = null;
    roomCode = null;
    opponentName = null;
    isHost = false;
    hideRoomInfo();
  }

  function applyMoveFromPeer(move, player) {
    // Apply move logic for peer moves
    const playerObj = player === 'W' ? P.WHITE : P.BLACK;
    applyMoveInPlace(state, playerObj, move);
    const idx = state.availableDice.indexOf(move.die);
    if (idx >= 0) state.availableDice.splice(idx, 1);
    renderAll();
    setStatus('Rakip hamle yaptı');

    // If this was the opponent's move, check if their turn should end
    const opponent_color = playerColor === 'W' ? 'B' : 'W';
    if (player === opponent_color) {
      // Check if opponent has more legal moves
      if (state.availableDice.length === 0 || !anyLegalMove(state, playerObj, state.availableDice)) {
        // Opponent's turn ended, now it's my turn
        state.turn = playerColor === 'W' ? P.WHITE : P.BLACK;
        beginTurn(state.turn);
      } else {
        setStatus('Rakip hamle yapmaya devam ediyor');
        renderAll();
      }
    }
  }

  // ----- Wire up -----

  function toggleFullscreen() {
    const doc = document.documentElement;

    if (!document.fullscreenElement) {
      // Fullscreen'e gir
      const request = doc.requestFullscreen ||
        doc.webkitRequestFullscreen ||
        doc.mozRequestFullScreen ||
        doc.msRequestFullscreen;

      if (request) {
        request.call(doc).catch(err => {
          console.warn('Failed to enter fullscreen:', err);
        });
      }
    } else {
      // Fullscreen'den çık
      const exit = document.exitFullscreen ||
        document.webkitExitFullscreen ||
        document.mozCancelFullScreen ||
        document.msExitFullscreen;

      if (exit) {
        exit.call(document).catch(err => {
          console.warn('Failed to exit fullscreen:', err);
        });
      }
    }
  }

  // Fullscreen durumundaki değişiklikleri dinle
  document.addEventListener('fullscreenchange', () => {
    if (document.fullscreenElement) {
      els.fullscreenBtn.textContent = 'Çıkış';
    } else {
      els.fullscreenBtn.textContent = 'Tam Ekran';
    }
  });

  // Webkit için fullscreen değişikliği
  document.addEventListener('webkitfullscreenchange', () => {
    if (document.webkitFullscreenElement) {
      els.fullscreenBtn.textContent = 'Çıkış';
    } else {
      els.fullscreenBtn.textContent = 'Tam Ekran';
    }
  });

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

  els.fullscreenBtn.addEventListener('click', toggleFullscreen);

  els.multiplayerBtn.addEventListener('click', openMultiplayerModal);
  els.multiplayerModalClose.addEventListener('click', closeMultiplayerModal);
  els.createRoomBtn.addEventListener('click', createRoom);
  els.joinRoomBtn.addEventListener('click', joinRoom);
  els.leaveRoomBtn.addEventListener('click', leaveRoom);

  // Unlock audio on first user gesture (browser autoplay policies)
  window.addEventListener('pointerdown', () => {
    SFX.unlock();
  }, { once: true });

  // Recompute layout on resize/orientation changes to keep chips aligned
  function debounce(fn, wait = 120) {
    let t = null;
    return function (...args) {
      if (t) clearTimeout(t);
      t = setTimeout(() => {
        t = null;
        fn.apply(this, args);
      }, wait);
    };
  }

  const handleResize = debounce(() => {
    // Rebuild points and re-render stacks/bars so sizes/percent offsets update
    layoutPoints(); // Keep calling this to update 2D layout just in case
    renderAll(); // Use the main render function which syncs 3D
  }, 140);

  window.addEventListener('resize', handleResize);
  window.addEventListener('orientationchange', () => {
    // orientationchange may fire before layout stabilizes; schedule a short delay
    setTimeout(handleResize, 80);
  });


  // Board layout
  layoutPoints();
  state = createInitialState();
  beginTurn(P.WHITE);
})();