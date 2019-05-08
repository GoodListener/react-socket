import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Home, Room, Join } from '../pages';

class App extends Component {
    render() {
        return (
            <div>
              <Route exact path="/" component={Home}/>
              <Switch>
                <Route path="/room/:roomNo" component={Room}/>
                <Route path="/room" component={Room}/>
              </Switch>
              <Route path="/join/:roomNo/:nickName" component={Join}/>
            </div>
        );
    }
}

export default App;
