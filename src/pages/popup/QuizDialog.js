import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog'
import DialogTitle from '@material-ui/core/DialogTitle'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import Fab from '@material-ui/core/Fab'

class QuizDialog extends Component {
  render() {
    const {quiz} = this.props;

    return (
      <Dialog
        aria-labelledby="quiz-dialog-title"
        open={this.props.open}>
        <DialogTitle
          id="quiz-dialog-title">
          test
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            {
              quiz.quizOption ?
              quiz.quizOption.map(option => (
                  <Fab>{option}</Fab>
                )
              ) :
              ''
            }
          </DialogContentText>
        </DialogContent>
      </Dialog>
    );
  }
}

// {
  // this.props.quiz.quizOption.forEach(option => {
    // return (<Fab>
      // {option}
    // </Fab>)
  // })
// }

export default QuizDialog
