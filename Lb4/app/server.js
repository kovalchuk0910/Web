const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);

const routes = require('./routes');

const port = process.env.PORT || 3000;

// Serve static files from the public directory
app.use(express.static('app/public'));

// Mount routes
app.use('/', routes(io));

http.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
