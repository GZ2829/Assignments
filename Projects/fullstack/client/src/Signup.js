import React, { Component } from 'react';
import './App.css';



class Signup extends Component {
    constructor(){
        super()

        this.state ={

        }
    }

    render(){
        return(
            <div className='signup'>
                <form>
                    <input type='text' placeholder='Email'/>
                </form>
            </div>
        )
    }
}

export default Signup;