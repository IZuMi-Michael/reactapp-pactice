import React from 'react'
import './GameTest.css'

// Make One Square
// class Square extends React.Component {
    
//     // show one square
//     render() {
//         return (
//         <button className = "square" 
//                 onClick = {() => this.props.onClick()}>
//             {this.props.value}
//         </button>
//         )
//     }

// }

// Make One Square
const Square = (props) => {
    return (
        <button className = "square" 
                onClick = {() => props.onClick()}>
            {props.value}
        </button>
    )
}

// Make the Board with Squares
class Board extends React.Component {
    constructor(props) {
        super(props)
        this.state = {squares: Array(9).fill(null)}
    }
    // Square Click Event
    handleClick(i) {
        const squares = this.state.squares.slice()
        if (squares[i]) {return}
        // if (this.state.xIsNest) {
        //     squares[i] = 'X'
        // } else {
        //     squares[i] = 'O'
        // }
        squares[i] = this.state.xIsNest ? 'X' : 'O'
        this.setState({squares: squares,
                       xIsNest: !this.state.xIsNest})
    }
    // One Square
    renderSquare(i) {
        return (
            <Square value = {this.state.squares[i]} 
                    onClick = {() => this.handleClick(i)} />
        )
    }
    // 
    render() {
        // Player's Status
        const status = 'Next Player:' + (this.state.xIsNest ? 'X' : 'O')
        //
        return (
            <div>
                <div className = "status">{status}</div>
                <div className = "board-row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className = "board-row">
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className = "board-row">
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
            </div>
        )
    }
}

// Organize the Game
class Game extends React.Component {
    render() {
        return (
            <div className = "game">
                <div className = "game-board"><Board /></div>
                <div className = "game-info">
                    <div>{/* status */}</div>
                    <div>{/* TODO */}</div>
                </div>
            </div>
        )
    }
}

export default Game 