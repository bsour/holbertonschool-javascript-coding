#!/usr/bin/node

const request = require('request');

if (process.argv.length !== 3) {
  console.error('Usage: ./4-starwars_count.js API_URL');
  process.exit(1);
}

const apiUrl = process.argv[2];
const characterId = 18;

request(apiUrl, (error, response, body) => {
  if (error) {
    console.error('Error:', error);
    process.exit(1);
  }

  const data = JSON.parse(body);

  const filmsWithWedge = data.results.filter((film) =>
    film.characters.includes(`${apiUrl}people/${characterId}/`)
  );

  console.log(filmsWithWedge.length);
});
