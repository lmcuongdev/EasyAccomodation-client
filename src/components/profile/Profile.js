import React, { Component } from "react";
import axios from "axios";
import AuthContext from "../../contexts/AuthContext";

import "./Profile.css";
import ProfileSidebar from "./ProfileSidebar";
import Property from "../accomodation/Property";
import UserInfo from "./UserInfo";
import ChangePassword from "./ChangePassword";

export class Profile extends Component {
	static contextType = AuthContext;

	constructor(props) {
		super(props);
		this.data = {};
		if (localStorage.userData) {
			this.data = JSON.parse(localStorage.userData);
		}

		this.state = {
			page: this.props.match.params.page.toLowerCase(),
			name: null,
			email: null,
			role: null,
			phone: null,
			address: null,
		};
		this.changePage = this.changePage.bind(this);
	}

	componentDidMount() {
		console.log("profile mount");
		axios
			.get(
				`${process.env.REACT_APP_API_URL}/users/${this.context?.state?.userId}`
			)
			.then((res) => {
				let user = res.data.user;
				this.setState({
					name: user.name,
					email: user.email,
					role: user.role,
					address: user.owner_info?.address,
					phone: user.owner_info?.phone,
				});
			});
	}

	changePage(name) {
		this.setState((prev) => ({ ...prev, page: name.toLowerCase() }));
	}

	handleChange = (event) => {
		this.setState({ [event.target.name]: event.target.value });
	};

	componentDidUpdate(prevProps, prevState) {
		// console.log(prevProps, prevState);
		if (
			this.state.page.toLowerCase() !==
			this.props.match.params.page.toLowerCase()
		) {
			this.setState({ page: this.props.match.params.page.toLowerCase() });
		}
	}

	showPage() {
		switch (this.props.match.params.page.toLowerCase()) {
			case "aboutme":
				return (
					<UserInfo
						role={this.state.role}
						name={this.state.name}
						email={this.state.email}
						address={this.state.address}
						phone={this.state.phone}
						handleChange={this.handleChange}
					/>
				);
			case "changepassword":
				return <ChangePassword />;
			case "my-accommod":
				return <Property orientation="horizontal" myAccomod={true} />;
			case "favorite":
				return <Property orientation="horizontal" />;
			default:
				this.context.redirectTo("/profile");
				break;
		}
	}

	render() {
		if (!this.context.state.isLoggedIn) this.context.redirectTo("/");
		return (
			<div id="page-wraper" class="container">
				<div class="col-md-12">
					<div class="row">
						<div class="col-md-3">
							<ProfileSidebar
								page={this.state.page}
								name={this.state.name}
								role={this.state.role}
							/>
						</div>
						<div class="col-md-9">{this.showPage()}</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Profile;
