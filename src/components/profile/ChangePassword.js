import React, { Component } from "react";
import { Link } from "react-router-dom";

export class ChangePassword extends Component {
	render() {
		return (
			<div class="wrapper wrapper--w790">
				<div class="card card-5">
					<div class="card-heading">
						<h2 class="title">Update Password</h2>
					</div>
					<div class="card-body">
						<form method="POST">
							<div class="form-row">
								<div class="name">Old password</div>
								<div class="value">
									<div class="input-group">
										<input class="input--style-5" type="text" name="name" />
									</div>
								</div>
							</div>
							<div class="form-row">
								<div class="name">New password</div>
								<div class="value">
									<div class="input-group">
										<input class="input--style-5" type="email" name="email" />
									</div>
								</div>
							</div>
							<div class="form-row">
								<div class="name">New password again</div>
								<div class="value">
									<div class="input-group">
										<input class="input--style-5" type="email" name="email" />
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

export default ChangePassword;
