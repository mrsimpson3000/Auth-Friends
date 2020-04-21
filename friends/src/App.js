import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import Header from "./components/Header";
import Login from "./components/Login";

function App() {
  return (
    <Router>
      <>
        <Header />
        <Login />
      </>
    </Router>
  );
}

export default App;
