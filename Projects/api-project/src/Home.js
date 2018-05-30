import React from 'react'
import Navbar from './Navbar';
import {Link} from 'react-router-dom'

const Home =() =>{
    return(
        <div className='home'>
            <h1>Welcome To Your Crypto Portfolio!</h1>
            <div className='links'>
           <Link className='coinlink' to="/coins"> Coins </Link>
           <Link className='coinport' to="/myportfolio"> My Portfolio </Link>
           </div>
        </div>
    )
}


export default Home;