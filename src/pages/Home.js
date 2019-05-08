import React, { Component } from 'react';
import './Home.css';
import Button from '@material-ui/core/Button'
import RoomDialog from './popup/RoomDialog'
import JoinDialog from './popup/JoinDialog'

class App extends Component {
  state = {
    roomDialogOpen: false,
    joinDialogOpen: false,
    path: ''
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
          onClose={this.handleRoomClose}
          make={this.createRoom}
          />
        <JoinDialog
          open={this.state.joinDialogOpen}
          onClose={this.handleJoinClose}
          join={this.joinRoom}
          />
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

  createRoom = (roomNo) => {
    let path = `/room/${roomNo}`;
    this.props.history.push(path);
  }

  joinRoom = (roomNo, nickName) => {
    let path = `/join/${roomNo}/${nickName}`;
    this.props.history.push(path);
  }
}

export default App;
