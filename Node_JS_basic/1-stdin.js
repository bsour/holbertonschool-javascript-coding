const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log('Welcome to Holberton School, what is your name?');

rl.on('line', (name) => {
  console.log(`Your name is: ${name}`);
  if (!process.stdin.isTTY) {
    console.log('This important software is now closing');
    process.exit(0);
  } else {
    rl.close();
  }
});

rl.on('close', () => {
  if (process.stdin.isTTY) {
    console.log('This important software is now closing');
  }
});
