import React, { Component } from "react";
import Image from "../../images/test.jpg";

import { withRouter } from "react-router-dom";

export class ProfileSidebar extends Component {
	handleClick = (page) => {
		this.props.history.push(`/${page}`);
	};

	render() {
		return (
			<div id="menu" class="menu">
				<div class="container">
					<div class="image">
						<a href="#">
							<img src={Image} alt="" />
						</a>
					</div>
					<div class="author-content">
						<h4>{this.props.name}</h4>
						<span>{this.props.role}</span>
					</div>
					<nav class="main-nav" role="navigation">
						<ul class="main-menu">
							<li
								className={this.props.page !== "aboutme" || "bg-primary"}
								onClick={() => {
									this.handleClick("profile/aboutme");
								}}
							>
								<span>About Me</span>
							</li>
							<li
								className={this.props.page !== "favorite" || "bg-primary"}
								onClick={() => {
									this.handleClick("profile/favorite");
								}}
							>
								<span>Favorite Accomod</span>
							</li>
							{this.props.role === "owner" ? (
								<>
									<li
										className={this.props.page !== "owner" || "bg-primary"}
										onClick={() => {
											this.handleClick("profile/owner");
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
							) : null}
							<li
								className={this.props.page !== "changePassword" || "bg-primary"}
								onClick={() => {
									this.handleClick("profile/changePassword");
								}}
							>
								<span>Change Password</span>
							</li>
						</ul>
					</nav>
				</div>
			</div>
		);
	}
}

export default withRouter(ProfileSidebar);
