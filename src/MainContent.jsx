import React, { Component } from "react";

export default class MainContent extends Component {
  state = {
    pageTitle: "Customers",
    customerCount: 5, // Fixed the typo here
    Customers: [
      { id: 1, name: "Scot", Phone: "1231312312" },
      { id: 2, name: "Hi", Phone: "219487918274" },
      { id: 3, name: "bye", Phone: "897234071212" },
      { id: 4, name: "hello", Phone: "9872498720" },
      { id: 5, name: "See", Phone: "912649128740" },
    ],
  };

  render() {
    return (
      <div>
        <h4 className="border-bottom m-1 p-1">
          {this.state.pageTitle}
          <span className="badge badge-secondary m-2">
            {this.state.customerCount}
          </span>
          <button className="btn btn-info" onClick={this.onRefreshClick}>
            Refresh
          </button>
        </h4>

        <table className="table">
          <thead>
            <tr> {/* Fixed missing <tr> element */}
              <th>#</th>
              <th>CustomerName</th>
              <th>Phone</th>
            </tr>
          </thead>
          <tbody>
          {this.state.Customers.map((cust) => {
  return (
    // eslint-disable-next-line no-undef
    <tr key={cust.id}>
      <td>{cust.id}</td>
      <td>{cust.name}</td>
      <td>{cust.Phone}</td>
    </tr>
  );
})}


          </tbody>
        </table>
      </div>
    );
  }

  onRefreshClick = () => {
    this.setState({ customerCount: 7 }); // Update customerCount
  };
}
