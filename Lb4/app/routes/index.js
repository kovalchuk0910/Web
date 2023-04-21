const express = require('express');
const router = express.Router();

module.exports = (io) => {
  // Serve the index page
  router.get('/', (req, res) => {
    res.sendFile('/app/public/index.html', { root: '.' });
  });

  // Handle WebSocket connections
  io.on('connection', (socket) => {
    console.log('a user connected');

    // Broadcast messages to all connected clients
    socket.on('chat message', (msg) => {
      io.emit('chat message', msg);
    });

    socket.on('disconnect', () => {
      console.log('user disconnected');
    });
  });

  return router;
};
