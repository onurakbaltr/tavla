const { spawn } = require('child_process');
const WebSocket = require('ws');

const server = spawn(process.execPath, ['server.js'], { cwd: __dirname + '/..' });

server.stdout.on('data', (d) => {
  process.stdout.write(`[server] ${d.toString()}`);
});
server.stderr.on('data', (d) => {
  process.stderr.write(`[server-err] ${d.toString()}`);
});

function waitForServerReady(timeout = 5000) {
  return new Promise((resolve, reject) => {
    const onData = (d) => {
      const s = d.toString();
      if (s.includes('Backgammon multiplayer server running')) {
        server.stdout.removeListener('data', onData);
        resolve();
      }
    };
    server.stdout.on('data', onData);
    setTimeout(() => {
      server.stdout.removeListener('data', onData);
      reject(new Error('server ready timeout'));
    }, timeout);
  });
}

function makeClient(name) {
  const url = 'ws://localhost:8080';
  const ws = new WebSocket(url);
  ws.on('open', () => console.log(`${name}: open`));
  ws.on('message', (m) => console.log(`${name}: recv:`, m.toString()));
  ws.on('close', () => console.log(`${name}: close`));
  ws.on('error', (e) => console.error(`${name}: error`, e));
  return ws;
}

(async () => {
  console.log('Test start');
  try {
    await waitForServerReady(7000);
  } catch (err) {
    console.error('Server did not become ready', err);
    server.kill();
    process.exit(2);
  }

  const a = makeClient('A');
  const b = makeClient('B');
  let roomCode = null;
  let movesCount = 0;
  let lastAvailableDice = [];

  a.on('message', (m) => {
    try {
      const msg = JSON.parse(m.toString());
      if (msg.type === 'ROOM_CREATED') {
        roomCode = msg.roomCode;
        console.log('A got ROOM_CREATED', roomCode);
        setTimeout(() => {
          b.send(JSON.stringify({ type: 'JOIN_ROOM', roomCode, playerName: 'B' }));
        }, 300);
      }

      if (msg.type === 'DICE_ROLLED') {
        console.log('DICE_ROLLED received by A. Turn:', msg.gameState.turn, 'AvailableDice:', msg.gameState.availableDice);
        lastAvailableDice = msg.gameState.availableDice.slice();
        const gs = msg.gameState || {};
        const avail = (gs.availableDice && gs.availableDice.slice()) || [];
        let chosen = null;
        function pointOwner(v) { if ((v||0) > 0) return 'W'; if ((v||0) < 0) return 'B'; return null; }
        // try to find a legal single move for White
        for (let i = 0; i < avail.length && !chosen; i++) {
          const die = avail[i];
          for (let from = 1; from <= 24 && !chosen; from++) {
            const v = gs.points && gs.points[from] || 0;
            if (v <= 0) continue; // not a white checker
            const dest = from - die;
            if (dest >= 1 && dest <= 24) {
              const owner = pointOwner(gs.points[dest]);
              const destCount = Math.abs(gs.points[dest] || 0);
              if (!(owner && owner === 'B' && destCount >= 2)) {
                chosen = { from, to: dest, die };
              }
            } else {
              // allow bearing off simplistically
              chosen = { from, to: 'off', die };
            }
          }
        }
        if (!chosen) chosen = { from: 24, to: 23, die: avail[0] || 1 };
        setTimeout(() => {
          a.send(JSON.stringify({ type: 'MAKE_MOVE', move: chosen }));
        }, 200);
      }

      if (msg.type === 'MOVE_MADE') {
        movesCount++;
        const gs = msg.gameState;
        console.log(`MOVE_MADE #${movesCount}. Turn now:`, gs.turn, 'Phase:', gs.phase, 'AvailableDice:', gs.availableDice);
        
        // If all dice consumed, turn should have switched
        if (gs.availableDice.length === 0) {
          console.log('✓ All dice consumed. Turn switched to:', gs.turn);
          if (gs.turn === 'B') {
            console.log('✓ Turn is now Black! Test passed.');
            server.kill();
            process.exit(0);
          }
        } else {
          // Still have dice, make another move
          setTimeout(() => {
            a.send(JSON.stringify({ type: 'MAKE_MOVE', move: { from: 6, to: 6 - gs.availableDice[0], die: gs.availableDice[0] } }));
          }, 200);
        }
      }
    } catch (err) {
      console.error('A parse error', err);
    }
  });

  b.on('message', (m) => {
    try {
      const msg = JSON.parse(m.toString());
      if (msg.type === 'JOINED') {
        console.log('B got JOINED as player:', msg.player);
      }
      if (msg.type === 'PLAYER_JOINED') {
        console.log('B got PLAYER_JOINED. Starting roll from A');
        setTimeout(() => {
          a.send(JSON.stringify({ type: 'ROLL_DICE' }));
        }, 200);
      }
    } catch (err) {
      console.error('B parse error', err);
    }
  });

  a.on('open', () => {
    a.send(JSON.stringify({ type: 'CREATE_ROOM', playerName: 'A' }));
  });
  b.on('open', () => {
    // b will be joined by a's message handler
  });

  setTimeout(() => {
    console.error('Test timeout');
    server.kill();
    process.exit(2);
  }, 15000);
})();
