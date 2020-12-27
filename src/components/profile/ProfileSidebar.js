import React, { Component } from "react";
import Image from "../../images/test.jpg";

import { Link } from "react-router-dom";

export class ProfileSidebar extends Component {
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
								className={this.props.page !== "aboutMe" || "bg-primary"}
								onClick={() => {
									this.props.changePage("aboutMe");
								}}
							>
								<Link to="/profile/aboutMe">About Me</Link>
							</li>
							{this.props.role === "renter" ? (
								<li
									className={this.props.page !== "favorite" || "bg-primary"}
									onClick={() => {
										this.props.changePage("favorite");
									}}
								>
									<Link to="/profile/favorite">Favorite Accomod</Link>
								</li>
							) : (
								<li
									className={this.props.page !== "history" || "bg-primary"}
									onClick={() => {
										this.props.changePage("history");
									}}
								>
									<Link to="/profile/history">History</Link>
								</li>
							)}
							<li
								className={this.props.page !== "changePassword" || "bg-primary"}
								onClick={() => {
									this.props.changePage("changePassword");
								}}
							>
								<Link to="/profile/changePassword">Change Password</Link>
							</li>
						</ul>
					</nav>
				</div>
			</div>
		);
	}
}

export default ProfileSidebar;
