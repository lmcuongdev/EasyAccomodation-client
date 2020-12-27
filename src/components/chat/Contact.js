import React, { Component } from "react";
import ContactItem from "./ContactItem";

export class Contact extends Component {
	render() {
		return (
			<div id="contacts">
				<ul>
					{this.props.mes_history.map((item, index) => {
						return (
							<ContactItem
								user={item.user}
								content={item.content}
								type={item.type}
								setReceiver={this.props.setReceiver}
								key={index}
							/>
						);
					})}
				</ul>
			</div>
		);
	}
}

export default Contact;
