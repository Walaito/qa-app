import React, { Component } from 'react';
import PostAnswer from './PostAnswer';

class Question extends Component {
    render() {
        const id = this.props.id;
        const question = this.props.getQuestion(id);

        let content = "Loading";
        let answers = [];
        if (question) {
            content = question.question;
            answers = question.answer.map(a => <li>{a}</li>);
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
                <PostAnswer id={id} postAnswer={(id, text) => this.props.postAnswer(id, text)} />
            </>
        );
    }
}

export default Question;

