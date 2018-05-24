import React, {Component} from 'react';
import {connect} from 'react-redux'
import {addPidgeon} from './redux'

class AddForm extends Component{
    constructor(props){
        super()
        this.state ={
          inputs: {
            nickname: "",
            imgUrl: ""
          }
        }
        this.handleChange=this.handleChange.bind(this)
        this.handleSubmit=this.handleSubmit.bind(this)
      }
      handleChange(e){
        const {value, name}=e.target;
        this.setState(prevState =>{
            return{ 
                inputs:{
                ...prevState.inputs,
                [name]: value
            }
            }
        })

    }

    handleSubmit(e){
        e.preventDefault();
        this.props.addPidgeon(this.state.inputs)
    }
    render(){
        //const {inputs: {nickname, imgUrl}} = this.state
        return(
            <form onSubmit={this.handleSubmit}>
                <input type='text' placeholder='nickname' onChange={this.handleChange} value={this.state.inputs.nickname} name='nickname'/>
                <input type='text' placeholder='imgUrl' onChange={this.handleChange} value={this.state.inputs.imgUrl} name='imgUrl'/>
                <button>Submit</button>
            </form>
        )
    }

}

export default connect(null,{ addPidgeon }) (AddForm);
