import React, { Component } from 'react';
import './App.css';
import socketIOClient from 'socket.io-client'
import Button from '@material-ui/core/Button'
import RoomDialog from './control/popup/RoomDialog'
import JoinDialog from './control/popup/JoinDialog'

class App extends Component {
  state = {
    roomDialogOpen: false,
    joinDialogOpen: false
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Button
            variant="contained"
            color="primary"
            onClick={this.popMakeRoomPopup}
            >Make Room</Button><br></br>
            <Button
              variant="contained"
              color="primary"
              onClick={this.popJoinRoomPopup}
              >Join</Button>
        </header>
        <RoomDialog
          open={this.state.roomDialogOpen}
          onClose={this.handleRoomClose}/>
        <JoinDialog
          open={this.state.joinDialogOpen}
          onClose={this.handleJoinClose}/>
      </div>
    );
  }

  popMakeRoomPopup = () => {
    this.setState({
      roomDialogOpen: true
    });
  }

  popJoinRoomPopup = () => {
    this.setState({
      joinDialogOpen: true
    });
  }

  handleRoomClose = () => {
    this.setState({
      roomDialogOpen: false
    });
  }

  handleJoinClose = () => {
    this.setState({
      joinDialogOpen: false
    });
  }

  componentDidMount = () => {
     const socket = socketIOClient.connect('https://localhost:443');

     socket.emit('joinRoom', 'root', prompt());

     socket.on('init', (data) => {
       console.log(data);
     });

     socket.on('successJoinRoom', (id, roomNo) => {
       console.log(id, roomNo);
     })
  }
}

export default App;
