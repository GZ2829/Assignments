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

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.toggle = this.toggle.bind(this)

    }

    componentDidMount(){
       this.props.getData()
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
