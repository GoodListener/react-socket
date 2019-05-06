var express = require('express');
var fs = require('fs');
var app = express();
var options = {
      key: fs.readFileSync('server/key/new/key.pem'),
      cert : fs.readFileSync('server/key/new/cert.pem')
    };
var server = require('https').createServer(options, app);
var io = require('socket.io')(server);
var connectCtrl = require('./ctrl/connectCtrl');

function start() {
  // app.use(express.static('public/index.html'));
  server.listen(443);
  console.log("https server run 443");
  runSocket();
}

function runSocket() {
  io.on('connection', function (socket) {
    console.log('socket connected');
    connectCtrl(io, socket);

    socket.on('disconnect', () => {
      console.log("socket disconnected");
    })
  });
}

module.exports = start;
