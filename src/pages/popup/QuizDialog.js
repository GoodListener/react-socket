import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog'
import DialogTitle from '@material-ui/core/DialogTitle'

class QuizDialog extends Component {
  render() {
    return (
      <Dialog
        aria-labelledby="quiz-dialog-title"
        open={this.props.open}>
        <DialogTitle
          id="quiz-dialog-title">
          Quiz
        </DialogTitle>

      </Dialog>
    );
  }
}

export default QuizDialog
