import React, { Component } from "react";

export class MessageForm extends Component {
	render() {
		return (
			<li className={this.props.type}>
				<img src="http://emilcarlsson.se/assets/mikeross.png" alt="" />
				<p>{this.props.content}</p>
			</li>
		);
	}
}

export default MessageForm;
