import React, { Component } from "react";

export class MessageInput extends Component {
	handleKeyPress = (event) => {
		if (event.key === "Enter") {
			this.props.sendMessage();
		}
	};

	render() {
		return (
			<div className="message-input">
				<div className="wrap">
					<input
						type="text"
						placeholder="Write your message..."
						value={this.props.message}
						onChange={this.props.handleChange}
						onKeyPress={this.handleKeyPress}
					/>
					<button className="submit" onClick={this.props.sendMessage}>
						<i className="fa fa-paper-plane" aria-hidden="true"></i>
					</button>
				</div>
			</div>
		);
	}
}

export default MessageInput;
