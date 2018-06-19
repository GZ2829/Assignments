import React from 'react';
import './App.css';
import Homepage from './Homepage';
import Header from './Header'
import { Switch, Route } from 'react-router-dom'
import Signup from './Signup';
import Clientpage from './Clientpage';
import Carrierpage from './Carrierpage';
import Loadboard from './Loadboard'


const App =() => {
    return (
      <div className="home">
      <Header/>
      <Switch>
          <Route exact path='/' component={Homepage}/>
          <Route path='/signup' component={Signup}/>
          <Route path='/carrierpage' component={Carrierpage}/>
          <Route path= '/clientpage' component={Clientpage}/>
          <Route path= '/loadboard' component={Loadboard}/>
      </Switch>
      </div>
    );
}

export default App;
