import React, { Component } from "react";
import Image from "../../images/test.jpg";

import { withRouter } from "react-router-dom";
import AuthContext from "../../contexts/AuthContext";
import axios from "axios";
export class ProfileSidebar extends Component {
	static contextType = AuthContext;

	handleClick = (page) => {
		this.props.history.push(`/${page}`);
	};

	componentDidMount() {
		console.log("profilesidebar");
	}

	render() {
		return (
			<div id="menu" class="menu rounded">
				<div class="">
					<div class="image">
						<a href="#">
							<img src={Image} alt="" />
						</a>
					</div>
					<div class="author-content">
						<h4 className="font-weight-bold text-uppercase">
							{this.props.name}
						</h4>
						<span className="">{this.props.role}</span>
					</div>
					<nav class="main-nav" role="navigation">
						<ul class="main-menu">
							<li
								className={this.props.page !== "aboutme" || "bg-primary"}
								onClick={() => {
									this.handleClick("profile/aboutme");
								}}
							>
								<span>Info</span>
							</li>
							{/* <li
								className={this.props.page !== "favorite" || "bg-primary"}
								onClick={() => {
									this.handleClick("profile/favorite");
								}}
							>
								<span>Favorite Accomod</span>
							</li> */}
							<li
								className={this.props.page !== "changepassword" || "bg-primary"}
								onClick={() => {
									this.handleClick("profile/changepassword");
								}}
							>
								<span>Change Password</span>
							</li>
							{this.props.role === "owner" && (
								<>
									<li
										className={
											this.props.page !== "my-accommod" || "bg-primary"
										}
										onClick={() => {
											this.handleClick("profile/my-accommod");
										}}
									>
										<span>My Accomod</span>
									</li>
									<li
										className={this.props.page !== "rent" || "bg-primary"}
										onClick={() => {
											this.handleClick("rent");
										}}
									>
										<span>New post</span>
									</li>
								</>
							)}
						</ul>
					</nav>
				</div>
			</div>
		);
	}
}

export default withRouter(ProfileSidebar);
