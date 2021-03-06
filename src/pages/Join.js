import React, { Component } from 'react';
import './Join.css';
import io from 'socket.io-client';
import QuizDialog from './popup/QuizDialog'

class Join extends Component {
  state = {
    quizDialogOpen : false,
    quiz : {},
    answer : undefined
  }

  render() {
    const {roomNo, nickName} = this.props.match.params;

    return (
      <div className="App">
        <header className="App-header">
          join {roomNo}
          {nickName}

          {
            (() => {
              if (this.state.quizDialogOpen) {
                return (<QuizDialog
                  quiz={this.state.quiz}
                  open={this.state.quizDialogOpen}
                  writeAnswer={this.writeAnswer}
                  onClose={this.handleClose}
                  />)
              } else {
                return ''
              }
            })()
          }
        </header>
      </div>
    );
  }

  writeAnswer = (answer) => {
    this.setState({
      answer : answer
    })
    console.log(answer);
  }

  handleClose = () => {
    this.setState({
      quizDialogOpen : false
    })
  }

  componentDidMount() {
    const socket = io('https://localhost');
    const {roomNo, nickName} = this.props.match.params;

    socket.emit('joinRoom', roomNo, nickName);

    socket.on('successJoinRoom', (roomNo, nickName) => {
      console.log(roomNo, nickName);
    });

    socket.on('receiveQuiz', (quiz) => {
      // 문제 출제
      this.setState({
        quiz : quiz,
        quizDialogOpen : true
      });

      // 출제된 문제가 제한시간동안만 떠있음
      setTimeout(() => {
        this.setState({
          quizDialogOpen : false
        })
      }, quiz.time);
    })
  }
}

export default Join;
