import React, { Component } from 'react';
import AddForm from './AddForm'

import List from './List'

class App extends Component {
  render() {
    return (
      <div className="App">
       <AddForm />
       <List />
      </div>
    );
  }
}

export default App;
