import React from "react";
import { Route } from "react-router-dom";
import Container from "./components/EmployeeContainer";

function App() {
  return (
    <div>
      <Route exact path={process.env.PUBLIC_URL + "/"} component={Container} />
    </div>
  );
}

export default App;
