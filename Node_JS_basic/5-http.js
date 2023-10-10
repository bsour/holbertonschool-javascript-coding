const http = require('http');
const countStudents = require('./3-read_file_async');

const app = http.createServer((req, res) => {
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    countStudents(process.argv[2])
      .then((studentData) => {
        const responseText = `This is the list of our students\n${studentData}`;
        res.writeHead(200, {
          'Content-Type': 'text/plain',
          'Content-Length': Buffer.byteLength(responseText),
        });
        res.end(responseText);
      })
      .catch((error) => {
        const responseText = `This is the list of our students\n${error.message}`;
        res.writeHead(500, {
          'Content-Type': 'text/plain',
          'Content-Length': Buffer.byteLength(responseText),
        });
        res.end(responseText);
      });
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found');
  }
});

app.listen(1245);

module.exports = app;
