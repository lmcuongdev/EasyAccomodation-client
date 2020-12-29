import React, { Component } from "react";
import axios from "axios";
import AuthContext from "../../contexts/AuthContext";
export class ChangePassword extends Component {
	static contextType = AuthContext;

	constructor(props) {
		super(props);
		this.state = {
			old_password: "",
			password: "",
			repeat_password: "",
			alert: null,
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event) {
		this.setState({ [event.target.name]: event.target.value });
	}

	handleSubmit(event) {
		event.preventDefault();
		this.setState({ error: null, message: null });

		axios
			.put(
				`${process.env.REACT_APP_API_URL}/users/${this.context.state.userId}/password`,
				{
					...this.state,
				},
				{ headers: { Authorization: `Bearer ${this.context.state.token}` } }
			)
			.then((resp) => {
				this.setState({
					alert: { message: resp.data.message, type: "success" },
				});
			})
			.catch((err) => {
				this.setState({
					alert: { message: err.response?.data.message, type: "danger" },
				});
			});
	}

	render() {
		return (
			<div class="wrapper wrapper--w790">
				{this.state.alert && (
					<div className={`alert alert-${this.state.alert.type}`}>
						{this.state.alert.message}
					</div>
				)}
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
										<input
											value={this.state.old_password}
											onChange={this.handleChange}
											class="input--style-5"
											type="password"
											name="old_password"
										/>
									</div>
								</div>
							</div>
							<div class="form-row">
								<div class="name">New password</div>
								<div class="value">
									<div class="input-group">
										<input
											value={this.state.password}
											onChange={this.handleChange}
											class="input--style-5"
											type="password"
											name="password"
										/>
									</div>
								</div>
							</div>
							<div class="form-row">
								<div class="name">New password again</div>
								<div class="value">
									<div class="input-group">
										<input
											value={this.state.repeat_password}
											onChange={this.handleChange}
											class="input--style-5"
											type="password"
											name="repeat_password"
										/>
									</div>
								</div>
							</div>
							<div className="finish">
								<button
									className="btn btn--radius-2 btn--red"
									onClick={this.handleSubmit}
								>
									Update
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		);
	}
}

export default ChangePassword;
