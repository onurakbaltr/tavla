const WebSocket = require('ws');
const http = require('http');
const fs = require('fs');
const path = require('path');

// Create HTTP server (serves static files from project root)
const ROOT = path.resolve(__dirname,"/");
function contentTypeFor(file) {
  const ext = path.extname(file).toLowerCase();
  switch (ext) {
    case '.html': return 'text/html';
    case '.js': return 'application/javascript';
    case '.css': return 'text/css';
    case '.svg': return 'image/svg+xml';
    case '.png': return 'image/png';
    case '.jpg': case '.jpeg': return 'image/jpeg';
    case '.json': return 'application/json';
    default: return 'application/octet-stream';
  }
}

const server = http.createServer((req, res) => {
  try {
    let urlPath = decodeURIComponent(req.url.split('?')[0]);
    if (urlPath === '/') urlPath = '/index.html';
    const filePath = path.join(ROOT, urlPath);
    if (!filePath.startsWith(ROOT)) {
      res.writeHead(403);
      res.end('Forbidden');
      return;
    }

    if (!fs.existsSync(filePath) || fs.statSync(filePath).isDirectory()) {
      res.writeHead(404);
      res.end('Not found');
      return;
    }

    const ct = contentTypeFor(filePath);
    res.writeHead(200, { 'Content-Type': ct });
    const stream = fs.createReadStream(filePath);
    stream.pipe(res);
  } catch (err) {
    res.writeHead(500);
    res.end('Server error');
  }
});

// Create WebSocket server
const wss = new WebSocket.Server({ server });

// Store game rooms
const rooms = new Map();
const clients = new Map();

// Game state structure
function createGameState() {
  const points = new Array(25).fill(0);

  // Standard backgammon start (match client.js createInitialState)
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
    turn: 'W',
    phase: 'NEED_ROLL',
    dice: [],
    availableDice: [],
    selectedFrom: null,
    legalTargets: {},
    history: [],
    message: 'Waiting for players...',
    winner: null,
    players: { W: null, B: null }
  };
}

