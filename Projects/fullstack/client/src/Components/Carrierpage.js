import React from 'react';
import '../App.css';
import { Switch, Route } from 'react-router-dom'
import Carrierbar from './Carrierbar';
import Carrierloadboard from './Carrierloadboard';
import Carriertoolbox from './Carriertoolbox';
import Trucks from './Trucks';
import Trailers from './Trailers';
import Bids from './Bids'

const Carrierpage = ({match}) => {
    return (
      <div className="carrierpage">
      <Carrierbar />
        <Switch>
          <Route path={`${match.url}/trucks`} component={Trucks}/>
          <Route path={`${match.url}/trailers`} component={Trailers}/>
          <Route path={`${match.url}/bids`} component={Bids}/>
          <Route path={`${match.url}/carrierloadboard`} component={Carrierloadboard}/>
          <Route path={`${match.url}/carriertoolbox`} component={Carriertoolbox}/>
      </Switch>
      </div>
    );
}

export default Carrierpage;