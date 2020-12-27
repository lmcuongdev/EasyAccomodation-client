import React from "react";

import "./css/SignIn.css";

import { Link } from "react-router-dom";

class SignIn extends React.Component {
	constructor() {
		super();

		this.state = {
			email: "",
			password: "",
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event) {
		this.setState({ [event.target.name]: event.target.value });
	}

	handleSubmit(event) {
		event.preventDefault();
		console.log(this.state.email, this.state.password);
	}

	render() {
		return (
			<div id="signin">
				<div className="form-title">Sign in</div>
				<form method="POST" onSubmit={this.handleSubmit}>
					<div className="input-field">
						<input
							type="email"
							id="email"
							name="email"
							value={this.state.email}
							onChange={this.handleChange}
							className={this.state.email ? "not-empty" : ""}
						/>
						<label htmlFor="email">Email</label>
					</div>
					<div className="input-field">
						<input
							type="password"
							id="password"
							name="password"
							value={this.state.password}
							onChange={this.handleChange}
							className={this.state.password ? "not-empty" : ""}
						/>
						<label htmlFor="password">Password</label>
					</div>
					<Link to="/" className="forgot-pw">
						Forgot Password ?
					</Link>
					<button className="login" type="submit">
						Login
					</button>
				</form>
			</div>
		);
	}
}

export default SignIn;
