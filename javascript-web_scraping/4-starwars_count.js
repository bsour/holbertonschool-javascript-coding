#!/usr/bin/node

const request = require('request');

const characterId = 18; // Assign the character ID

const apiUrl = process.argv[2]; // Get the API URL from the command line argument

if (!apiUrl) {
  console.error('Usage: ./4-starwars_count.js <API_URL>');
  process.exit(1);
}

request(apiUrl, (error, response, body) => {
  if (error) {
    console.error(error);
  } else {
    if (response.statusCode === 200) {
      const movieData = JSON.parse(body);

      // Initialize a count for movies where Wedge Antilles is present
      let movieCount = 0;

      // Loop through the movies and check if characterId (Wedge Antilles) is present
      for (const movie of movieData.results) {
        if (movie.characters.includes(`https://swapi-api.hbtn.io/api/people/${characterId}/`)) {
          movieCount++;
        }
      }

      // Print the count of movies where Wedge Antilles is present
      console.log(movieCount);
    } else {
      console.error(`Error: Status code ${response.statusCode}`);
    }
  }
});
