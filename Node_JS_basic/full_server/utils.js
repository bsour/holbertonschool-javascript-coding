const fs = require('fs').promises;

function readDatabase(path) {
  return fs.readFile(path, 'utf8')
    .then((data) => {
      const lines = data.trim().split('\n');
      lines.shift();

      const fields = {};

      for (const line of lines) {
        const [firstName, , , field] = line.split(',');

        if (!fields[field]) {
          fields[field] = [];
        }

        fields[field].push(firstName);
      }

      return fields;
    });
}

module.exports = readDatabase;
