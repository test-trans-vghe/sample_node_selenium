var http = require('http');

var server = http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('<html><head></head><body>Hello World</body></html>');
  // Prevents the build container from timing out by waiting for the server to close.
  process.nextTick(function () {
    console.log('Stopping server running at http://127.0.0.1:1337');
    process.exit();
  });
});

server.listen(1337, '127.0.0.1');

console.log('Server running at http://127.0.0.1:1337/');
