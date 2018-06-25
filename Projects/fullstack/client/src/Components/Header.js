import React, { Component } from 'react';
import '../App.css';
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    const user = JSON.parse(localStorage.user)
    return(
      <div className="header">
          <Link to ='/'>Home</Link>
          {user.accountType === 'Client' && <Link to= '/loadboard'>Load Board</Link>}
          {user.accountType ==='Carrier' && <Link to='/carrierpage'>Carrier Page</Link>}
          {user.accountType ==='Client' && <Link to= '/clientpage'>Client Page</Link>}
          {user.accountType === null || user.accountType==='Admin' && <Link to='/signup'>Sign up</Link>}
      </div>
    );
  }
}



export default Header;