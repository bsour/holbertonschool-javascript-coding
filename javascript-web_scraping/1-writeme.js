#!/usr/bin/node

const fs = require('fs');

const fInput = process.argv[3];
const fPath = process.argv[2];

fs.writeFile(fPath, fInput, 'utf-8', (err) => {
  if (err) {
    console.error(err);
  }
});
