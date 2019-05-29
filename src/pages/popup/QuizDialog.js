import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog'
import DialogTitle from '@material-ui/core/DialogTitle'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import Button from '@material-ui/core/Button'
import Fab from '@material-ui/core/Fab'


class QuizDialog extends Component {
  state = {
    isWriteAnswer : false
  }

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
                        (option, index) =>
                          (<Fab
                            onClick={this.handleClickOption}
                            value={index}>
                            {option}
                          </Fab>)
                        )
                } else if (quiz.type === 'open-ended') {
                  return (<React.Fragment>
                          <input onChange={this.handleChangeInput}/>
                          <Button
                            variant="contained"
                            color="primary"
                            onClick={this.handleSubmitButtonClick}>
                            제출
                          </Button></React.Fragment>
                        )

                } else if (quiz.type === 'ox-quiz') {
                  return (<React.Fragment>
                          <Fab value="true">O</Fab>
                          <Fab value="false">X</Fab>
                        </React.Fragment>)
                }
              })()
            }
          </DialogContentText>
        </DialogContent>
      </Dialog>
    );
  }

  handleClickOption = (e) => {
    if (this.state.isWriteAnswer) {
      return;
    }

    this.setState({
      isWriteAnswer : true
    })

    this.props.writeAnswer(e.currentTarget.value);
    e.currentTarget.style.backgroundColor = 'gold'
  }

  handleChangeInput = (e) => {
    this.setState({
      answer : e.target.value
    });
  }

  handleSubmitButtonClick = (e) => {
    console.log(this.state.answer);
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
