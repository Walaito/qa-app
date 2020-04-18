import React, { Component } from "react";
import { Link } from "@reach/router";
import NewQuestion from "./NewQuestion";

class Questions extends Component {
  render() {
    const list = this.props.data.map((q) => (
      <li>
        <Link to={"/question/" + q.id}>{q.question}</Link>
      </li>
    ));

    return (
      <>
        <ul>{list}</ul>
        <NewQuestion
          path="/question"
          submit={(question) => this.submit(question)}
        ></NewQuestion>
      </>
    );
  }
}

export default Questions;
