const fs = require('fs').promises;

function countStudents(path) {
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

      let output = `Number of students: ${lines.length}\n`;
      if (fields.CS) {
        output += `Number of students in CS: ${fields.CS.length}. List: ${fields.CS.join(', ')}\n`;
      }
      if (fields.SWE) {
        output += `Number of students in SWE: ${fields.SWE.length}. List: ${fields.SWE.join(', ')}`;
      }

      return output; // Return the formatted string
    })
    .catch(() => {
      throw new Error('Cannot load the database');
    });
}

module.exports = countStudents;
