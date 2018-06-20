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
                <form className='signUpForm'>
                    <input className='input'  type='text' placeholder='Email'/>
                    <input className='input' type='text' placeholder='Password'/>
                    <input className='input' type='text' placeholder="Company"/>
                    <input className='input' type='text' placeholder='DOT Number'/>
                    <input className='input' type='text' placeholder='MC Number'/>
                    <input className='aboutYourself' type='text' placeholder='About Yourself'/>
                    <p>Account Type</p>
                    <div className='radio'>
                    <input type='radio' id='client'/>
                    <label for='client'>Client</label>
                    <input type='radio' id='Carrier'/>
                    <label for='Carrier'>Carrier</label>
                    </div>
                    <button className='signUpSubmit'>Submit</button>
                </form>
            </div>
        )
    }
}

export default Signup;