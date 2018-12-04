import React, {Component} from 'react';
import axios from 'axios';
import {backendURL, genNamePath} from './constants/constants.js'

class EnterName extends Component {
    constructor(props) {
      super(props);

      this.state = {
        name: ''
      }
    }

  getName = () => {
    axios.post(backendURL + genNamePath + document.getElementById('length').value, {
      name: document.getElementById('nameStart').value
    }).then( (response) => {
      this.setState({
        name: response.data.name
      })
    })
  }

  render() {
    var genName = ''
    if (this.state.name !== '') {
      genName = <div>Your Generated Name is: {this.state.name}</div>
    }

    return (
      <div>
        What would you like the name to begin with?<br/>
        <input id = 'nameStart' type='text' /><br/><br/>
        How Long would you like the name to be (max 12 characters)?<br/>
        <input id = 'length' type='text'/><br/><br/>
        <button onClick={this.getName}>Generate Name!</button><br/><br/>
        {genName}
      </div>
    )
  }
}

export default EnterName;
