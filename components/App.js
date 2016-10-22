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
			speaker: {}, /* On every socket it's displayed who is the speaker */
			questions: []
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
			if (existingMember && existingMember.type === 'member') {
				this.emit('join', existingMember);
			} else if (existingMember && existingMember.type === 'speaker') {
				this.emit('start', { name: existingMember.name, title: sessionStorage.title });
			}
			this.setState({ status: 'connected' });
			console.log('Connected: ', this.socket.id);
		});

		this.socket.on('welcome', this.udpateState);

		this.socket.on('start', (presentation) => {
			if (this.state.member.type === 'speaker') {
				sessionStorage.title = presentation.title;
			}
			this.setState(presentation);
		});

		this.socket.on('joined', (newMember) => {
			sessionStorage.member = JSON.stringify(newMember);
			this.setState({ member: newMember });
		});

		this.socket.on('audience', (newAudience) => {
			this.setState({ audience: newAudience });
		});

		this.socket.on('end', this.udpateState);

		this.socket.on('disconnect', () => {
			this.setState({
				status: 'Disconnected',
				title: 'Disconnected',
				speaker	: {}
			});
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