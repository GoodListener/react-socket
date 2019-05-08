import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog'
import DialogTitle from '@material-ui/core/DialogTitle'
import QuizForm from './QuizForm'

class MakeQuizDialog extends Component {
  render() {
    const {onClose} = this.props;

    return (
      <Dialog
        aria-labelledby="quiz-dialog-title"
        onClose={onClose}
        open={this.props.open}>
        <DialogTitle
          id="quiz-dialog-title">
          Make Quiz
        </DialogTitle>
        <QuizForm
          createQuiz={this.handleQuizCreate}>
        </QuizForm>
      </Dialog>
    );
  }

  handleQuizCreate = (data) => {
    console.log(data);
  }
}

export default MakeQuizDialog
