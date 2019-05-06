import React, { Component } from 'react';
import './Room.css';
import io from 'socket.io-client';

class Room extends Component {
  render() {
    const {roomNo} = this.props.match.params;

    return (
      <div className="App">
        <header className="App-header">
          room {roomNo}
        </header>
      </div>
    );
  }

  componentDidMount() {
    const socket = io('https://localhost');
    socket.emit('joinRoom', this.props.match.params.roomNo);

    socket.on('successJoinRoom', (id, roomNo) => {
      console.log(id, roomNo);
    })
  }
}

export default Room;
