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

  no = 1;

  render() {
    return (
      <React.Fragment>
      <TextField
        id="standard"
        label="문제"
        onChange={this.handleQuizInputChange}
        >
      </TextField>
      {this.state.option}
      <Button
        onClick={this.handleAddQuestionButtonClick}>
        보기 추가
      </Button>
      <Button
      variant="contained"
      color="primary"
      onClick={this.handleMakeButtonClick}>Make</Button>
      </React.Fragment>
    )
  }
  handleQuizInputChange = (e) => {
    this.setState({
      quiz : e.target.value
    })
  }

  handleMakeButtonClick = () => {
    this.props.createQuiz(this.state);
  }

  handleAddQuestionButtonClick = () => {
    const quizOption = this.state.option.concat(
      <QuizQuestion
        key={this.no}
      />
      );
    this.no++;

    this.setState({
      option : quizOption
    })
  }
}

export default QuizForm;
