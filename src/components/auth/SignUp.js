import axios from "axios";
import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import AuthContext from "../../contexts/AuthContext";

import "./css/SignUp.css";

export class SignUp extends Component {
	static contextType = AuthContext;

	constructor() {
		super();
		this.state = {
			name: "",
			email: "",
			password: "",
			password_confirmation: "",
			phone: "",
			address: "",
			role: "renter",
			citizen_id: "",
			error: null,
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event) {
		this.setState({ [event.target.name]: event.target.value });
	}

	handleSubmit(event) {
		event.preventDefault();
		this.setState({ error: null });
		axios
			.post(`${process.env.REACT_APP_API_URL}/users/signup`, {
				...this.state,
			})
			.then((resp) => {
				this.context.logIn(resp.data);
				this.context.redirectTo("/");
			})
			.catch((err) => {
				this.setState({ error: err.response.data.message });
			});
	}

	render() {
		return !this.context.isLoggedIn ? (
			<div className="page-wrapper p-t-45 p-b-50">
				<div className="wrapper wrapper--w790">
					{this.state.error && (
						<div className="alert alert-danger">{this.state.error}</div>
					)}
					<div className="card card-5">
						<div className="card-heading bg-dark">
							<h2 className="title">Event Registration Form</h2>
						</div>
						<div className="card-body">
							<form method="POST" onSubmit={this.handleSubmit}>
								<div className="form-row">
									<div className="name">Name</div>
									<div className="value">
										<div className="input-group">
											<input
												className="input--style-5"
												type="text"
												name="name"
												value={this.state.name}
												onChange={this.handleChange}
											/>
										</div>
									</div>
								</div>
								<div className="form-row">
									<div className="name">Email</div>
									<div className="value">
										<div className="input-group">
											<input
												className="input--style-5"
												type="email"
												name="email"
												value={this.state.email}
												onChange={this.handleChange}
											/>
										</div>
									</div>
								</div>
								<div className="form-row">
									<div className="name">Password</div>
									<div className="value">
										<div className="input-group">
											<input
												className="input--style-5"
												type="password"
												name="password"
												value={this.state.password}
												onChange={this.handleChange}
											/>
										</div>
									</div>
								</div>
								<div className="form-row">
									<div className="name">Password again</div>
									<div className="value">
										<div className="input-group">
											<input
												className={`input--style-5 ${
													this.state.password !==
														this.state.password_confirmation &&
													"is-invalid border border-danger"
												}`}
												type="password"
												name="password_confirmation"
												value={this.state.password_confirmation}
												onChange={this.handleChange}
											/>
											<div className="invalid-feedback">Password not match</div>
										</div>
									</div>
								</div>
								<div className="form-row p-t-20">
									<label className="label label--block">Who are you ?</label>
									<div className="p-t-15">
										<label className="radio-container m-r-55">
											Renter
											<input
												type="radio"
												name="role"
												checked={this.state.role === "renter" ? true : false}
												value="renter"
												onChange={this.handleChange}
											/>
											<span className="checkmark"></span>
										</label>
										<label className="radio-container">
											Owner
											<input
												type="radio"
												name="role"
												value="owner"
												onChange={this.handleChange}
											/>
											<span className="checkmark"></span>
										</label>
									</div>
								</div>
								{this.state.role === "owner" ? (
									<>
										<div className="form-row">
											<div className="name">Phone</div>
											<div className="value">
												<div className="input-group">
													<input
														className="input--style-5"
														type="text"
														name="phone"
														value={this.state.phone}
														onChange={this.handleChange}
													/>
												</div>
											</div>
										</div>
										<div className="form-row">
											<div className="name">Address</div>
											<div className="value">
												<div className="input-group">
													<input
														className="input--style-5"
														type="text"
														name="address"
														value={this.state.address}
														onChange={this.handleChange}
													/>
												</div>
											</div>
										</div>
										<div className="form-row">
											<div className="name">Citizen Id</div>
											<div className="value">
												<div className="input-group">
													<input
														className="input--style-5"
														type="text"
														name="citizen_id"
														value={this.state.citizen_id}
														onChange={this.handleChange}
													/>
												</div>
											</div>
										</div>
									</>
								) : null}
								<div className="finish">
									<button className="btn btn--radius-2 btn--red" type="submit">
										Register
									</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		) : (
			<Redirect to="/" />
		);
	}
}

export default SignUp;
