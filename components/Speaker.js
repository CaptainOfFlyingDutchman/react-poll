import React, { Component } from 'react';

export default class Speaker extends Component {
	render() {
		return (
			<h1>Speaker {this.props.status}</h1>
			);
	}
};