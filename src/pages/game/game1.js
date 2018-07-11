import React, { Component } from 'react'
import './game.css'

class Square extends React.Component {
    render() {
        return(
            <button className="square" onClick={(event) => this.props.onClick(this.props.value)}>
                {this.props.value}
            </button>
        )
    }
}

class Board extends React.Component {
    
    renderSquare(square){
        return (
            square.map((item,index) => {
                return (<div className="board-row" key={index}> 
                    {item.map((item1,index1) => {
                        return <Square value={index+','+item1} key={index1} onClick={(event) => this.props.onClick(event)}/>
                    })}
                </div>)
            })
        )
    }
    render() {
        const square = this.props.squares.slice()
        return (
            this.renderSquare(square)
        )
    }
}

class Game extends React.Component {
    constructor() {
        super();
        this.state = {
            history:[],
            squares:[
                [0,1,2],
                [0,1,2],
                [0,1,2]
            ]
        }
    }
    handleClick(event) {
        console.log(event)
    }
    render() {
        return (
            <div>
                <Board squares={this.state.squares} onClick={(event) => this.handleClick(event)}/>
            </div>
        )
    }
}


export default Game;
