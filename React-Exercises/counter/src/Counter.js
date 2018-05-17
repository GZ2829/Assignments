import React from 'react'

const Counter = (props) =>{
    return(
        <div>
            <h1>{props.count}</h1>
            <button onClick={props.click}>Up</button>
            <button onClick={props.remove}>Down</button>
        </div>
    )
}

export default Counter;