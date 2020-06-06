import React, { Component } from "react";
import Questions from "./Questions";
import Question from "./Question";
import Nav from "./Nav";
import { Router } from "@reach/router";
import './App.css';

class App extends Component {
  // API url from the file '.env' OR the file '.env.development'.
  // The first file is only used in production.
  API_URL = process.env.REACT_APP_API_URL;

  constructor(props) {
    super(props);
    this.state = {
      questions: [],
    };
  }

  submit(question) {
    const newQuestion = {
      question: question
    };
    this.setState({
      questions: [...this.state.questions, newQuestion],
    });
  }

  componentDidMount() {
    this.getData();
  }

  async getData() {
    const url = `${this.API_URL}/questions/`; //todo heroku
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    this.setState({ questions: data })
  }

  getQuestion(id) {
    const question = this.state.questions.find((q) => q._id === id);
    return question;
  }

  async postQuestion(ques) {
    console.log("postQuestion", ques);
    const url = `${this.API_URL}/questions/`;

    const response = await fetch(url, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({
        ques: ques,
        answ: []
      })
    });
    const data = await response.json();
    console.log("Printing the response:", data);

    await this.getData();
  }



  async postAnswer(id, text) {
    console.log("postAnswer", id, text);
    const url = `${this.API_URL}/questions/${id}`;

    const response = await fetch(url, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({
        text: text,
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
          <Questions path="/" submit={question => this.submit(question)} data={this.state.questions}
            postQuestion={(ques) => this.postQuestion((ques))} />
          <Question path="/question/:id" data={this.state.questions} getQuestion={(id) => this.getQuestion(id)}
            postAnswer={(id, text) => this.postAnswer(id, text)} />
        </Router>
      </>
    );
  }
}

export default App;
