import React, { Component } from 'react';
import axios from 'axios';



import './app.css'

class App extends Component {
  constructor(){
    super();

    this.state = {
      data: []
    }
  }

  componentDidMount(){
    axios.get('http://api.vschool.io:6543/hitlist.json').then(response =>{
      console.log(response.data)
      this.setState({data: response.data})
    })
  }

  render() {
    const hitlist = this.state.data.map(list =>{
      return(
        <div>
          <div className='panda' style={{ backgroundImage: `url(${list.image})`}}>
          <h3>{list.name}</h3>
          </div>
        </div>
      )
    })

    return (
      <div>
          <div className='header'>
            <h1>Don Corleone's Hit List</h1>
          </div>
          <div className='hello'>
            {hitlist}
          </div>
      </div>
    );
  }
}

export default App;
