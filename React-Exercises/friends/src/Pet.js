import React from 'react'


const Pet = (props) =>{
    return(
        <div>
        <h3>{props.petName}</h3>
        <h4>{props.petBreed}</h4>
        </div>
    )
}


export default Pet;