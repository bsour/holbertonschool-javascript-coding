const fs = require('fs');

function countStudents(path) {
  let data;

  // Attempt to read the file synchronously
  try {
    data = fs.readFileSync(path, 'utf8');
  } catch (err) {
    throw new Error('Cannot load the database');
  }

  // Split the data into lines
  const lines = data.split('\n').filter((line) => line);

  // Remove the header
  lines.shift();

  const fields = {};

  // Process each line
  for (const line of lines) {
    const [, , field, firstName] = line.split(',');

    if (!fields[field]) {
      fields[field] = [];
    }

    fields[field].push(firstName);
  }

  console.log(`Number of students: ${lines.length}`);
  for (const [field, students] of Object.entries(fields)) {
    console.log(`Number of students in ${field}: ${students.length}. List: ${students.join(', ')}`);
  }
}

module.exports = countStudents;
