import React from 'react';
import './App.css';
import Homepage from './Components/Homepage';
import Header from './Components/Header'
import { Switch, Route } from 'react-router-dom'
import Signup from './Signup';
import Clientpage from './Components/Clientpage';
import Carrierpage from './Components/Carrierpage';
import Loadboard from './Components/Loadboard'


const App =() => {
    return (
      <div className="home">
      <Header/>
      <Switch>
          <Route exact path='/' component={Homepage}/>
          <Route path='/loadboard' component={Loadboard}/>
          <Route path='/carrierpage' component={Carrierpage}/>
          <Route path='/clientpage' component={Clientpage}/>
          <Route path='/signup' component={Signup}/>
      </Switch>
      </div>
    );
}

export default App;
