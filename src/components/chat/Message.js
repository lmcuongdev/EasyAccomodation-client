import React, { Component } from "react";
import MessageForm from "./MessageForm";

export class Message extends Component {
	constructor(props) {
		super(props);
		this.mesRef = React.createRef();
	}

	componentDidUpdate() {
		this.scrollToBottom();
	}

	componentDidMount() {
		this.scrollToBottom();
	}

	scrollToBottom = () => {
		this.mesRef.current.scrollTop = this.mesRef.current.scrollHeight;
	};

	render() {
		return (
			<div className="messages" ref={this.mesRef}>
				<ul>
					{this.props.messages.map((item, index) => {
						return (
							<MessageForm
								type={item.type}
								content={item.content}
								key={index}
							/>
						);
					})}
				</ul>
			</div>
		);
	}
}

export default Message;
