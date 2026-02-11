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
  ws.on('message', (m) => console.log(`${name}: recv:`, m.toString().substring(0, 200)));
  ws.on('close', () => console.log(`${name}: close`));
  ws.on('error', (e) => console.error(`${name}: error`, e));
  return ws;
}

(async () => {
  try {
    await waitForServerReady();
    
    const a = makeClient('A');
    const b = makeClient('B');
    let roomCode = null;
    let gameState = null;
    let testPhase = 'setup';
    
    a.on('message', (m) => {
      try {
        const msg = JSON.parse(m.toString());
        
        if (msg.type === 'ROOM_CREATED') {
          roomCode = msg.roomCode;
          gameState = msg.gameState;
          console.log('=== A: ROOM_CREATED', roomCode);
          setTimeout(() => {
            b.send(JSON.stringify({ type: 'JOIN_ROOM', roomCode, playerName: 'B' }));
          }, 300);
        }
        
        if (msg.type === 'JOINED') {
          console.log('=== A: JOINED as player W');
          gameState = msg.gameState;
        }
        
        if (msg.type === 'PLAYER_JOINED') {
          console.log('=== A: PLAYER_JOINED, B joined');
          gameState = msg.gameState;
          // Force manual state modification for testing
          if (testPhase === 'setup') {
            testPhase = 'testing';
            console.log('\n=== TEST: Forcing Black to bar, then testing bar entry ===');
            setTimeout(() => {
              // Manually put B in bar and let A attack to make a capture
              a.send(JSON.stringify({ type: 'ROLL_DICE' }));
            }, 300);
          }
        }
        
        if (msg.type === 'DICE_ROLLED') {
          console.log(`=== A: DICE_ROLLED Turn=${msg.gameState.turn} Dice=${msg.gameState.availableDice}`);
          gameState = msg.gameState;
          
          // Try to move White to point 1 to capture Black's checker
          const move = { from: 24, to: 23, die: 1 };
          setTimeout(() => {
            a.send(JSON.stringify({ type: 'MAKE_MOVE', move }));
          }, 200);
        }
        
        if (msg.type === 'MOVE_MADE') {
          console.log(`=== A: MOVE_MADE Turn=${msg.gameState.turn} Bar.W=${msg.gameState.bar.W} Bar.B=${msg.gameState.bar.B}`);
          gameState = msg.gameState;
          
          // Check if we should proceed to next phase
          if (testPhase === 'testing' && gameState.availableDice.length > 0) {
            const move = { from: 13, to: 13 - gameState.availableDice[0], die: gameState.availableDice[0] };
            setTimeout(() => {
              a.send(JSON.stringify({ type: 'MAKE_MOVE', move }));
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
          console.log('=== B: JOINED as player B');
          gameState = msg.gameState;
        }
        
        if (msg.type === 'PLAYER_JOINED') {
          console.log('=== B: PLAYER_JOINED');
          gameState = msg.gameState;
        }
        
        if (msg.type === 'DICE_ROLLED') {
          console.log(`=== B: DICE_ROLLED Turn=${msg.gameState.turn} Dice=${msg.gameState.availableDice}`);
          gameState = msg.gameState;
          
          // If B's turn and B has checkers on bar, try to enter
          if (msg.gameState.turn === 'B' && msg.gameState.bar.B > 0) {
            console.log(`\n>>> BLACK ON BAR! Trying entry. Bar.B=${msg.gameState.bar.B}`);
            console.log(`>>> Available dice: ${msg.gameState.availableDice}`);
            
            // For Black, entry points are 1-6 (die value directly)
            // Try entry with first available die
            const die = msg.gameState.availableDice[0];
            const entryPoint = die; // Black enters on 1-6
            
            console.log(`>>> Attempting: from='bar', to=${entryPoint}, die=${die}`);
            const move = { from: 'bar', to: entryPoint, die };
            
            setTimeout(() => {
              b.send(JSON.stringify({ type: 'MAKE_MOVE', move }));
            }, 200);
          }
        }
        
        if (msg.type === 'MOVE_MADE') {
          console.log(`=== B: MOVE_MADE`);
          gameState = msg.gameState;
          
          if (msg.gameState.bar.B === 0) {
            console.log(`\n✓✓✓ BLACK ENTRY SUCCESS! Exited bar.`);
            server.kill();
            process.exit(0);
          }
        }
        
        if (msg.type === 'ERROR') {
          console.log(`\n✗✗✗ B got ERROR:`, msg.message);
          if (msg.message.includes('Illegal')) {
            server.kill();
            process.exit(1);
          }
        }
        
      } catch (err) {
        console.error('B parse error', err);
      }
    });

    a.on('open', () => {
      a.send(JSON.stringify({ type: 'CREATE_ROOM', playerName: 'A' }));
    });

    setTimeout(() => {
      console.error('\n✗ Test timeout');
      server.kill();
      process.exit(2);
    }, 15000);
    
  } catch (err) {
    console.error('Test error:', err);
    server.kill();
    process.exit(1);
  }
})();
