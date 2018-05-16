import React from 'react'

import Navbar from './Navbar'

import './styles.css'

const Header = () => {
    return(
        <div className='head'>
            <Navbar />
            <h1>CLEAN BLOG</h1>
            <h2>A BLOG THEME BY START BOOTSTRAP</h2>
        </div>
    )
}


export default Header;