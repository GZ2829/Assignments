import React, { Component } from 'react';
import { connect } from 'react-redux'
import { getData } from './redux'
import './App.css';
import Issue from './Issue'

class App extends Component {
    constructor(){
      super()

      this.state = {
        title: '',
        description: '',
        isToggled: false
    }
    }

    componentDidMount(){
       this.props.getData()
  }

    
  render() {
    const iss = this.props.issues.map(issue=>
       <Issue title={issue.title} description={issue.description} counter={issue.counter}/>
    )
    return (
      <div>
       {iss}    
      </div>
    );
  }
}

export default connect(state=>({ issues: state }), { getData })(App)
