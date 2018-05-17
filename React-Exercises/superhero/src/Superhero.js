import React from 'react'

const Superhero = (props) =>{
    return(
        <div>
            <h1 onClick={() =>props.clickfunction(props.phrase)}>{props.name}</h1>
            <img onClick={() =>props.clickfunction(props.phrase)} src={props.image} alt="Sorry No Image"></img>
        </div>
    )
}


export default Superhero;
