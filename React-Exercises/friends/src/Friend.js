import React from 'react'

import Pets from './Pet'

const Friend = (props) =>{
      const animals = props.pets.map(holder  => {
          return(
          <Pets petName={holder.name} petBreed={holder.breed}/>
      )})

    return(
        <div>
            <h1>Name: {props.name}</h1>
            <h2>Age: {props.age}</h2>
                {animals}
        </div>
    )
}


export default Friend;