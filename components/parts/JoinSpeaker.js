import React, { Component, PropTypes } from 'react';

class JoinSpeaker extends Component {
	constructor() {
		super();
		this.startHandler = this.startHandler.bind(this);
	}

	startHandler() {
		const speakerName = this.speakerNameTextBox.value;
		const presentationTitle = this.presentationTitleTextBox.value;
		this.props.emit('start', {name: speakerName, title: presentationTitle});
	}

	render() {
		return (
			<form action="javascript:" onSubmit={this.startHandler}>
				<div className="form-group">
					<label htmlFor="speakerName">Full Name</label>
					<input type="text" id="speakerName" ref={(speakerName) => this.speakerNameTextBox = speakerName}
						className="form-control" placeholder="Enter your full name" required />
				</div>

				<div className="form-group">
					<label htmlFor="presentationTitle">Presentation Title</label>
					<input type="text" id="presentationTitle"
						ref={(presentationTitle) => this.presentationTitleTextBox = presentationTitle}
						className="form-control" placeholder="Enter a title for this presentation" required />
				</div>

				<button className="btn btn-primary">Join</button>
			</form>
			);
	}
};

JoinSpeaker.propTypes = {
	emit: PropTypes.func.isRequired
};

export default JoinSpeaker;
