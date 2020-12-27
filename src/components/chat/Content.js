import React, { Component } from "react";
import ContactProfile from "./ContactProfile";
import Message from "./Message";
import MessageInput from "./MessageInput";

import io from "socket.io-client";
import axios from "axios";

let socket;

export class Content extends Component {
	constructor(props) {
		super(props);
		this.state = {
			roomId: null,
			message: "",
			messages: [],
			ENDPOINT: "http://localhost:8080/",
		};
	}

	joinRoom = () => {
		this.setState({ messages: [] });
		socket.emit(
			"join",
			{ senderId: this.props.senderId, receiverId: this.props.receiverId },
			(error) => {
				if (error) {
					alert(error);
				}
			}
		);
	};

	componentDidMount() {
		socket = io(this.state.ENDPOINT);

		this.joinRoom();

		socket.on("roomId", (data) => {
			this.setState({ roomId: data.roomId }, () => {
				axios
					.get(`http://localhost:8080/messages/room/${this.state.roomId}`)
					.then((res) => {
						let messages = [];
						for (let item of res.data.messages) {
							if (item.userId === this.props.senderId) {
								messages.push({ type: "sent", content: item.content });
							} else {
								messages.push({ type: "replies", content: item.content });
							}
						}
						this.setState({ messages });
					});
			});
		});

		socket.on("message", (message) => {
			let getMessage = {
				content: message.text,
				type: message.type,
			};

			this.props.setMessageHistory({
				user: this.props.receiverId,
				type: "replies",
				content: message.text,
			});

			this.setState((prevState) => {
				return {
					messages: [...prevState.messages, getMessage],
				};
			});
		});

		return () => {
			socket.emit("disconnect");
			socket.off();
		};
	}

	componentDidUpdate(prevProps) {
		if (prevProps.receiverId !== this.props.receiverId) {
			this.joinRoom();
		}
	}

	handleChange = (event) => {
		this.setState({ message: event.target.value });
	};

	sendMessage = () => {
		if (this.state.message && this.state.roomId) {
			socket.emit(
				"sendMessage",
				{
					message: this.state.message,
					roomId: this.state.roomId,
					senderId: this.props.senderId,
				},
				async () => {
					let getMessage = {
						content: this.state.message,
						type: "sent",
					};
					this.props.setMessageHistory({
						user: this.props.receiverId,
						type: "sent",
						content: this.state.message,
					});
					this.setState((prevState) => {
						return {
							message: "",
							messages: [...prevState.messages, getMessage],
						};
					});
				}
			);
		}
	};

	render() {
		return (
			<div className="content">
				<ContactProfile receiverName={this.props.receiverId} />
				<Message messages={this.state.messages} />
				<MessageInput
					sendMessage={this.sendMessage}
					handleChange={this.handleChange}
					message={this.state.message}
				/>
			</div>
		);
	}
}

export default Content;
