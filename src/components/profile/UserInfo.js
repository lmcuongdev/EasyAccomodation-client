import React, { Component } from "react";

import { Link } from "react-router-dom";

export class UserInfo extends Component {
	render() {
		return (
			<div class="wrapper wrapper--w790">
				<div class="card card-5">
					<div class="card-heading">
						<h2 class="title">User information</h2>
					</div>
					<div class="card-body">
						<form method="POST">
							<div class="form-row">
								<div class="name">Name</div>
								<div class="value">
									<div class="input-group">
										<input
											class="input--style-5"
											type="text"
											name="name"
											value={this.props.name}
											onChange={this.props.handleChange}
										/>
									</div>
								</div>
							</div>
							<div class="form-row">
								<div class="name">Email</div>
								<div class="value">
									<div class="input-group">
										<input
											class="input--style-5"
											type="email"
											name="email"
											value={this.props.email}
											onChange={this.props.handleChange}
										/>
									</div>
								</div>
							</div>
							<div class="form-row m-b-55">
								<div class="name">Phone</div>
								<div class="value">
									<div class="input-group">
										<input
											class="input--style-5"
											type="text"
											name="phone"
											value={this.props.phone}
											onChange={this.props.handleChange}
										/>
									</div>
								</div>
							</div>
							<div class="form-row">
								<div class="name">Address</div>
								<div class="value">
									<div class="input-group">
										<input
											class="input--style-5"
											type="text"
											name="address"
											value={this.props.address}
											onChange={this.props.handleChange}
										/>
									</div>
								</div>
							</div>
							<div className="finish">
								<button className="btn btn--radius-2 btn--red">Update</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		);
	}
}

export default UserInfo;
