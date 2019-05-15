import React, {Component} from 'react'
import TextField from '@material-ui/core/TextField'
import DialogActions from '@material-ui/core/DialogActions'
import Button from '@material-ui/core/Button'

class QuizQuestion extends Component {
  handleChange = (e) => {
    this.props.onChange(e, this.props.no);
  }
  render() {

    return (
      <TextField
        onChange={this.handleChange}
        id="standard"
        label="보기"
      />
    )
  }
}

class QuizForm extends Component {
  state = {
    quiz : {
      title : '',
      quizOption : [''],
      time : 3000
    },
    option : [],
  }

  no = 0;

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <TextField
          id="standard"
          label="문제"
          onChange={this.handleQuizInputChange}
          >
        </TextField>
        {this.state.option}
        <Button
          onClick={this.handleAddOptionButtonClick}>
          보기 추가
        </Button>
        <DialogActions>
        <Button
          color="primary"
          onClick={this.handleSubmit}
          >Make</Button>
        </DialogActions>
      </form>
    )
  }
  handleQuizInputChange = (e) => {
    const {quiz} = this.state;
    quiz.title = e.target.value;
    this.setState({
      quiz
    })
  }

  handleAddOptionButtonClick = () => {
    const option = this.state.option.concat(
      <QuizQuestion
        key={this.no}
        no={this.no}
        onChange={this.handleEachChange}
        />
      );
    this.no++;

    this.setState({
      option : option
    })
  }

  handleEachChange = (e, index) => {
    const { quiz } = this.state;
    const quizOption = quiz.quizOption;
    quizOption[index] = e.target.value;
    this.setState({
      quiz : quiz
    })
  }

  handleSubmit = (e) => {
    this.props.createQuiz(this.state.quiz);
    e.preventDefault();
  }
}

export default QuizForm;
