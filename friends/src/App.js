import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import Header from "./components/Header";

import logo from "./logo.svg";

function App() {
  return (
    <Router>
      <>
        <Header />
      </>
    </Router>
  );
}

export default App;
