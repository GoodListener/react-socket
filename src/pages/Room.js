import React, { Component } from 'react';
import './Room.css';
import MakeQuizDialog from './popup/MakeQuizDialog'
import io from 'socket.io-client';
import Button from '@material-ui/core/Button'

class Room extends Component {
  state = {
    quizDialogOpen : false
  }

  render() {
    const {roomNo} = this.props.match.params;

    return (
      <div className="App">
        <header className="App-header">
          room {roomNo}
          <Button
            variant="contained"
            color="primary"
            onClick={this.popMakeQuizPopup}>
            makeQuiz
          </Button>

          <MakeQuizDialog
            open={this.state.quizDialogOpen}
            onClose={this.handleClose}
            />
        </header>
      </div>
    );
  }

  popMakeQuizPopup = () => {
    this.setState({
      quizDialogOpen: true
    });
  }

  handleClose = () => {
    this.setState({
      quizDialogOpen: false
    });
  }

  componentDidMount() {
    const socket = io('https://localhost');
    socket.emit('makeRoom', this.props.match.params.roomNo);

    socket.on('successMakeRoom', (id, roomNo) => {
      console.log(id, roomNo);
    })

    socket.on('successJoinRoom', (roomNo, nickName) => {
      console.log(nickName + '님 입장');
    })
  }
}

export default Room;
