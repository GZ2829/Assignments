import React from 'react'

import Friend from './Friend'

import App from './App'


const FriendsList = (props) =>{
    const fri = props.friends.map(people =>{
        return(
            <Friend name={people.name} age={people.age} pets={people.pets}/>
        )
    }) 
    
    return(
        <div>
           {fri}
        </div>
    )
}


export default FriendsList;