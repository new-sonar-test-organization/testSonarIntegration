import React, { useState } from "react";
import Square from "../../Atoms/Square";
import "../../../App.css";

const TicTacToeBoard = (props) => {
  // const [squares, setSquares] = useState([]);
  const [xIsNext, setXIsNext] = useState(true);

  const renderSquare = (i) => {
    return <Square value={props.squares[i]} onClick={() => props.onClick(i)} />;
  };

  // const calculateWinner = (squares) => {
  //   console.log("hey winner");
  //   const lines = [
  //     [0, 1, 2],
  //     [3, 4, 5],
  //     [6, 7, 8],
  //     [0, 3, 6],
  //     [1, 4, 7],
  //     [2, 5, 8],
  //     [0, 4, 8],
  //     [2, 4, 6],
  //   ];
  //   for (let i = 0; i < lines.length; i++) {
  //     const [a, b, c] = lines[i];
  //     console.log("squares[a] ", squares[a]);
  //     if (
  //       squares[a] &&
  //       squares[a] === squares[b] &&
  //       squares[a] === squares[c]
  //     ) {
  //       return squares[a];
  //     }
  //   }
  //   return null;
  // };

  // const winner = calculateWinner(squares);
  // let status;

  // if (winner) {
  //   status = "Winner: " + winner;
  // } else {
  //   console.log("next player ");
  //   console.log("winner ", winner);
  //   status = "Next player: " + (xIsNext ? "X" : "O");
  // }

  return (
    <div>
      {/* <div className="status">{status}</div> */}
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
};

export default TicTacToeBoard;
