import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog'
import DialogTitle from '@material-ui/core/DialogTitle'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import Button from '@material-ui/core/Button'
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
          {quiz.title}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            { ( () => {
                if (quiz.type === 'multiple-choice') {
                  return quiz.quizOption.map(
                        option => (<Fab onClick={this.handleClickOption}>{option}</Fab>)
                        )
                } else if (quiz.type === 'open-ended') {
                  return (<React.Fragment>
                          <input onChange={this.handleChangeInput}/>
                          <Button
                            variant="contained"
                            color="primary">
                            제출
                          </Button></React.Fragment>
                        )

                } else if (quiz.type === 'ox-quiz') {
                  return (<React.Fragment><Fab>O</Fab><Fab>X</Fab></React.Fragment>)
                }
              })()
            }
          </DialogContentText>
        </DialogContent>
      </Dialog>
    );
  }

  handleClickOption = (e) => {
    console.log(e.target);
  }

  handleChangeInput = (e) => {
    console.log(e.target.value);
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
