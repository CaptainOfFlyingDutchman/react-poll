import React, { Component, PropTypes } from 'react';
import { PieChart } from 'react-d3';

import Display from './parts/Display';

class Board extends Component {
	constructor() {
		super();
		this.getResultsForPieChart = this.getResultsForPieChart.bind(this);
	}

	getResultsForPieChart(results) {
		const data =  Object.keys(results).filter(choice => {
			return results[choice] !== 0;
		}).map(choice => {
			return {
				label: choice,
				value: results[choice]
			};
		});
		return data;
	}

	render() {
		return (
			<div id="scoreboard">
				<Display if={this.props.status === 'connected' &&
								this.props.currentQuestion}>
					<PieChart
						data={this.getResultsForPieChart(this.props.results)}
						title={this.props.currentQuestion.q}
						height={window.innerHeight * 0.6}
						width={window.innerWidth * 0.9}
						radius={100}
						innerRadius={20}
						sectorBorderColor="white" />
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
	results: PropTypes.object,
	currentQuestion: PropTypes.oneOfType([
			PropTypes.object.isRequired,
			PropTypes.bool.isRequired
		])
};

export default Board;