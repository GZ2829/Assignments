import React, { Component } from 'react';
import { connect } from 'react-redux'
import './App.css';

class Issue extends Component {
    constructor(){
      super()

      this.state = {
        title: '',
        description: '',
        isToggled: false
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.toggle = this.toggle.bind(this)

    }

  handleChange(e){
    const { name, value } = e.target
    this.setState({
        [name]: value
    })
}

handleSubmit(e){
    e.preventDefault()
    let newTodo = {
            title: this.state.title,
            description: this.state.description
        }
    this.props.editTodo( this.props._id, newTodo )
    this.setState({ isToggled: false, title: '', description: '' })
}

toggle(){
    this.setState(prevState => {
        return {
            isToggled: !prevState.isToggled
        }
    })
}


    
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <h3>{this.props.description}</h3>
        <p>{this.props.counter}</p>
        <button>+</button>
        <button>-</button>
        <button>Comment</button>
        <button onClick={this.toggle}>edit</button>
        <button>delete</button>
        {this.state.isToggled 
            ? <form onSubmit={ this.handleSubmit }>
                <input 
                    type="text"     
                    value={this.state.title} 
                    name="title" 
                    onChange={ this.handleChange }
                    placeholder="Title"/>
                <input 
                    type="text" 
                    value={this.state.description} 
                    name="description" 
                    onChange={ this.handleChange }
                    placeholder="Description"/>
                    <button>Submit</button>
                </form>
              : null
              }  
      </div>
    );
  }
}

export default connect(state=>({ issues: state }))(Issue)
