import React, { Component } from 'react';
import { connect } from 'react-redux'
import { getData } from './redux'
import './App.css';

class App extends Component {
    constructor(){
      super()

      this.state ={

      }
    }

    componentDidMount(){
       this.props.getData()
  }
    
  render() {
    const iss = this.props.issues.map(issue=>
        <div>
          <h1>{issue.title}</h1>
          <h3>{issue.description}</h3>
          <p>{issue.counter}</p>
          <button>+</button>
          <button>-</button>
          <button>Comment</button>
          <button>edit</button>
          <button>delete</button>
        </div>
    )
    return (
      <div>
       {iss}
      </div>
    );
  }
}

export default connect(state=>({ issues: state }), { getData })(App)
