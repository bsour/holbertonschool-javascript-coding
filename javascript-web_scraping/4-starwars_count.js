#!/usr/bin/node

const request = require('request');

const characterId = 18;
const apiUrl = 'https://swapi-api.hbtn.io/api/films/';

request(apiUrl, (error, response, body) => {
  if (error) {
    console.error(error);
  } else {
    if (response.statusCode === 200) {
      const movieData = JSON.parse(body);
      let movieCount = 0;
      for (const movie of movieData.results) {
        if (movie.characters.includes(`https://swapi-api.hbtn.io/api/people/${characterId}/`)) {
          movieCount++;
        }
      }

      console.log(movieCount);
    } else {
      console.error(`Error: Status code ${response.statusCode}`);
    }
  }
});