// Helper functions for move validation (basic backgammon rules ported)
function sign(player) { return player === 'W' ? 1 : -1; }
function opponent(player) { return player === 'W' ? 'B' : 'W'; }
function absPointCount(points, i) { return Math.abs(points[i] || 0); }
function pointOwner(points, i) {
  const v = points[i] || 0;
  if (v > 0) return 'W';
  if (v < 0) return 'B';
  return null;
}
function destinationFromMove(player, from, die) {
  return player === 'W' ? from - die : from + die;
}
function entryPointFromBar(player, die) {
  return player === 'W' ? 25 - die : die;
}
function isPointBlockedFor(player, state, dest) {
  if (dest < 1 || dest > 24) return false;
  const owner = pointOwner(state.points, dest);
  if (!owner) return false;
  if (owner === player) return false;
  return absPointCount(state.points, dest) >= 2;
}
function homeRange(player) {
  return player === 'W' ? { start: 1, end: 6 } : { start: 19, end: 24 };
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
function canBearOffFrom(player, state, from, die) {
  if (!allInHomeOrOff(state, player)) return false;
  const dest = destinationFromMove(player, from, die);
  if (player === 'W') {
    if (dest === 0) return true;
    if (dest < 0) {
      for (let i = from + 1; i <= 6; i++) {
        if (state.points[i] > 0) return false;
      }
      return true;
    }
    return false;
  }
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
  if (state.bar[player] > 0) {
    const dest = entryPointFromBar(player, die);
    if (!isPointBlockedFor(player, state, dest)) moves.push({ from: 'bar', to: dest, die });
    return moves;
  }
  const sgn = sign(player);
  for (let from = 1; from <= 24; from++) {
    const v = state.points[from] || 0;
    if (v * sgn <= 0) continue;
    const dest = destinationFromMove(player, from, die);
    if (dest >= 1 && dest <= 24) {
      if (!isPointBlockedFor(player, state, dest)) moves.push({ from, to: dest, die });
    } else {
      if (canBearOffFrom(player, state, from, die)) moves.push({ from, to: 'off', die });
    }
  }
  return moves;
}
function applyMoveInPlace(state, player, move) {
  const sgn = sign(player);
  const opp = opponent(player);
  if (move.from === 'bar') state.bar[player] -= 1;
  else state.points[move.from] -= sgn;
  if (move.to === 'off') { state.off[player] += 1; return; }
  const dest = move.to;
  const destOwner = pointOwner(state.points, dest);
  const destCount = absPointCount(state.points, dest);
  if (destOwner && destOwner === opp && destCount === 1) {
    state.points[dest] = 0;
    state.bar[opp] += 1;
  }
  state.points[dest] += sgn;
}


// Generate room code
function generateRoomCode() {
  // Generate a two-digit numeric room code (00-99), avoid collisions
  for (let i = 0; i < 10; i++) {
    const n = Math.floor(Math.random() * 100);
    const code = String(n).padStart(2, '0');
    if (!rooms.has(code)) return code;
  }
  // fallback
  return String(Math.floor(Math.random() * 100)).padStart(2, '0');
}

// WebSocket connection handler
wss.on('connection', (ws) => {
  console.log('New client connected');

  ws.on('message', (message) => {
    try {
      const data = JSON.parse(message.toString());
      handleMessage(ws, data);
    } catch (err) {
      console.error('Invalid message:', err);
    }
  });

  ws.on('close', () => {
    console.log('Client disconnected');
    handleDisconnect(ws);
  });
});

// Message handlers
function handleMessage(ws, data) {
  const clientId = clients.get(ws);

  switch (data.type) {
    case 'CREATE_ROOM':
      createRoom(ws, data.playerName);
      break;

    case 'JOIN_ROOM':
      joinRoom(ws, data.roomCode, data.playerName);
      break;

    case 'ROLL_DICE':
      if (clientId) rollDice(clientId);
      break;

    case 'MAKE_MOVE':
      if (clientId) makeMove(clientId, data.move);
      break;

    case 'UNDO':
      if (clientId) undoMove(clientId);
      break;

    case 'NEW_GAME':
      if (clientId) newGame(clientId);
      break;

    default:
      console.log('Unknown message type:', data.type);
  }
}

// Room management
function createRoom(ws, playerName) {
  const roomCode = generateRoomCode();
  const gameState = createGameState();

  rooms.set(roomCode, gameState);
  clients.set(ws, { roomCode, player: 'W', name: playerName });

  gameState.players.W = ws;

  ws.send(JSON.stringify({
    type: 'ROOM_CREATED',
    roomCode,
    player: 'W',
    gameState: cleanState(gameState)
  }));

  console.log(`Room ${roomCode} created by ${playerName}`);
}

function joinRoom(ws, roomCode, playerName) {
  const room = rooms.get(roomCode.toUpperCase());

  if (!room) {
    ws.send(JSON.stringify({
      type: 'ERROR',
      message: 'Room not found'
    }));
    return;
  }

  if (room.players.B) {
    ws.send(JSON.stringify({
      type: 'ERROR',
      message: 'Room is full'
    }));
    return;
  }

  clients.set(ws, { roomCode: roomCode.toUpperCase(), player: 'B', name: playerName });
  room.players.B = ws;

  // Notify the joining client of their player assignment
  try {
    ws.send(JSON.stringify({
      type: 'JOINED',
      roomCode: roomCode.toUpperCase(),
      player: 'B',
      gameState: cleanState(room)
    }));
  } catch (e) {}

  // Send game state to both players (announce join)
  broadcastToRoom(roomCode.toUpperCase(), {
    type: 'PLAYER_JOINED',
    gameState: cleanState(room)
  });

  console.log(`${playerName} joined room ${roomCode}`);
}

// Game actions
function rollDice(clientId) {
  const room = rooms.get(clientId.roomCode);
  if (!room) return;

  const player = clientId.player; // 'W' or 'B'

  // Check if it's this player's turn
  if (room.turn !== player) {
    wsSend(clientId, { type: 'ERROR', message: 'Not your turn' });
    return;
  }

  // Check if we're in the correct phase
  if (room.phase !== 'NEED_ROLL') {
    wsSend(clientId, { type: 'ERROR', message: 'Cannot roll now' });
    return;
  }

  // Standard backgammon roll
  const die1 = Math.floor(Math.random() * 6) + 1;
  const die2 = Math.floor(Math.random() * 6) + 1;

  room.dice = [die1, die2];
  room.availableDice = die1 === die2 ? [die1, die1, die1, die1] : [die1, die2];
  room.phase = 'MOVING';

  // Check if player can make any move with these dice
  // If not, automatically skip turn
  let canMove = false;
  for (const die of room.availableDice) {
    const moves = enumerateSingleMoves(room, player, die);
    if (moves.length > 0) {
      canMove = true;
      break;
    }
  }

  // If can't move, switch turn immediately
  if (!canMove) {
    room.turn = opponent(player);
    room.phase = 'NEED_ROLL';
    room.dice = [];
    room.availableDice = [];
  }

  broadcastToRoom(clientId.roomCode, {
    type: 'DICE_ROLLED',
    gameState: cleanState(room)
  });
}

function makeMove(clientId, move) {
  const room = rooms.get(clientId.roomCode);
  if (!room) return;

  const player = clientId.player; // 'W' or 'B'

  // Check if it's this player's turn
  if (room.turn !== player) {
    wsSend(clientId, { type: 'ERROR', message: 'Not your turn' });
    return;
  }

  // Basic validation: move must have from/to/die
  if (!move || !('from' in move) || !('to' in move) || !('die' in move)) {
    wsSend(clientId, { type: 'ERROR', message: 'Invalid move format' });
    return;
  }

  // Die must be available
  const dieIdx = room.availableDice.indexOf(move.die);
  if (dieIdx < 0) {
    wsSend(clientId, { type: 'ERROR', message: 'Die not available' });
    return;
  }

  // Check legality: enumerate moves for that die and see if requested move exists
  const legal = enumerateSingleMoves(room, player, move.die);
  const ok = legal.some(m => m.from === move.from && m.to === move.to && m.die === move.die);
  if (!ok) {
    wsSend(clientId, { type: 'ERROR', message: 'Illegal move' });
    return;
  }

  // Apply move
  applyMoveInPlace(room, player, move);
  // consume die
  room.availableDice.splice(dieIdx, 1);

  // Winner check
  if (room.off[player] >= 15) {
    room.winner = player;
    room.phase = 'GAME_OVER';
  }

  // If no available dice left, switch turn
  if (room.availableDice.length === 0 && room.phase !== 'GAME_OVER') {
    room.turn = opponent(player);
    room.phase = 'NEED_ROLL';
    room.dice = [];
  }

  broadcastToRoom(clientId.roomCode, {
    type: 'MOVE_MADE',
    move,
    gameState: cleanState(room)
  });
}

function undoMove(clientId) {
  const room = rooms.get(clientId.roomCode);
  if (!room) return;

  // Undo logic (not implemented: placeholder)
  broadcastToRoom(clientId.roomCode, {
    type: 'MOVE_UNDONE',
    gameState: cleanState(room)
  });
}

function newGame(clientId) {
  const roomCode = clientId.roomCode;
  const newState = createGameState();

  // Keep players
  newState.players = rooms.get(roomCode).players;

  rooms.set(roomCode, newState);

  broadcastToRoom(roomCode, {
    type: 'NEW_GAME',
    gameState: cleanState(newState)
  });
}

// Utility functions
function broadcastToRoom(roomCode, message) {
  const room = rooms.get(roomCode);
  if (!room) return;

  [room.players.W, room.players.B].forEach(player => {
    if (player && player.readyState === WebSocket.OPEN) {
      player.send(JSON.stringify(message));
    }
  });
}

function wsSend(clientIdOrWs, message) {
  // If it's a WebSocket, send directly
  if (clientIdOrWs && clientIdOrWs.send) {
    try { clientIdOrWs.send(JSON.stringify(message)); } catch (e) {}
    return;
  }

  // Otherwise find the websocket associated with the clientId object
  for (const [ws, cid] of clients.entries()) {
    if (cid === clientIdOrWs) {
      if (ws && ws.readyState === WebSocket.OPEN) {
        try { ws.send(JSON.stringify(message)); } catch (e) {}
      }
      return;
    }
  }
}

function cleanState(room) {
  if (!room) return null;
  return {
    points: room.points,
    bar: room.bar,
    off: room.off,
    turn: room.turn,
    phase: room.phase,
    dice: room.dice,
    availableDice: room.availableDice,
    selectedFrom: room.selectedFrom,
    legalTargets: room.legalTargets,
    history: room.history,
    message: room.message,
    winner: room.winner,
    players: { W: !!(room.players && room.players.W), B: !!(room.players && room.players.B) }
  };
}

function handleDisconnect(ws) {
  const clientId = clients.get(ws);
  if (!clientId) return;

  const room = rooms.get(clientId.roomCode);
  if (room) {
    if (room.players.W === ws) room.players.W = null;
    if (room.players.B === ws) room.players.B = null;

    // If room is empty, delete it
    if (!room.players.W && !room.players.B) {
      rooms.delete(clientId.roomCode);
    }
  }

  clients.delete(ws);
}

// Start server
const PORT = process.env.PORT || 8080;
server.listen(PORT, () => {
  console.log(`Backgammon multiplayer server running on port ${PORT}`);
});
