var express = require("express");
// express app instance
var app = express();
// server
var server = app.listen(3000);
// static files
app.use(express.static("public"));
// socket.io instance
var socket = require("socket.io");
var io = socket(server);
// new connection event
io.sockets.on("connection", newConnection);
function newConnection(socket) {
  console.log("new connection" + socket.id);
  console.log(socket.id);
  // mouse event listener
  socket.on("mouse", mouseMsg);
  function mouseMsg(data) {
    // broadcast to all clients
    socket.broadcast.emit("mouse", data);
    console.log(data);
  }
}
