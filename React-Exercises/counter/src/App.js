import React, { Component } from 'react';

import Counter from './Counter'



class App extends Component{
  constructor(){
  super();

  this.state = {
    clickCounter: 0
  }

  this.addCount = this.addCount.bind(this)

  this.removeCount = this.removeCount.bind(this)

}



  addCount(){
    this.setState(prevState => {
      return{
        clickCounter: prevState.clickCounter + 1
      }
    })
  }

  removeCount(){
    this.setState(prevState => {
      return{
        clickCounter: prevState.clickCounter - 1
      }
    })
  }

  render(){
    return(
      <Counter count={this.state.clickCounter} click={this.addCount} remove={this.removeCount} />
    )
  }
}




export default App;
