import React, { Component } from 'react';
import Counter from './counter'
const shipSize = [5,4,3,3,2]; // store ship sizes in an array
class Board extends Component {
    constructor(props){
        super(props)
        this.state = {
            board: [],
            count: 25
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
        var col = Math.floor(Math.random()*maxCol); // horrizontal placement
        var row = ship;
        for (var shipSquare = 0;
          shipSquare < shipSize[ship]; shipSquare++) { this.state.board[col+shipSquare][row] = null; }
        }


    fiveShips(){
        for(var i=0; i < 5; i++){
            this.placeShip(i)
        }
    }

    clickHandler(col, row){
        const { board } = this.state
        if(board[col][row] === null) {
            board[col][row] = true
        } else {
            board[col][row]= ''
        }

        this.setState({board: board})

        if(this.state.count <= 0) {
            alert('You lose')
        } else{
            this.setState({count: this.state.count-1})
        }

    }


    renderRow(row){
        const { board } = this.state
        var set = []
        for(var col = 0; col < 10; col++){
            if(board[col][row] === true) {
                set.push(<td
                    id={`${col}_${row}`}
                    className="hit"
                    onClick={this.clickHandler.bind(this, col, row)}>
                        {board[col][row]}
                    </td>)
            } else if(board[col][row] === '' ){
                set.push(<td
                    id={`${col}_${row}`}
                    className="miss"
                    onClick={this.clickHandler.bind(this, col, row)}>
                        {board[col][row]}
                    </td>)
            } else{
                set.push(<td
                    id={`${col}_${row}`}
                    className="nada"
                    onClick={this.clickHandler.bind(this, col, row)}>
                        {board[col][row]}
                    </td>)
            }
        }

        return (<tr>{set}</tr>)
    };


    renderCol() {
        if (this.state.count == 0) {
            return <div className="chuck"><div className="loser"></div></div>
        } else {

        var col = []
        for(var i=0; i < 10; i++) {
            col.push(this.renderRow(i))
        }
        return col
    }}


    render() {
    return (<div><table>{ this.renderCol() }</table> <h1>Torpedoes: <Counter count={this.state.count}/></h1></div>)
    }
}


export default Board;
