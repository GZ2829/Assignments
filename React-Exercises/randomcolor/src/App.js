import React, { Component } from 'react';

import axios from 'axios'

import './App.css';

class App extends Component {
  constructor(){
    super();

    this.state ={
      color: ''
    }
  }

  componentDidMount(){
    axios.get('http://www.colr.org/json/color/random').then(response =>{
      //JSON.parse(response.data);
      console.log(response.data);
      this.setState({color: response.data.new_color})
    })
  }

  render() {
    console.log(this.state.color)
    return (
      <div className='fiv' style={{backgroundColor: `#${this.state.color}`, height: '100vh'}} >
        <h1 style={{margin: '0', textAlign: 'center', fontSize: '60'}}>#{this.state.color}</h1>
      </div>
    );
  }
}

export default App;
