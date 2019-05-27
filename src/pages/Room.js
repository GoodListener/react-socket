import React, { Component } from 'react';
import './Room.css';
import MakeQuizDialog from './popup/MakeQuizDialog'
import io from 'socket.io-client';
import Button from '@material-ui/core/Button'
import QuizCard from './comp/QuizCard'

const socket = io('https://localhost');

class Room extends Component {
  state = {
    quizDialogOpen : false,
    quizList : [
      {
        title : '1번샘플퀴즈',
        type : 'multiple-choice',
        quizOption : [
          '보기1번',
          '보기2번',
          '보기3번',
          '보기4번(정답)'
        ],
        answer : 3,
        time : 15000
      },
      {
        title : '샘플퀴즈',
        type : 'multiple-choice',
        quizOption : [
          '보기1번',
          '보기2번',
          '보기3번(정답)'
        ],
        answer : 2,
        time : 5000
      },
      {
        title : '[주관식] 나는 ㅁㅁ다.',
        type : 'open-ended',
        answer : '바보',
        time : 15000
      },
      {
        title : '[OX] 사람은 동물이다.',
        type : 'ox-quiz',
        quizOption : ['O', 'X'],
        answer : 'o',
        time : 3000
      }
    ]
  }

  render() {
    const {roomNo} = this.props.match.params;
    const quizList = this.state.quizList.map((quiz, index) => {
      return (
        <QuizCard
          key={index}
          quiz={quiz}
          sendQuiz={this.handleSendQuiz}
          />
      )
    });

    return (
      <div className="App">
        <header className="App-header">
          room {roomNo}
          <Button
            variant="contained"
            color="primary"
            onClick={this.popMakeQuizPopup}>
            makeQuiz
          </Button>
          {quizList}
          <MakeQuizDialog
            open={this.state.quizDialogOpen}
            onClose={this.handleClose}
            make={this.addQuiz}
            />
        </header>
      </div>
    );
  }

  popMakeQuizPopup = () => {
    this.setState({
      quizDialogOpen: true
    });
  }

  handleClose = () => {
    this.setState({
      quizDialogOpen: false
    });
  }

  addQuiz = (quiz) => {
    const quizList = this.state.quizList.concat(quiz);
    this.setState({
      quizList : quizList
    })
  }

  handleSendQuiz = (quiz) => {
    console.log(quiz);
    socket.emit('sendQuiz', this.props.match.params.roomNo, quiz);
  }

  componentDidMount() {
    socket.emit('makeRoom', this.props.match.params.roomNo);

    socket.on('successMakeRoom', (id, roomNo) => {
      console.log(id, roomNo);
    })

    socket.on('successJoinRoom', (roomNo, nickName) => {
      console.log(nickName + '님 입장');
    })
  }
}

export default Room;
