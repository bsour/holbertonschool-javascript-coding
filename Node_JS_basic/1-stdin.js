// const readline = require('readline');

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// console.log('Welcome to Holberton School, what is your name?');

// rl.on('line', (name) => {
//   console.log(`Your name is: ${name}`);
//   rl.close();
// });

// rl.on('close', () => {
//   console.log('This important software is now closing');
// });
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Check if stdin is a TTY (Terminal Type), which means it's interactive
if (process.stdin.isTTY) {
  console.log('Welcome to Holberton School, what is your name?');
} else {
  // If not interactive, read data from the pipe
  process.stdin.on('data', (data) => {
    const name = data.toString().trim();
    console.log(`Your name is: ${name}`);
    console.log('This important software is now closing');
    process.exit();
  });
}

rl.on('line', (name) => {
  console.log(`Your name is: ${name}`);
  rl.close();
});

rl.on('close', () => {
  console.log('This important software is now closing');
});
