import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    console.log(window.location)
    return (
        <div className="nav">
           <Link to="/"> Home </Link>
           <Link to="/coins"> Coins </Link>
           <Link to="/myportfolio"> My Portfolio </Link>
        </div>
    )
}

export default Navbar;