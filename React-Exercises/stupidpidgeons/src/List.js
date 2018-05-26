import React from 'react'
import {connect} from 'react-redux'
import Pidgeon from './Pidgeon'
import {removePidgeon} from './redux'

const List =(props) =>{
    const { pidgeons, removePidgeon } = props;
    return(
        <div>
            {pidgeons.map((pidgeon, i) =>{
                return(
                <Pidgeon key={i+1} {...pidgeon} removePidgeon={removePidgeon} index={i}/>
                )
            })}
        </div>
    )
}

export default connect(state => ({pidgeons: state}), {removePidgeon})(List);