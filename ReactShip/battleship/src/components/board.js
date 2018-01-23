import React, { Component } from 'react';
const shipSize = [5,4,3,3,2]; // store ship sizes in an array

class Board extends Component {
    constructor(props){
        super(props)
        this.state = {
            board: [],
        }
        this.setupBoard()
        this.fiveShips()
    }


    setupBoard() {
        for(var i=0; i < 10; i++){
            this.state.board.push([])
        }
    }

    placeShip(ship){ // TODO needs to add vertical ship placement
        var maxCol = 10 - shipSize[ship];
        var col = Math.floor(Math.random()*maxCol);
        var row = ship;
        for (var shipSquare = 0;
          shipSquare < shipSize[ship]; shipSquare++) { this.state.board[col+shipSquare][row] = 1; }
        }


    fiveShips(){
        for(var i=0; i < 5; i++){
            this.placeShip(i)
        }
    }

    clickHandler(col, row){
      if(this.state.board[col][row] === 1){
        this.state.board[col][row] = 0
          alert('Hit!')
      }
      else {
        this.state.board[col][row]= 'x'
      }
      this.setState(this.state)
    }


    renderRow(rowNumber){
        var row = []
        for(var i=0; i < 10; i++){
            row.push(<td id={`${i}_${rowNumber}`} onClick={this.clickHandler.bind(this, i, rowNumber)}>
            {this.state.board[i][rowNumber]}</td>)  // forgot to add .bind the on click was being exicuted everytime the row was created

        }
        return (<tr>{row}</tr>)
    };

    renderCol() {
        var col = []
        for(var i=0; i < 10; i++) {
            col.push(this.renderRow(i))
        }
        return col
    };

    render() {
    return (<table>{ this.renderCol() }</table>)
    }
}


export default Board;
