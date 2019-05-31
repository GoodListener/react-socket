import React, {Component} from 'react'
import TextField from '@material-ui/core/TextField'
import DialogActions from '@material-ui/core/DialogActions'
import Button from '@material-ui/core/Button'
import Radio from '@material-ui/core/Radio';

class QuizQuestion extends Component {
  state = {
    answer : undefined
  }

  handleChange = (e) => {
    this.props.onChange(e, this.props.no);
  }

  handleRadioChange = (e) => {
    this.setState({
      checkNo : e.target.value
    });
  }

  render() {
    return (
      <React.Fragment>
        <Radio
          checked={this.props.no === this.state.checkNo}
          onChange={this.handleRadioChange}
          name="option-radio"
          value={this.props.no}
          />
        <TextField
          onChange={this.handleChange}
          id="standard"
          label="보기"
        />
      </React.Fragment>
    )
  }
}

class QuizForm extends Component {
  state = {
    quiz : {
      title : '',
      type : 'multiple-choice',
      quizOption : [''],
      answer : undefined,
      time : 3000,
      isPresented : false,
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
    this.setState({ quiz })
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
