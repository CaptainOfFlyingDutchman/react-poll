import React, { Component, PropTypes } from 'react';

class Header extends Component {
	render() {
		return(
			<header className="row">
				<div className="col-xs-10">
					<h1>{this.props.title}</h1>
					<p>{this.props.speaker.name}</p>
				</div>
				<div className="col-xs-2">
					<span id="connection-status"
						className={this.props.status}></span>
				</div>
			</header>
			);
	}
};

Header.propTypes = {
	title: PropTypes.string.isRequired,
	speaker: PropTypes.object.isRequired
};

Header.defaultProps = {
	status: 'disconnected'
}

export default Header;