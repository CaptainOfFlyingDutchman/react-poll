import React, { Component, PropTypes } from 'react';

import Display from './Display';

class Ask extends Component {
	constructor() {
		super();
		this.state = {
			choices: [],
			answer: undefined
		};
		this.selectHandler = this.selectHandler.bind(this);
	}

	setUpChoices() {
		let choices = Object.keys(this.props.question);
		choices.shift();
		this.setState({
			choices: choices,
			answer: sessionStorage.answer
		});
	}

	selectHandler(choice) {
		this.setState({ answer: choice });
		sessionStorage.answer = choice;
		this.props.emit('answer', { question: this.props.question, choice: choice });
	}

	componentWillMount() {
		this.setUpChoices();
	}

	componentWillReceiveProps() {
		this.setUpChoices();
	}

	render() {
		const buttonTypes = ['primary', 'success', 'warning', 'danger'];

		return(
			<div id="currentQuestion">
				<Display if={this.state.answer}>
					<h3>You answered: {this.state.answer}</h3>
					<p>{this.props.question[this.state.answer]}</p>
				</Display>

				<Display if={!this.state.answer}>
					<h2>{this.props.question.q}</h2>
					<div className="row">
						{this.state.choices.map((choice, i) => {
							return (
								<button
									key={i}
									className={`col-xs-12 col-sm-6 btn btn-${buttonTypes[i]}`}
									onClick={() => this.selectHandler(choice)}>
									{choice}: {this.props.question[choice]}
								</button>
							);
						})}
					</div>
				</Display>
			</div>
			);
	}
};

Ask.propTypes = {
	question: PropTypes.oneOfType([
				PropTypes.object.isRequired,
				PropTypes.bool.isRequired
			]),
	emit: PropTypes.func.isRequired
};

export default Ask;
