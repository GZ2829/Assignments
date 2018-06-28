import React, { Component } from 'react';
import '../App.css';
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    // const user = JSON.parse(localStorage.user)
    return(
      <div className="header">
          <Link to ='/'>Home</Link>
          <Link to= '/loadboard'>Load Board</Link>
          <Link to='/carrierpage'>Carrier Page</Link>
          <Link to= '/clientpage'>Client Page</Link>
          <Link to='/signup'>Sign up</Link>
          <Link to=''>Logout</Link>
      </div>
    );
  }
}



export default Header;