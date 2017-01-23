import React, { Component } from 'react';
import './App.css';

class Row1 extends Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <tr className="row1">
        <td className= "square"></td>
        <td className= "square v"></td>
        <td className= "square"></td>
      </tr>
    );
  }
}

export default Row1;