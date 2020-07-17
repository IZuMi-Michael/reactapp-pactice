import React from 'react'
import '../GameTest.css'

// make one square
const Square = (props) => {
  return (
    <button className="square" onClick = {props.onClick}> {props.value} </button>
  );
}
  
// make board with squares
class Board extends React.Component {
    
  // property of one square
  renderSquare(i) {
    return (
      <Square value = {this.props.squares[i]} onClick = {() => this.props.onClick(i)} />
    );
  }
    
  // organize all squares
  render() {
    return (

      <div>

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

    );
  }

}

// Organize the Game
class Game extends React.Component {

  // 
  constructor(props) {
    super(props);
    this.state = {squares: Array(9).fill(null)};
  }

  //
  handleClick(i) {
    const squares = this.state.squares.slice();
    squares[i] = 'X';
    this.setState({squares: squares});
  }
  
  //
  render() {

    return (
      <div className="game">
  
        <div className="game-board">
            <Board squares = {this.state.squares} onClick={(i) => this.handleClick(i)} />
        </div>
  
      </div>
    );

  }

}
  
// ========================================

export default Game;