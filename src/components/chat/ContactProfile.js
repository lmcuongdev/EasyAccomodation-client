import React, { Component } from "react";

export class ContactProfile extends Component {
	render() {
		return (
			<div className="contact-profile">
				<img src="http://emilcarlsson.se/assets/harveyspecter.png" alt="" />
				<p>{this.props.receiverName}</p>
			</div>
		);
	}
}

export default ContactProfile;
