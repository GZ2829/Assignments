import React from 'react'


const Friend = (props) =>{
      const animals = props.friends.map(holder  => {
          <Pets petName={holder.pets.name} petBreed={holder.pets.breed}/>
      })

    return(
        <div>
            <h1>{props.name}</h1>
            <h2>{props.age}</h2>
                {animals}
        </div>
    )
}


export default Friend;