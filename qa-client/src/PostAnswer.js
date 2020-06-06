import React, { Component } from "react";

class PostAnswer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ""
    };
  }

  onChange(event) {
    this.setState({
      text: event.target.value
    });
  }

  onSubmit() {
    this.props.postAnswer(this.props.id, this.state.text);
  }

  render() {
    return (
      <>
        <form>
          <input
            name="text"
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
