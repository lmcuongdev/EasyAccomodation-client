import axios from "axios";
import React from "react";
import AuthContext from "../../contexts/AuthContext";

import "./css/SignUp.css";
class SignIn extends React.Component {
	static contextType = AuthContext;

	constructor() {
		super();

		this.state = {
			email: "",
			password: "",
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
			.post(`${process.env.REACT_APP_API_URL}/users/login`, {
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
		return (
			<>
				<div className="page-wrapper p-t-45 p-b-50">
					<div className="wrapper wrapper--w790">
						{this.state.error && (
							<div className="alert alert-danger">{this.state.error}</div>
						)}
						<div className="card card-5">
							<div className="card-heading bg-dark rounded-top">
								<h2 className="title">Sign In</h2>
							</div>
							<div className="card-body">
								<form method="POST" onSubmit={this.handleSubmit}>
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
									<div>
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
										<button
											className="btn btn--radius-2 btn--red d-block mx-auto"
											type="submit"
										>
											Sign me in
										</button>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</>
		);
	}
}

export default SignIn;
