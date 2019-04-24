import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog'
import DialogTitle from '@material-ui/core/DialogTitle'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'

class RoomDialog extends Component {
  render() {
    const {onClose, ...other} = this.props;

    return (
      <Dialog
        aria-labelledby="simple-dialog-title"
        onClose={this.handleClose}
        {...other}>
        <DialogTitle
          id="simple-dialog-title">
          Make Room
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            est
          </DialogContentText>
        </DialogContent>
      </Dialog>
    );
  }

  handleClose = () => {
    this.props.onClose();
  }
}

export default RoomDialog
