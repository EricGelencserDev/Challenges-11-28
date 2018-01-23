import React, { Component } from 'react';
const ship = 1
class Board extends Component {
    constructor(props){
        super(props)
        this.state ={
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

    placeShip(){
        var col = Math.floor(Math.random()* 10)
        var row = Math.floor(Math.random()* 10)
        this.state.board[col][row] = ship
    }

    fiveShips(){
        for(var i=0; i < 5; i++){
            this.placeShip()
        }
    }

    clickHandler(col, row){
        
    }


    renderRow(rowNumber){
        var row = []
        for(var i=0; i < 10; i++){
            row.push(<td id={`${i}_${rowNumber}`} onClick={this.clickHandler(i, rowNumber)}
>{this.state.board[i][rowNumber]}</td>)

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
