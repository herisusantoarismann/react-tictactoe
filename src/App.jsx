import React from "react";
import Board from "./components/Board";

const App = () => {
  return (
    <div className="container">
      <header>
        <h1>React Tic-tac-toe</h1>
      </header>
      <Board />
    </div>
  );
};

export default App;
