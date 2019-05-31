function connectCtrl(io, socket) {
  socket.on('joinRoom', (roomNo, nickName) => {
    socket.join(roomNo, () => {
      io.to(roomNo).emit('successJoinRoom', roomNo, nickName);
    });
  })


  socket.on('makeRoom', (roomNo, id) => {
    socket.join(roomNo, () => {
      io.to(roomNo).emit('successMakeRoom', roomNo, 'host');
    })
  })

  socket.on('sendQuiz', (roomNo, quiz, callback) => {
    io.to(roomNo).emit('receiveQuiz', quiz);
    callback(quiz);
  })
}

module.exports = connectCtrl;
