import React, { Component } from 'react';

import Display from './parts/Display';
import Join from './parts/Join';

export default class Audience extends Component {
	render() {
		return (
			<div>
				<Display if={this.props.status === 'connected'}>
					<h1>Join the presentation</h1>
					<Join />
				</Display>
			</div>
			);
	}
};