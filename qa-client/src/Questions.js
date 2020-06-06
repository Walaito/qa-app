import React, { Component } from "react";
import { Link } from "@reach/router";
import NewQuestion from "./NewQuestion";

class Questions extends Component {
  render() {
    const list = this.props.data.map((q) => (
      <li key={q._id}>
        <Link to={"/question/" + q._id}>{q.ques}</Link>
      </li>
    ));

    return (
      <>
        <ul>{list}</ul>
        <NewQuestion
          path="/question"
          postQuestion={(ques) => this.props.postQuestion(ques)}
        ></NewQuestion>
      </>
    );
  }
}

export default Questions;
