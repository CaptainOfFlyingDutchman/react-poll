import React, { Component, PropTypes } from 'react';

class Display extends Component {
	render() {
		return(
			this.props.if ? <div>{this.props.children}</div> : null
			);
	}
};

Display.propTypes = {
	if: PropTypes.bool.isRequired
};

export default Display;
