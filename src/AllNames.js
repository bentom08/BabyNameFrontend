import React, {Component} from 'react';
import axios from 'axios';
import {backendURL, getAllNamesPath, deleteNamePath} from './constants/constants.js'
import DeleteButton from './DeleteButton.js'

class AllNames extends Component {
  constructor(props) {
    super(props);

    this.state = {
      allNames: ''
    }
  }

  getAllNames = () => {
    axios.get(backendURL + getAllNamesPath).then( (response) => {
      this.setState({
        allNames: response.data
      })
    })
  }

  render() {
    var rows = [];

    for (var i = 0; i < this.state.allNames.length; i++) {
      var id = this.state.allNames[i].id
      var row = <tr><td>{id}</td><td>{this.state.allNames[i].name}</td><td><DeleteButton id ={id} click={this.getAllNames} /></td></tr>
      rows.push(row);
    }

    var table = '';

    if (this.state.allNames !== '') {
      table = <table className= 'allNamesTable'>
        <tbody>
          <tr><th>ID</th><th>Name</th></tr>
          {rows}
        </tbody>
      </table>
    }

    return (
      <div className = 'table'>
        <button onClick = {this.getAllNames}>Display all names in database</button><br/><br/>
        {table}
      </div>
    )
  }
}

export default AllNames;
