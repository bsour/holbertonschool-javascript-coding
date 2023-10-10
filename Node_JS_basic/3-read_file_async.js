const fs = require('fs').promises;

function countStudents(path) {
  return fs.readFile(path, 'utf8')
    .then((data) => {
      // Split the data into lines
      const lines = data.trim().split('\n');

      // Remove the header
      lines.shift();

      const fields = {};

      // Process each line
      for (const line of lines) {
        const [firstName, , , field] = line.split(',');

        if (!fields[field]) {
          fields[field] = [];
        }

        fields[field].push(firstName);
      }

      console.log(`Number of students: ${lines.length}`);
      if (fields.CS) {
        console.log(`Number of students in CS: ${fields.CS.length}. List: ${fields.CS.join(', ')}`);
      }
      if (fields.SWE) {
        console.log(`Number of students in SWE: ${fields.SWE.length}. List: ${fields.SWE.join(', ')}`);
      }
    })
    .catch(() => {
      throw new Error('Cannot load the database');
    });
}

module.exports = countStudents;
