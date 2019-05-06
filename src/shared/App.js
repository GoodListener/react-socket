import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Home, Room } from '../pages';

class App extends Component {
    render() {
        return (
            <div>
                <Route exact path="/" component={Home}/>
                <Route path="/room" component={Room}/>
            </div>
        );
    }
}

export default App;
