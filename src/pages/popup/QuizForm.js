import React, {Component} from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

class QuizQuestion extends Component {
  state = {
    question : ''
  }

  render() {
    return (
      <TextField
        id="standard"
        label="보기"
        onChange={this.handleChange}
        >
      </TextField>
    )
  }

  handleChange = (e) => {
    this.setState({
      question : e.target.value
    });
  }
}

class QuizForm extends Component {
  state = {
    quiz : '',
    option : [],

  }

  render() {
    return (
      <React.Fragment>
      <TextField
        id="standard"
        label="문제"
        >
      </TextField>
      <Button
        onClick={this.handleQuestionAddClick}>
        보기 추가
      </Button>
      <Button
      variant="contained"
      color="primary"
      onClick={this.handleMakeClick}>Make</Button>
      </React.Fragment>
    )
  }

  handleMakeClick = () => {
    this.props.createQuiz(this.state);
  }

  handleQuestionAddClick = () => {
    const quizOption = this.state.option.concat({
      question : ''
    });

    this.setState({
      option : quizOption
    })
  }
}

export default QuizForm;
