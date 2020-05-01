// for an express app, the server is returned from the `.listen()` method
let server = app.listen(...);

server.on('clientError', (err, socket) => {
  console.error(err);
  socket.end('HTTP/1.1 400 Bad Request\r\n\r\n');
});