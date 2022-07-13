import React from "react";
import Square from "./Square";

const Board = () => {
  return (
    <div className="board">
      <Square player={currentPlayer} />
      <Square />
      <Square />
      <Square />
      <Square />
      <Square />
      <Square />
      <Square />
      <Square />
    </div>
  );
};

export default Board;
