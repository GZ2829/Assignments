import React from 'react'
import {connect} from 'react-redux'
import Pidgeon from './Pidgeon'


const List =(props) =>{
    const { pidgeons } = props;
    return(
        <div>
            {pidgeons.map((pidgeon, i) =>{
                return(
                <Pidgeon key={i+1} {...pidgeon} index={i}/>
                )
            })}
        </div>
    )
}

export default connect(state => ({pidgeons: state}), {})(List);