import React, { Component } from 'react';

import './App.css';

class App extends Component {

  constructor(){
    super()
    this.state = {
      age: 65,
      name: 'jerry',
    }
  }

  componentWillMount(){
    let display;
    let age;
    let name;
    if(this.state.age < 18 && this.state.name === true){
      display = ('You are young, grow up!')
    } else if( this.props.age > 18 && this.props.name === true){
      display = ('Something, Something Darkside')
    } else if(this.props.age > 65 && this.props.name === true){
      display = ('Holy shit, you are old!')
    }

  }


  render() {
    return (
      <div>
       <h1>{this.display}</h1>
      </div>
    );
  }
}

export default App;
