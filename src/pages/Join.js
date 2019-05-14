import React, { Component } from 'react';
import './Join.css';
import io from 'socket.io-client';

class Join extends Component {
  render() {
    const {roomNo, nickName} = this.props.match.params;

    return (
      <div className="App">
        <header className="App-header">
          join {roomNo}
          {nickName}
        </header>
      </div>
    );
  }

  componentDidMount() {
    const socket = io('https://localhost');
    const {roomNo, nickName} = this.props.match.params;

    socket.emit('joinRoom', roomNo, nickName);

    socket.on('successJoinRoom', (roomNo, nickName) => {
      console.log(roomNo, nickName);
    });

    socket.on('receiveQuiz', (quiz) => {
      console.log(quiz);
    })
  }
}

export default Join;
