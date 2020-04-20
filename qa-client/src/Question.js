import React, { Component } from 'react';
import PostAnswer from './PostAnswer';

class Question extends Component {
    constructor(props) {
        super(props);
        this.state = { value: 0 };
        this.voteThis = this.voteThis.bind(this);
        this.unvoteThis = this.unvoteThis.bind(this);
    }
    voteThis(event) {
        this.setState({ value: this.state.value + 1 })
    }
    unvoteThis(event) {
        this.setState({ value: this.state.value - 1 })
    }


    render() {
        const id = this.props.id;
        const question = this.props.getQuestion(id);

        let content = "Loading";
        let answers = [];
        if (question) {
            content = question.question;
            answers = question.answers.map(a =>
                <li>
                    <button onClick={this.voteThis}>/</button>
                    <button onClick={this.unvoteThis}>x</button>
                    {a} Votes: {this.state.value}
                </li>);
        }

        return (
            <>
                <h2>Question</h2>
                <p>{content}</p>
                <h3>Answers</h3>
                <ul>
                    {answers}
                </ul>


                {/* PostAnswer */}
                <PostAnswer id={id} postAnswer={(id, answertext) => this.props.postAnswer(id, answertext)} />
            </>
        );
    }
}

export default Question;

