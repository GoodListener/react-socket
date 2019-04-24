function connectCtrl(socket) {
  socket.on('joinRoom', (roomNo) => {
    socket.join(roomNo, () => {
      console.log(roomNo);
      socket.to(roomNo).emit('joinRoom', roomNo);
    });
  })

}

module.exports = connectCtrl;
