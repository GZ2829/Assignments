import React from 'react-dom';
import { Link } from 'react-router-dom';

import './App.css'

const Navbar = () =>{
    return(
        <div className='navbar'>
            <Link to='/'>Home</Link>
            <Link to='/about'>About</Link>
            <Link to='/services'>Services</Link>
            <Link to='/contact'>Contact</Link>
        </div>    
    )
}

export default Navbar;

