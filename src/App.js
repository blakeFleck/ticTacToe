import React, { Component } from 'react';
import logo from './logo.svg';
import Row1 from './row1.js';
import Row2 from './row2.js';
import Row3 from './row3.js';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      rowOne: [0,0,0],
      rowTwo: [0,0,0],
      rowThree: [0,0,0],
      personsTurn: 1
    }
  }
  render() {
    return (
    <div id="board">
      <table>
        <Row1/>
        <Row2/>
        <Row3/>
      </table>
    </div>
    );
  }
}

export default App;
