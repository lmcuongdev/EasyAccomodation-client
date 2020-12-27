import React, { Component } from "react";
import axios from "axios";

import "./Profile.css";
import ProfileSidebar from "./ProfileSidebar";
import Property from "../accomodation/Property";
import UserInfo from "./UserInfo";
import ChangePassword from "./ChangePassword";
import EditAccomod from "./EditAccomod";

export class Profile extends Component {
	constructor(props) {
		super(props);
		this.state = {
			page: "aboutMe",
			name: null,
			email: null,
			role: null,
			phone: null,
			address: null,
		};
		this.changePage = this.changePage.bind(this);
	}

	componentDidMount() {
		axios
			.get(
				"https://easy-accommodation-api.herokuapp.com/api/users/5fdf13079ef978eafb549294"
			)
			.then((res) => {
				let user = res.data.user;
				this.setState({
					name: user.name,
					email: user.email,
					role: user.role,
					address: user.owner_info.address,
					phone: user.owner_info.phone,
				});
			});
	}

	changePage(name) {
		this.setState((prev) => ({ ...prev, page: name }));
	}

	handleChange = (event) => {
		this.setState({ [event.target.name]: event.target.value });
	};

	showPage() {
		switch (this.props.page) {
			case "aboutMe":
				return (
					<UserInfo
						name={this.state.name}
						email={this.state.email}
						address={this.state.address}
						phone={this.state.phone}
						handleChange={this.handleChange}
					/>
				);
			case "changePassword":
				return <ChangePassword />;
			case "history":
				return <Property orientation="horizontal" />;
			case "favorite":
				return <Property orientation="horizontal" />;
			case "edit":
				return <EditAccomod />;
			default:
				break;
		}
	}

	render() {
		return (
			<div id="page-wraper" class="container">
				<div class="col-md-12">
					<div class="row">
						<div class="col-md-3">
							<ProfileSidebar
								page={this.state.page}
								changePage={this.changePage}
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
