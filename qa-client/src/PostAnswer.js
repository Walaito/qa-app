import React, { Component } from "react";
import { Link } from "@reach/router";

class PostAnswer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      answertext: ""
    };
  }

  onChange(event) {
    this.setState({
      "answertext": event.target.value
    });
  }

  onSubmit() {
    this.props.postAnswer(this.props._id, this.state.answertext);
  }

  render() {
    return (
      <>
        <input
          name="answertext"
          onChange={event => this.onChange(event)}
          type="text"
        />
        <button type="submit" onClick={_ => this.onSubmit()}>Post Answer</button>
      </>
    );
  }
}

export default PostAnswer;
