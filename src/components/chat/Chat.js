import React, { Component } from "react";
import axios from "axios";
import "./chat.css";

import Content from "./Content";
import Contact from "./Contact";
import Profile from "./Profile";
import Search from "./Search";

export class Chat extends Component {
	constructor(props) {
		super(props);
		this.data = {};

		if (localStorage.userData) {
			this.data = JSON.parse(localStorage.userData);
		}
		this.state = {
			mes_history: [],
			receiverId: this.props.match.params.id,
			name: "abc",
			senderId: this.data.userId,
		};
	}

	componentDidMount() {
		axios
			.get(`http://localhost:8080/messages/user/${this.state.senderId}`)
			.then((res) => {
				let mes_history = [];
				for (let item of res.data.user) {
					if (item.firstMessage) {
						if (item.participants[0] === this.state.senderId) {
							mes_history.push({
								user: item.participants[1],
								content: item.firstMessage.content,
							});
						} else {
							mes_history.push({
								user: item.participants[0],
								content: item.firstMessage.content,
							});
						}
					}
				}
				this.setState({ mes_history });
			});

		axios
			.get(
				`${process.env.REACT_APP_API_URL}/users/${this.props.match.params.id}`
			)
			.then((res) => {
				this.setState({ name: res.data.user.name });
			});
	}

	componentDidUpdate() {
		if (this.state.receiverId !== this.props.match.params.id) {
			this.setState({ receiverId: this.props.match.params.id });
		}
	}

	setMessageHistory = (contact) => {
		this.setState((prevState) => {
			let mes_history = [...prevState.mes_history];
			let newHistory = mes_history.filter((el) => {
				return el.user != this.state.receiverId;
			});
			newHistory.unshift(contact);
			return { mes_history: newHistory };
		});
	};

	render() {
		return (
			<div id="frame">
				<div id="sidepanel">
					<Profile senderName={this.state.senderId} />
					<Search />
					<Contact
						mes_history={this.state.mes_history}
						setReceiver={this.setReceiver}
					/>
				</div>
				{this.state.receiverId ? (
					<Content
						setMessageHistory={this.setMessageHistory}
						receiverId={this.state.receiverId}
						senderId={this.state.senderId}
						name={this.state.name}
					/>
				) : null}
			</div>
		);
	}
}

export default Chat;
