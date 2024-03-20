// const http = require('http');

// const hostname = '127.0.0.1';
// const port = 3000;

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hello, World!\n');
// });

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });
const express = require('express');
const app = express();
const port = process.env.PORT || 3000; // Use environment variable for port

app.get('/', (req, res) => {
  res.send('Hello, GitHub Actions!');
});

app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
