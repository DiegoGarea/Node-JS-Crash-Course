const http = require('http');

// create server object
http
  .createServer((req, res) => {
    // write responde
    res.write('Hello World');
    res.end();
  })
  .listen(5000, () => console.log('Server running...'));
