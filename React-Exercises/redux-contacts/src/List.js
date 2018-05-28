import React, {Component} from 'react'

import {connect} from 'react-redux'
import { removeContact } from './redux';


class List extends Component{
    constructor(){
        super()
     
     this.state ={

     }   
    }
    render(){
        const mac = props.list.map(data=>{
            <div>
                <h1>data.name</h1>
                <h3>data.phone</h3>
                <h3>data.email</h3>
                </div>
        })
    return(
        <div>
          {mac}
        </div>
    )
}}

export default connect(state=>({list: state}), (removeContact)) (List);