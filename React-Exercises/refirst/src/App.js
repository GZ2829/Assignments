import React from 'react'

import Header from './Header'

import Navbar from './Navbar'

import Body from './Body'

import './styles.css'

const App = () =>{
    return(
        <div className='wrapper'>
            <Navbar />
            <Body />
        </div>
    )
}


export default App;