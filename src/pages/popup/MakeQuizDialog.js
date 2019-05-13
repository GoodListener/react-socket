import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog'
import DialogTitle from '@material-ui/core/DialogTitle'
import QuizForm from './QuizForm'

class MakeQuizDialog extends Component {
  render() {
    return (
      <Dialog
        aria-labelledby="quiz-dialog-title"
        open={this.props.open}>
        <DialogTitle
          id="quiz-dialog-title">
          Make Quiz
        </DialogTitle>
        <QuizForm
          createQuiz={this.handleSubmit}
          />
      </Dialog>
    );
  }

  handleSubmit = (data) => {
    this.props.onClose();
    this.props.make(data);
  }
}

export default MakeQuizDialog
