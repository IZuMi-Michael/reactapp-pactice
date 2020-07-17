import React, {useState} from 'react';
import '../GameTest.css'

// Make one Square
const Square = (props) => {
  return (
    <button className = "square" onClick = {props.onClick}> {props.value} </button>
  );
}

// Make Board with Squares
const Board = (props) => {
 
  //
  const renderSquare = (i) => {
    <Square value = {props.squares[i]} onClick = {() => props.onClick(i)} />
  }

  return (
    <div>

      <div className = "board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>

      <div className = "board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>

      <div className = "board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>

    </div>
  );

}

// Organize the Game
const Game = () => {

  // 
  const [History, setHistory] = useState([{squares: Array(9).fill(null)}])
  const [Step, setStep] = useState(0)

  //
  const handleClick = (i) => {
    const _history = History.slice(0, Step + 1);
    const current = _history[_history.length - 1];

    const squares = current.squares.slice();

    squares[i] = 'X'

    setHistory(History.concat([{squares}]));
    setStep(History.length);
  }

  const current = History[Step];
  
  //
  return (
    <div className="game">

      <div className="game-board">

          <Board squares = {current.squares} onClick = {handleClick} />
          
      </div>

    </div>
  );

}
  
// ========================================

export default Game;