import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog'
import DialogTitle from '@material-ui/core/DialogTitle'

class JoinDialog extends Component {
  render() {
    const {onClose, ...other} = this.props;

    return (
      <Dialog
        aria-labelledby="simple-dialog-title"
        onClose={this.handleClose}
        {...other}>
        <DialogTitle
          id="simple-dialog-title">
          Join Room
        </DialogTitle>
        <div>Join</div>
      </Dialog>
    );
  }

  handleClose = () => {
    this.props.onClose();
  }
}

export default JoinDialog
