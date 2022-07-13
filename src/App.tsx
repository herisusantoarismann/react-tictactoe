import React from "react";
import Board from "./components/Board";
import Footer from "./components/Footer";
import Header from "./components/Header";

const App = () => {
  const [currentPlayer, setCurrentPlayer] = React.useState<string>("");

  return (
    <div className="container">
      <div>
        <Header />
        <Board />
      </div>
      <Footer />
    </div>
  );
};

export default App;
