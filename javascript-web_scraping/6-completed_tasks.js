#!/usr/bin/node

const request = require('request');
const apiUrl = process.argv[2];

request.get(apiUrl, (err, response, body) => {
  if (err) {
    console.log(err);
    return;
  }

  const userData = JSON.parse(body);

  const userCounts = userData.reduce((counts, user) => {
    if (user.completed === true) {
      counts[user.userId] = (counts[user.userId] || 0) + 1;
    }
    return counts;
  }, {});

  console.log(userCounts);
});
