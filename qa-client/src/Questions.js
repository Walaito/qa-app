import React, { Component } from "react";
import { Link } from "@reach/router";
import NewQuestion from "./NewQuestion";

class Questions extends Component {
  render() {
    const list = this.props.data.map((q) => (
      <li key={q._id}>
        <Link to={"/question/" + q._id}>{q.question}</Link>
      </li>
    ));

    return (
      <>
        <ul>{list}</ul>
        <NewQuestion
          path="/question"
          postQuestion={(question) => this.props.postQuestion(question)}
        ></NewQuestion>
      </>
    );
  }
}

export default Questions;
