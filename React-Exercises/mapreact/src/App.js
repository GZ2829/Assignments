import React from 'react'

import Welcome from './Welcome'


const App = (props) =>{
    const people = [
        {
            name: 'Harry',
            age: 28
        },
        {
            name: 'Larry',
            age: 38
        },
        {
            name: 'Barry',
            age: 48
        },
        {
            name: 'Gary',
            age: 58
        }
    ]
        const mappedPeople = people.map((person , i) =>{
                return(
                    <Welcome name={person.name} age={person.age} key={person.name + i} />
                )
        })
    return(
        <div>
           {mappedPeople}
        </div>

    )
}
    

export default App;