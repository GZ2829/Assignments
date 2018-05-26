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
        const mac = contact.map()
    return(
        <div>

        </div>
    )
}}

export default connect(state=>({contact: state}), (removeContact)) (List);