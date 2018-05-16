import React from "react"

import App from './App'

import vaca from './vaca.css'

const Cards = (props) =>{
    let className = '';
    if(props.season === 'Winter'){
        className = 'winter'
    } else if(props.season ==='Fall'){
        className = 'fall'
    } else if(props.season ==='Summer'){
        className = 'summer'
    } else if(props.season === 'Spring'){
        className = 'spring'
    }
            
    return(
        <div className={className}>
        <h1>Destination: {props.place}</h1>
        <h2>Season: {props.season}</h2>
        <p>{props.price < 500 ?  `$ ${props.price} USD` : props.price < 1000 ? `$$ ${props.price} USD` : `$$$ ${props.price} USD`}</p>
        </div>
    )
}

export default Cards;