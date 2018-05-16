import React from 'react'


const Pet = (props) =>{
    return(
        <div>
        <h3>Pet: {props.petName}</h3>
        <h4>Breed: {props.petBreed}</h4>
        </div>
    )
}


export default Pet;