import React, { Component } from 'react';
import './App.css';

class Row2 extends Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
        <tr className="row2">
        <td className= "square h"></td>
        <td className= "square v h"></td>
        <td className= "square h"></td>
      </tr>
    );
  }
}

export default Row2;