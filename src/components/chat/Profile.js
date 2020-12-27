import React, { Component } from "react";

export class Profile extends Component {
	render() {
		return (
			<div id="profile">
				<div className="wrap">
					<img
						id="profile-img"
						src="http://emilcarlsson.se/assets/mikeross.png"
						className="online"
						alt=""
					/>
					<p>{this.props.senderName}</p>
				</div>
			</div>
		);
	}
}

export default Profile;
