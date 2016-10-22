import React, { Component, PropTypes } from 'react';

import Display from './parts/Display';
import Join from './parts/Join';

class Audience extends Component {
	render() {
		return (
			<div>
				<Display if={this.props.status === 'connected'}>
					<h1>Join the presentation</h1>
					<Join emit={this.props.emit} />
				</Display>
			</div>
			);
	}
};

Audience.propTypes = {
	status: PropTypes.string,
	emit: PropTypes.func
};

export default Audience;