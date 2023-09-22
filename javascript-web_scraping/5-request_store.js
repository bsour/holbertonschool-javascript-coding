#!/usr/bin/node

const request = require('request');
const fs = require('fs');

const url = process.argv[2];
const filePath = process.argv[3];

// Send a request to the specified URL
request(url, (error, response, body) => {
  if (error) {
    console.error('Error:', error);
    process.exit(1);
  }

  // Write the response body to the specified file (UTF-8 encoded)
  fs.writeFile(filePath, body, 'utf-8', (err) => {
    if (err) {
      console.error('Error writing to file:', err);
      process.exit(1);
    }
    console.log(`Contents from ${url} saved to ${filePath}`);
  });
});
