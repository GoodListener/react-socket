function connectCtrl(io, socket) {
  socket.on('joinRoom', (roomNo, id) => {
    socket.join(roomNo, () => {
      io.to(roomNo).emit('successJoinRoom', id, roomNo);
    });
  })

}

module.exports = connectCtrl;
