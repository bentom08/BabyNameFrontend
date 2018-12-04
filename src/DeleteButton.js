import React, {Component} from 'react'
import axios from 'axios'
import {backendURL, deleteNamePath} from './constants/constants.js'

class DeleteButton extends Component {
  deleteName = () => {
    axios.delete(backendURL + deleteNamePath + this.props.id);
    this.props.click()
  }

  render() {
    return <button onClick = {this.deleteName}>Delete</button>
  }
}

export default DeleteButton;
