import React, { Component } from 'react';
import './App.css';
import socketIOClient from 'socket.io-client'
import Button from '@material-ui/core/Button'

class App extends Component {
  socket = socketIOClient.connect();

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Button
            variant="contained"
            color="primary"
            >Make Room</Button><br></br>
            <Button
              variant="contained"
              color="primary"
              >Join</Button>
        </header>
      </div>
    );
  }

  componentDidMount = () => {
      const socket = socketIOClient.connect('https://localhost');
      socket.on('init', (data) => {
        console.log(data);
      })
  }


}

export default App;
