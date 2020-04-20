import React, { Component } from "react";

class PostAnswer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      answertext: ""
    };
  }

  onChange(event) {
    this.setState({
      answertext: event.target.value
    });
  }

  onSubmit() {
    this.props.postAnswer(this.props.id, this.state.answertext);
  }

  render() {
    return (
      <>
        <form>
          <input
            name="answertext"
            onChange={event => this.onChange(event)}
            type="text" size="30"
          />
          <button type="submit" onClick={_ => this.onSubmit()} className="btn-submit">Post Answer</button>
        </form>
      </>
    );
  }
}

export default PostAnswer;
