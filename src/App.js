import { useState } from "react";

export function Square({ value, onSquareClick }) {



  return (
    <>
      <button style={{ height: 40, width: 40 }} onClick={onSquareClick} >{value}</button>
    </>
  )
};



export default function Board() {

  let [squares, setSquares] = useState(Array(9).fill(null));
  let [xIsNext, setXIsNext] = useState(true);


  function handleClick(i) {
    if (squares[i]) {
      return;
    }
    let nextSquares = squares.slice();
    if (xIsNext) {
      nextSquares[i] = 'X';
    } else {
      nextSquares[i] = 'O';
    }

    setSquares(nextSquares);
    setXIsNext(!xIsNext);


  }
  return (
    <>
      <div>
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div>
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>

      <div>
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
    </>

  )
}
