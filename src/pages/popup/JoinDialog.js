import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog'
import DialogTitle from '@material-ui/core/DialogTitle'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

class JoinDialog extends Component {
  state = {
    roomNo : 0,
    nickName : ''
  }

  render() {
    const {onClose} = this.props;

    return (
      <Dialog
        aria-labelledby="simple-dialog-title"
        onClose={onClose}
        open={this.props.open}>
        <DialogTitle
          id="simple-dialog-title">
          Join Room
        </DialogTitle>
        <TextField
          id="standard"
          label="roomNo"
          onChange={this.handleRoomNoChange}
          >
        </TextField>
        <TextField
          id="standard"
          label="nickName"
          onChange={this.handleNickNameChange}
          >
        </TextField>
        <Button onClick={this.joinRoom}>join</Button>
      </Dialog>
    );
  }

  handleRoomNoChange = (e) => {
    this.setState({
      roomNo : e.target.value
    });
  }
  handleNickNameChange = (e) => {
    this.setState({
      nickName : e.target.value
    });
  }

  joinRoom = () => {
    this.props.join(this.state.roomNo, this.state.nickName);
  }
}

export default JoinDialog
