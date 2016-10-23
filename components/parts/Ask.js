import React, { Component, PropTypes } from 'react';

class Ask extends Component {
	constructor() {
		super();
		this.state = {
			choices: []
		};
	}

	setUpChoices() {
		let choices = Object.keys(this.props.question);
		choices.shift();
		this.setState({ choices: choices });
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
				<h2>{this.props.question.q}</h2>
					<div className="row">
						{this.state.choices.map((choice, i) => {
							return (
								<button key={i} className={`col-xs-12 col-sm-6 btn btn-${buttonTypes[i]}`}>
									{choice}: {this.props.question[choice]}
								</button>
							);
						})}
					</div>
			</div>
			);
	}
};

Ask.propTypes = {
	question: PropTypes.oneOfType([
				PropTypes.object.isRequired,
				PropTypes.bool.isRequired
			])
};

export default Ask;
