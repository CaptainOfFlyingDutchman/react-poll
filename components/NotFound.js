import React, { Component } from 'react';
import { Link, IndexLink } from 'react-router';

export default class NotFound extends Component {
	render() {
		return(
			<div id="not-found">
				<h1>Whoops...</h1>
				<p>We cannot find the page that you have requested.
					Were you looking for one of these?</p>

				<IndexLink to="/">Join as Audience</IndexLink>
				<Link to="/speaker">Start the presentation</Link>
				<Link to="/board">View the board</Link>
			</div>
			);
	}
}