import React, { Component } from 'react';
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogTitle from '@material-ui/core/DialogTitle'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import TextField from '@material-ui/core/TextField'

class RoomDialog extends Component {
  state = {
    roomNo : 0,
    roomName : ''
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
          Make Room
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            방 번호 쓰기
          </DialogContentText>
          <TextField
            id="standard"
            label="roomNo"
            onChange={this.handleChange}
            >
          </TextField>
          <Button onClick={this.makeRoom}>
            make room
          </Button>
        </DialogContent>
      </Dialog>
    );
  }

  handleChange = (e) => {
    this.setState({
      roomNo : e.target.value
    })
  }

  makeRoom = () => {
    this.props.make(this.state.roomNo);
  }
}

export default RoomDialog
