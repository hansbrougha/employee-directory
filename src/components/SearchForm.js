import React from "react";

const styles = {
  inputStyle: {
    marginTop: 10,
    marginBottom: 0
  }
};
function SearchForm(props) {
  if (typeof props.currentPage === "string") {
    return (
      <div>
        <form>
          <div className="form-group">
            <div className="row">
              <div className="col-4"></div>
              <div className="col-4">
                <input
                  onChange={props.handleInputChange}
                  value={props.currentPage}
                  name="currentPage"
                  type="text"
                  className="form-control"
                  placeholder="Search For an Employee"
                  id="search"
                  alt="Search For an Employee"
                  style={styles.inputStyle}
                />
                <br />
                <button
                  onClick={() => props.handlePageChange("")}
                  className="btn btn-primary"
                >
                  Reset
                </button>
              </div>
              <div className="col-4"></div>
            </div>
          </div>
        </form>
      </div>
    );
  } else {
    return (
      <div>
        <form>
          <div className="form-group">
            <div className="row">
              <div className="col-4"></div>
              <div className="col-4">
                <input
                  onChange={props.handleInputChange}
                  value={props.currentPage}
                  name="currentPage"
                  type="text"
                  className="form-control"
                  placeholder="Search For an Employee"
                  id="search"
                  alt="Search For an Employee"
                  style={styles.inputStyle}
                />
                <br />
                <button
                  onClick={() => props.handlePageChange("")}
                  className="btn btn-primary"
                >
                  Reset
                </button>
              </div>
              <div className="col-4"></div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchForm;
