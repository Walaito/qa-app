import React, { Component } from "react";

class NewQuestion extends Component {
  constructor(props) {
    super(props);

    //this.onChange = this.onChange.bind(this);
    // this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      question: ''
    };
  }

  onChange(event) {
    this.setState({
      "question": event.target.value,
    });
  }

  onSubmit() {
    this.props.postQuestion(this.state.question);
  }

  render() {
    return (
      <>
        <input
          name="question"
          onChange={(event) => this.onChange(event)}
          type="text" size="40"
        />
        <button type="submit" onClick={_ => this.onSubmit()} className="btn-submit">Creat Question</button>
      </>
    );
  }
}

export default NewQuestion;
