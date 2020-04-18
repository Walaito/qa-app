import React, { Component } from "react";
import { Link } from "@reach/router";

class Nav extends Component {
  render() {
    return (
      <>
        <h2>
          <Link to="/">Q&A</Link>
        </h2>
      </>
    );
  }
}

export default Nav;
