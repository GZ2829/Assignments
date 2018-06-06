import React, {Component} from 'react'
import './App.css'

class Header extends Component{
    constructor(){
        super()
        this.state ={

        }
    }


    render(){
        return(
            <div className='header'>
                <Link to='/bounty'>Bounty</Link>
                <Link to='/panda'>Panda</Link>
            </div>
        )
    }
}


export default Header;