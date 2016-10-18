import React, { Component } from 'react';

import io from 'socket.io-client';

import Header from './parts/Header';

export default class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			status: 'disconnected'
		};
	}
	componentWillMount() {
		this.socket = io('http://localhost:3000');
		this.socket.on('connect', () => {
			this.setState({ status: 'connected' });
			console.log('Connected: ', this.socket.id);
		});

		// socket.on('event', function(data){});
		this.socket.on('disconnect', () => {
			console.log('Disconnected');
			this.setState({ status: 'disconnected' });
		});
	}
	render() {
		return(
			<Header title="Hello world"
				status={this.state.status}></Header>
			);
	}
};