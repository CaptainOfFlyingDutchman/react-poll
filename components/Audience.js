import React, { Component, PropTypes } from 'react';

import Display from './parts/Display';
import Join from './parts/Join';

class Audience extends Component {
	render() {
		return (
			<div>
				<Display if={this.props.status === 'connected'}>
					<Display if={this.props.member.name}>
						<h2>Welcome {this.props.member.name}</h2>
						<p>{this.props.audience.length} audience member connnected.</p>
						<p>Questions will appear here.</p>
					</Display>

					<Display if={!this.props.member.name}>
						<h1>Join the presentation</h1>
						<Join emit={this.props.emit} />
					</Display>
				</Display>
			</div>
			);
	}
};

Audience.propTypes = {
	status: PropTypes.string,
	emit: PropTypes.func,
	member: PropTypes.object,
	audience: PropTypes.array
};

export default Audience;