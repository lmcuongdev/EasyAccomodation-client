import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class ContactItem extends Component {
	handleClick = () => {
		this.props.history.push(`/chat/${this.props.user}`);
	};

	render() {
		return (
			<li className="contact">
				<div className="wrap" onClick={this.handleClick}>
					<img src="http://emilcarlsson.se/assets/louislitt.png" alt="" />
					<div className="meta">
						<p className="name">{this.props.user}</p>
						<p className="preview">
							{this.props.type === "sent" ? "You: " : null}
							{this.props.content}
						</p>
					</div>
				</div>
			</li>
		);
	}
}

export default withRouter(ContactItem);
