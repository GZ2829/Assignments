import React, { Component } from 'react';

import {connect} from 'react-redux'

import { addContact } from './redux';

import List from './List'

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
    this.handleSubmit=this.handleSubmit.bind(this)
  }
  handleChange(e){
    const {name, value} = e.target;
    this.setState(prevState => {
      return {
        contact: {
          ...prevState.contact,
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
    //console.log(this.props)
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type='text' value={this.state.contact.name} onChange={this.handleChange} name='name' placeholder="What is your name?" />
          <input type='text' value={this.state.contact.phone} onChange={this.handleChange} name='phone' placeholder='What is your number?'/>
          <input type='text' value={this.state.contact.email} onChange={this.handleChange} name='email' placeholder='What is your email?'/>
          <button>Submit</button>
        </form>
        <List />
      </div>
    );
  }
}

export default connect(state=>({contact: state}), { addContact })(App);


