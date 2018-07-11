import React, { Component } from 'react'
import "./game.css"

class Square extends React.Component {
    render() {
        return (
            <button className="square">
                {/* {todo} */}
            </button>
        )
    }
}

class Board extends React.Component {
    renderSquare(i) {
        return <Square />
    }

    render() {
        const status = "next playre:X"

        return(
            <div>
                <div className="status">{status}</div>
                <div className="board-row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className="board-row">
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className="board-row">
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
            </div>
        )
    }
}

class Game extends React.Component {
    render(){
        return (
            <div className="game">
                <div className="game-board">
                    <Board />
                </div>
                <div className="game-info">
                    <div>{ /*000status*/}</div>
                    <ol>{/*todo*/}</ol>
                </div>
            </div>
        )
    }
}

export default Game;