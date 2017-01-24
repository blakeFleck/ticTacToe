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
      rowOne: [,,],
      rowTwo: [,,],
      rowThree: [,,],
      player: "X"
    }
  }
  handleClickRow1(index){
    var row = this.state.rowOne;
    row[index] = this.state.player;
    this.setState({
      rowOne: row
    })
    if(this.state.player === 'X'){
        this.setState({
          player: 'O'
        })
    }else{
      this.setState({
        player: 'X'
      })
    }
  }
   handleClickRow2(index){
    var row = this.state.rowTwo;
    row[index] = this.state.player;
    this.setState({
      rowTwo: row
    })
    if(this.state.player === 'X'){
        this.setState({
          player: 'O'
        })
    }else{
      this.setState({
        player: 'X'
      })
    }
  }
    handleClickRow3(index){
    var row = this.state.rowThree;
    row[index] = this.state.player;
    this.setState({
      rowThree: row
    })
    if(this.state.player === 'X'){
        this.setState({
          player: 'O'
        })
    }else{
      this.setState({
        player: 'X'
      })
    }
  }
  oHwins(){
    if(this.state.rowOne === ['O','O','O'] ||
       this.state.rowTwo === ['O','O','O'] ||
       this.state.rowThree === ['O','O','O']){
        alert('Player O wins')
    }
    if(this.state.rowOne[0] === 'O' && this.state.rowTwo[1] === 'O' && this.state.rowThree[2] === 'O'){
      alert('Player O wins')
    }
    if(this.state.rowOne[2] === 'O' && this.state.rowTwo[1] === 'O' && this.state.rowThree[0] === 'O'){
      alert('Player O wins')
    }
    if(this.state.rowOne[0] === 'O' && this.state.rowTwo[1] === 'O' && this.state.rowThree[2] === 'O'){
      alert('Player O wins')
    }
    if(this.state.rowOne[0] === 'O' && this.state.rowTwo[0] === 'O' && this.state.rowThree[0] === 'O'){
      alert('Player O wins')
    }if(this.state.rowOne[1] === 'O' && this.state.rowTwo[1] === 'O' && this.state.rowThree[1] === 'O'){
      alert('Player O wins')
  }
  if(this.state.rowOne[2] === 'O' && this.state.rowTwo[2] === 'O' && this.state.rowThree[2] === 'O'){
      alert('Player O wins')
  }
}
  render() {
     {this.OHwins}
    return (
    <div id="board">
      <table>
        <Row1 rowStatus = {this.state.rowOne} handleClick = {this.handleClickRow1.bind(this)}/>
        <Row2 rowStatus = {this.state.rowTwo} handleClick = {this.handleClickRow2.bind(this)}/>
        <Row3 rowStatus = {this.state.rowThree} handleClick = {this.handleClickRow3.bind(this)}/>
      </table>
    </div>
    );
  }
}

export default App;
