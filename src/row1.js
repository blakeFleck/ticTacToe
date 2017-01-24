import React, { Component } from 'react';
import './App.css';

class Row1 extends Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <tr className="row1">
        <td onClick={(e) => this.props.handleClick(0)} className= "square">{this.props.rowStatus[0]}</td>
        <td onClick={(e) => this.props.handleClick(1)} className= "square v">{this.props.rowStatus[1]}</td>
        <td onClick={(e) => this.props.handleClick(2)} className= "square">{this.props.rowStatus[2]}</td>
      </tr>
    );
  }
}

export default Row1;