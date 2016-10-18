import React, { Component } from 'react';

import io from 'socket.io-client';

import Header from './parts/Header';

export default class App extends Component {
	componentWillMount() {
		this.socket = io('http://localhost:3000');
		this.socket.on('connect', () => {
			console.log('Connected: ' + this.socket.id);
		});

		// socket.on('connect', function(){});
		// socket.on('event', function(data){});
		// socket.on('disconnect', function(){});
	}
	render() {
		return(
			<Header title="Hello worldsss"></Header>
			);
	}
};