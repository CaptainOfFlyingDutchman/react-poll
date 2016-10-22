import React, { Component, PropTypes } from 'react';

class Questions extends Component {
	render() {
		return(
			<div id="questions" className="row">
				<h2>Questions</h2>
					{this.props.questions.map((question, i) => {
						return (
							<div key={i}
								className="col-xs-12 col-sm-6 col-md-3">
								<span>{question.q}</span>
							</div>
							);
					})}
			</div>
			);
	}
}

Questions.propTypes = {
	questions: PropTypes.array
};

export default Questions;