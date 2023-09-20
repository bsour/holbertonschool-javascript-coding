#!/usr/bin/node

const fs = require('fs')

// read data
fs.readFile('0-readme.js', 'utf-8', (err, data) => {
  if (err) throw err;
  console.log(data);
})
