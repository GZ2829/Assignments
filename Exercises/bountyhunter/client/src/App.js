import React, { Component } from 'react';
import './App.css';
import {Route, Switch} from 'react-router-dom'

import Bounty from './Bounty'
import Panda from './Panda'

class App extends Component {
  render() {
    return (
      <div className="App">
      <Header />
      <Switch>
        <Route path='/bounty' Component={ Bounty } />
        <Route path='/panda' Component={ Panda }/>
      </Switch>
      </div>
    );
  }
}

export default App;
