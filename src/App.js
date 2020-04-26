import React from "react";
import { BrowserRouter as Router, Redirect } from "react-router-dom";
import Container from "./components/Container";

function App() {
  return (
    <Router>
      <Container />
      <Redirect exact from="/" to="/cards" />
    </Router>
  );
}

export default App;
