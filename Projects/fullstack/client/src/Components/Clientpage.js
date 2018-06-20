import React from 'react';
import '../App.css';
import { Switch, Route } from 'react-router-dom'
import AddaLoad from './Addaload'
import Editaload from './Editaload'
import Clientbar from './Clientbar'
import Clientloadboard from './Clientloadboard'

const Clientpage = ({match}) =>{
    return(
      <div className="clientpage">
      <Clientbar match={this.match}/>
      <Switch>
          <Route path={`${match.url}/addaload`} component={AddaLoad}/>
          <Route path={`${match.url}/editaload`} component={Editaload}/>
          <Route path={`${match.url}/clientloadboard`} component={Clientloadboard}/>
      </Switch>
      </div>
    );
  }
  


export default Clientpage;