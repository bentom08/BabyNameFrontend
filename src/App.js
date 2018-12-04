import React, { Component } from 'react';
import EnterName from './EnterName.js'
import AllNames from './AllNames.js'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className = 'App'>
        <EnterName/><br/><br/>
        <AllNames/>
      </div>
    );
  }
}

export default App;
