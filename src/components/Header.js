import React from "react";
import SearchForm from "./SearchForm.js";

const styles = {
  headerStyle: {
    background: "skyblue",
    textAlign: "center",
    alignSelf: "stretch",
    paddingBottom: 10
  }
};

function Header() {
  return (
    <div className="container">
      <div className="jumbotron jumbotron-fluid" style={styles.headerStyle}>
        <div className="container">
          <h1 className="display-4">Employee Directory</h1>
          <SearchForm />
        </div>
      </div>
    </div>
  );
}

export default Header;
