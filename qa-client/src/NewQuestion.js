import React, { Component } from "react";
import { Link } from "@reach/router";

class NewQuestion extends Component {
  constructor(props) {
    super(props);

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      question: ''
    };
  }

  onChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  onSubmit() {
    this.props.submit(this.state.question);
  }

  render() {
    return (
      <>
        <input
          name="input"
          onChange={(event) => this.onChange(event)}
          type="text"
        />
        <button onClick={(_) => this.onSubmit()}>Creat Question</button>
      </>
    );
  }
}

export default NewQuestion;
