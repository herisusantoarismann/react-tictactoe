import React from "react";
import Board from "./components/Board";
import Footer from "./components/Footer";
import Header from "./components/Header";

const App = () => {
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
