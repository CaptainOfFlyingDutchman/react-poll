import React, { Component, PropTypes } from 'react';

class Attendance extends Component {
	render() {
		return(
			<div>
				<h2>Attendance &mdash; {this.props.audience.length}</h2>
				<table className="table table-stripped">
					<thead>
						<tr>
							<td>Audience Member</td>
							<td>Socket ID</td>
						</tr>
					</thead>
					<tbody>
						{this.props.audience.map((member, i) => {
							return (
								<tr key={i}>
									<td>{member.name}</td>
									<td>{member.id}</td>
								</tr>
								);
						})}
					</tbody>
				</table>
			</div>
			);
	}
}

Attendance.propTypes = {
	audience: PropTypes.array
};

export default Attendance;