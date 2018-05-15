import React from 'react'

import Header from './Header'

import Navbar from './Navbar'

import Body from './Body'

import Footer from './Footer'

import './styles.css'

const App = () =>{
    return(
        <div className='wrapper'>
            <Navbar />
            <Body />
            <Footer />
        </div>
    )
}


export default App;