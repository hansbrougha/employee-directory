import React from "react";
import { Table } from "reactstrap";

function TableData(props) {
  if (props.currentPage === "") {
    return (
      <div className="container" style={{ margin: "0 auto" }}>
        <Table striped hover style={{ textAlign: "center" }}>
          <thead>
            <tr>
              <th></th>
              <th>
                <a href="#name" onClick={() => props.sortByFirst()}>
                  First
                </a>
              </th>
              <th>
                <a href="#name" onClick={() => props.sortByLast()}>
                  Last
                </a>
              </th>
              <th>Phone</th>
              <th>Email</th>
              <th>DOB</th>
            </tr>
          </thead>
          <tbody>
            {props.results.map((result) => (
              <tr key={result.cell}>
                <td>
                  <a
                    href="#singlePage"
                    onClick={() => props.handlePageChange({ result })}
                  >
                    <img
                      src={result.picture.thumbnail}
                      className="picture"
                      alt="http://placekitten.com/200/300"
                    ></img>
                  </a>
                </td>
                <td>{result.name.first}</td>
                <td>{result.name.last}</td>
                <td>{result.cell}</td>
                <td>{result.email}</td>
                <td>{result.dob.date}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    );
  } else if (typeof props.currentPage === "string") {
    let matches = props.results.filter((result) => {
      return (
        (result.name.first + " " + result.name.last)
          .substring(0, props.currentPage.length)
          .toLowerCase() === props.currentPage.toLowerCase()
      );
    });
    return (
      <div className="container">
        <Table striped hover>
          <thead>
            <tr>
              <th>Avatar</th>
              <th>
                <a href="#name" onClick={() => props.sortByFirst()}>
                  First
                </a>
              </th>
              <th>
                <a href="#name" onClick={() => props.sortByLast()}>
                  Last
                </a>
              </th>
              <th>Phone</th>
              <th>Email</th>
              <th>DOB</th>
            </tr>
          </thead>
          <tbody>
            {matches.map((result) => (
              <tr key={result.cell}>
                <td>
                  <a
                    href="#singlePage"
                    onClick={() => props.handlePageChange({ result })}
                  >
                    <img
                      src={result.picture.thumbnail}
                      className="picture"
                      alt="http://placekitten.com/200/300"
                    ></img>
                  </a>
                </td>
                <td>{result.name.first}</td>
                <td>{result.name.last}</td>
                <td>{result.cell}</td>
                <td>{result.email}</td>
                <td>{result.dob.date}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    );
  } else {
    return (
      <div>
        <div className="card mb-3 bg-light">
          <div className="row no-gutters">
            <div className="photo col-md-4">
              <img
                src={props.currentPage.result.picture.large}
                className="card-img border border-dark"
                alt="http://placekitten.com/200/300"
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <p className="card-text">
                  First Name: {props.currentPage.result.name.first}
                </p>
                <p className="card-text">
                  Last Name: {props.currentPage.result.name.last}
                </p>
                <p className="card-text">
                  Phone Number: {props.currentPage.result.cell}
                </p>
                <p className="card-text">
                  Email: {props.currentPage.result.email}
                </p>
                <p className="card-text">
                  Location: {props.currentPage.result.location.city}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TableData;
