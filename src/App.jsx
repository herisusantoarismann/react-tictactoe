import React from "react";
import Board from "./components/Board";
import Footer from "./components/Footer";
import Header from "./components/Header";

const App = () => {
  return (
    <div className="container">
      <Header />
      <Board />
      <Footer />
    </div>
  );
};

export default App;
