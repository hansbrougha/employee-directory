import React from "react";
import SearchForm from "./SearchForm.js";

const styles = {
  headerStyle: {
    background: "transparent",
    textAlign: "center",
    alignSelf: "stretch",
    paddingBottom: 10
  }
};

function Header({ handleInputChange }) {
  return (
    <div className="container">
      <div className="jumbotron jumbotron-fluid" style={styles.headerStyle}>
        <div className="container">
          <h1 className="display-4">Employee Directory</h1>
          <SearchForm handleInputChange={handleInputChange} />
        </div>
      </div>
    </div>
  );
}

export default Header;
