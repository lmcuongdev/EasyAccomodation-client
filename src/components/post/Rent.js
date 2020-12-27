import React, { Component } from "react";
import Rent_Accomod from "./Rent_Accomod";
import Rent_Address from "./Rent_Address";
import Rent_Contact from "./Rent_Contact";

export class Rent extends Component {
	constructor(props) {
		super(props);
		this.state = {
			page: "address",
			city: "",
			district: "",
			sub_district: "",
			street: "",
		};

		this.nextPage = this.nextPage.bind(this);
		this.prevPage = this.prevPage.bind(this);
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
				return <Rent_Contact prevPage={this.prevPage} />;
		}
	}

	render() {
		return <div>{this.selectPage()}</div>;
	}
}

export default Rent;
