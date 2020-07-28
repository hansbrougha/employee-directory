import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Container from "./components/EmployeeContainer";

function App() {
  return (
    <div>
      <Router>
        <Route exact path="/" component={Container} />
      </Router>
    </div>
  );
}

export default App;
