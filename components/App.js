import React, { Component } from 'react';

import io from 'socket.io-client';

import Header from './parts/Header';

export default class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			status: 'disconnected',
			title: ''
		};
		this.emit = this.emit.bind(this);
	}

	componentWillMount() {
		this.socket = io('http://localhost:3000');

		this.socket.on('connect', () => {
			this.setState({ status: 'connected' });
			console.log('Connected: ', this.socket.id);
		});

		this.socket.on('welcome', (serverState) => {
			this.setState({ title: serverState.title });
		});

		this.socket.on('disconnect', () => {
			console.log('Disconnected');
			this.setState({ status: 'disconnected' });
		});
	}

	emit(event, payload) {
		this.socket.emit(event, payload);
	}

	render() {
		const { title, status } = this.state;

		return(
			<div>
				<Header
				title={title}
				status={status}></Header>

				{React.cloneElement(this.props.children, {...this.state, emit: this.emit})}
			</div>
			);
	}
};