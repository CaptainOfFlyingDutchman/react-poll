import React, { Component } from 'react';

import io from 'socket.io-client';

import Header from './parts/Header';

export default class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			status: 'disconnected',
			title: '',
			member: {}, /* Person using this particular socket */
			audience: [],
			speaker: {} /* On every socket it's displayed who is the speaker */
		};
		this.emit = this.emit.bind(this);
		this.udpateState = this.udpateState.bind(this);
	}

	udpateState(serverState) {
		this.setState(serverState);
	}

	componentWillMount() {
		this.socket = io('http://localhost:3000');

		this.socket.on('connect', () => {
			var existingMember = sessionStorage.member ?
									JSON.parse(sessionStorage.member) :
									null;
			if (existingMember) {
				this.emit('join', existingMember);
			}
			this.setState({ status: 'connected' });
			console.log('Connected: ', this.socket.id);
		});

		this.socket.on('welcome', this.udpateState);

		this.socket.on('start', this.udpateState);

		this.socket.on('joined', (newMember) => {
			sessionStorage.member = JSON.stringify(newMember);
			this.setState({ member: newMember });
		});

		this.socket.on('audience', (newAudience) => {
			this.setState({ audience: newAudience });
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
		return(
			<div>
				<Header {...this.state}></Header>

				{React.cloneElement(this.props.children, {...this.state, emit: this.emit})}
			</div>
			);
	}
};