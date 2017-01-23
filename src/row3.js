import React, { Component } from 'react';
import './App.css';

class Row3 extends Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
         <tr className="row3">
        <td className= "square"></td>
        <td className= "square v"></td>
        <td className= "square"></td>
      </tr>
    );
  }
}

export default Row3;