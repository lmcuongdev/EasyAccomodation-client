import React, { Component } from "react";
import Rent_Accomod from "./Rent_Accomod";
import Rent_Address from "./Rent_Address";
import Rent_Contact from "./Rent_Contact";

import axios from "axios";

export class Rent extends Component {
	constructor(props) {
		super(props);
		this.data = {};
		if (localStorage.userData) {
			this.data = JSON.parse(localStorage.userData);
		}

		this.state = {
			page: "address",
			city: "",
			district: "",
			sub_district: "",
			street: "",

			name: null,
			phone: null,
			email: null,
		};

		this.nextPage = this.nextPage.bind(this);
		this.prevPage = this.prevPage.bind(this);
	}

	componentDidMount() {
		axios
			.get(
				`https://easy-accommodation-api.herokuapp.com/api/users/${this.data.userId}`
			)
			.then((res) => {
				let user = res.data.user;
				if (!user.owner_info) {
					user.owner_info = {};
				}
				console.log(user);
				this.setState({
					name: user.name,
					email: user.email,
					phone: user.owner_info.phone,
				});
			});
	}

	nextPage() {
		this.setState((prevState) => {
			if (prevState.page === "address") {
				return { page: "accomod" };
			}
			return { page: "contact" };
		});
	}

	prevPage() {
		this.setState((prevState) => {
			if (prevState.page === "accomod") {
				return { page: "address" };
			}
			return { page: "accomod" };
		});
	}

	selectPage() {
		switch (this.state.page) {
			case "address":
				return <Rent_Address nextPage={this.nextPage} />;
			case "accomod":
				return (
					<Rent_Accomod nextPage={this.nextPage} prevPage={this.prevPage} />
				);
			case "contact":
				return (
					<Rent_Contact
						prevPage={this.prevPage}
						name={this.state.name}
						email={this.state.email}
						phone={this.state.phone}
					/>
				);
		}
	}

	render() {
		return <div>{this.selectPage()}</div>;
	}
}

export default Rent;
