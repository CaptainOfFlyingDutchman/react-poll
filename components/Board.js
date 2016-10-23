import React, { Component, PropTypes } from 'react';

import Display from './parts/Display';

class Board extends Component {
	render() {
		return (
			<div id="scoreboard">
				<Display if={this.props.status === 'connected' &&
								this.props.currentQuestion}>
					<h3>{this.props.currentQuestion.q}</h3>
					<p>{JSON.stringify(this.props.results)}</p>
				</Display>

				<Display if={this.props.status === 'connected' &&
								!this.props.currentQuestion}>
					<h3>Awaiting a question...</h3>
				</Display>

			</div>
			);
	}
}

Board.propTypes = {
	status: PropTypes.string,
	currentQuestion: PropTypes.oneOfType([
			PropTypes.object.isRequired,
			PropTypes.bool.isRequired
		])
};

export default Board;