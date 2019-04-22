import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog'
import DialogTitle from '@material-ui/core/DialogTitle'

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
        <div>test</div>
      </Dialog>
    );
  }

  handleClose = () => {
    this.props.onClose();
  }
}

export default RoomDialog
