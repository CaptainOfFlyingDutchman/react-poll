import React, { Component } from 'react';

import Display from './parts/Display';

export default class Audience extends Component {
	render() {
		return (
			<Display if={this.props.status === 'connected'}>
				<h1>Join the presentation</h1>
			</Display>
			);
	}
};