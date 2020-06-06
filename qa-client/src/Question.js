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
            content = question.ques;
            answers = question.answ.map(a =>
                <tr key={a.text}>
                    <td>{a.text}</td>
                    <td className="btn-padding"><button onClick={this.voteThis}>+</button>
                        <button onClick={this.unvoteThis}>-</button>
                       Votes: {this.state.value}</td>
                </tr>);
        }

        return (
            <>
                <h2>Question</h2>
                <p>{content}</p>
                <h3>Answers</h3>
                <table>
                    <tbody>
                        {answers}
                    </tbody>
                </table>


                {/* PostAnswer */}
                <PostAnswer id={id} postAnswer={(id, text) => this.props.postAnswer(id, text)} />
            </>
        );
    }
}

export default Question;

