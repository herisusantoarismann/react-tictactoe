import React from "react";
import Square from "./Square";

type Squares = {
  [key: number]: string;
};

const players = ["X", "O"];
const winningCondition = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const Board = () => {
  const [currentPlayer, setCurrentPlayer] = React.useState<string>(players[0]);
  const [squares, setSquares] = React.useState<Squares>({});
  const [winner, setWinner] = React.useState<string>("");

  const onChangePlayer = (index: number) => {
    if (squares[index]) {
      alert("This box is already filled.");
      return;
    }
    if (winner) {
      alert("Please reset the game first.");
      return;
    }

    setSquares((prevState) => ({
      ...prevState,
      [index]: currentPlayer,
    }));
    currentPlayer === "X"
      ? setCurrentPlayer(players[1])
      : setCurrentPlayer(players[0]);
  };

  const checkWinner = () => {
    for (let i = 0; i < winningCondition.length; i++) {
      const [a, b, c] = winningCondition[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        setWinner(squares[a]);

        return squares[a];
      }
    }

    return false;
  };

  const resetGame = () => {
    setWinner("");
    setSquares({});
    setCurrentPlayer(players[0]);
  };

  React.useEffect(() => {
    document.title = "React Tic-Tac-Toe";
  }, []);

  React.useEffect(() => {
    if (squares) {
      const w = checkWinner();
      if (w) {
        alert(`The winner is ${w}`);
      }
    }
  }, [squares]);

  const renderSquare = (index: number) => {
    return (
      <Square state={squares[index]} onClick={() => onChangePlayer(index)} />
    );
  };

  return (
    <>
      <p className="winner-name">The winner is {winner}</p>
      <div className="board">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
      <div className="resetButton">
        <button onClick={() => resetGame()}>Reset Game</button>
      </div>
    </>
  );
};

export default Board;
