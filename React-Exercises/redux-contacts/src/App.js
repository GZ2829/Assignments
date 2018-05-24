import React, { Component } from 'react';

import {connect} from 'react-redux'

import { addContact } from './redux';

class App extends Component {
  constructor(){
    super()
      
    this.state = {
      contact: {
        name: '',
        phone: '',
        email: '',
      }
    }
    this.handleChange=this.handleChange.bind(this)
  }
  handleChange(e){
    const {name, value} = e.target;
    this.setState(prevState => {
      return {
        ...prevState.contact,
        contact: {
          [name]: value
        }
      }
    })
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.addContact(this.state.contact)
  }



  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type='text' value={this.state.contact.name} onChange={this.handleChange} name='name' placeholder="What is your name?" />
          <input type='text' value={this.state.contact.phone} onChange={this.handleChange} name='phone' placeholder='What is your number?'/>
          <input type='text' value={this.state.contact.email} onChange={this.handleChange} name='email' placeholder='What is your email?'/>
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default connect(state=>state, { addContact })(App);
