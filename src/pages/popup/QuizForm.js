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
    this.setState({
      quiz : {
        title : e.target.value
      }
    })
  }

  handleAddOptionButtonClick = () => {
    const quizOption = this.state.option.concat(
      <QuizQuestion
        key={this.no}
        no={this.no}
        onChange={this.handleEachChange}
        />
      );
    this.no++;

    this.setState({
      option : quizOption
    })
  }

  handleEachChange = (e, index) => {
    const quizOption = this.state.quiz.quizOption;
    quizOption[index] = e.target.value;
  }

  handleSubmit = (e) => {
    this.props.createQuiz(this.state.quiz);
    e.preventDefault();
  }
}

export default QuizForm;
