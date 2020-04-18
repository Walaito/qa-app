import React, { Component } from "react";
import Questions from "./Questions";
import Question from "./Question";
import NewQuestion from "./NewQuestion";
import Nav from "./Nav";
import { Router } from "@reach/router";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: [],
    };
  }

  submit(question) {
    const newQuestion = {
      question: question,
    };
    this.setState({
      questions: [...this.state.questions, newQuestion],
    });
  }

  componentDidMount() {
    this.getData();
  }

  async getData() {
    const url = "http://localhost:5000/questions"; //todo haraku
    const response = await fetch(url);
    const data = await response.json();
    this.setState({
      questions: data,
    });
  }

  getQuestion(id) {
    const question = this.state.questions.find((q) => q.id === parseInt(id));
    return question;
  }

  async postAnswer(id, answertext) {
    console.log("postAnswer", id, answertext);
    const url = `http://localhost:5000/questions/${id}/answers`;

    const response = await fetch(url, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({
        answertext: answertext,
      }),
    });
    const data = await response.json();
    console.log("Printing the response:", data);

    await this.getData();
  }

  render() {
    return (
      <>
        <Nav>{""}</Nav>
        <Router>
          <Questions path="/" data={this.state.questions}></Questions>
          <Question
            path="/question/:id"
            getQuestion={(id) => this.getQuestion(id)}
            postAnswer={(id, text) => this.postAnswer(id, text)}
          ></Question>
        </Router>
      </>
    );
  }
}

export default App;
