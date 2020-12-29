import React from "react";
import AuthContext from "./AuthContext";

import { withRouter } from "react-router-dom";

class AuthProvider extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isLoggedIn: false,
			token: null,
			userId: null,
			role: null,
			expiration: null,
		};

		this.logoutTimer = null;

		this.logIn = this.logIn.bind(this);
		this.logOut = this.logOut.bind(this);
		this.componentWillMount = this.componentWillMount.bind(this);
		// this.componentDidMount = this.componentDidMount.bind(this);
		this.redirectTo = this.redirectTo.bind(this);
	}

	componentWillMount() {
		console.log("auth will mount");
		const data = JSON.parse(localStorage.getItem("userData") || "{}");

		if (data && data.token && new Date(data.expiration) > new Date()) {
			this.logIn(data, new Date(data.expiration));
			// console.log(this.state);
		} else {
			this.logOut();
		}
	}

	componentDidMount() {
		console.log("auth mount");
		const data = JSON.parse(localStorage.getItem("userData") || "{}");

		if (data && data.token && new Date(data.expiration) > new Date()) {
			this.logIn(data, new Date(data.expiration));
			// console.log(this.state);
		} else {
			this.logOut();
		}
	}

	componentDidUpdate() {
		console.log("auth update");
		if (this.state.token && this.state.expiration) {
			const remainingTime =
				this.state.expiration.getTime() - new Date().getTime();
			this.logoutTimer = setTimeout(this.logOut, remainingTime);
		} else {
			clearTimeout(this.logoutTimer);
		}
	}

	logIn({ userId, token, role }, expirationDate) {
		const tokenExpirationDate =
			expirationDate || new Date(new Date().getTime() + 1000 * 60 * 60);

		// save token and data to localStorage
		localStorage.setItem(
			"userData",
			JSON.stringify({
				userId: userId,
				token: token,
				role: role,
				expiration: tokenExpirationDate.toISOString(),
			})
		);

		// update state
		this.setState({
			isLoggedIn: true,
			userId,
			token,
			role,
			expiration: tokenExpirationDate,
		});
	}

	logOut() {
		localStorage.removeItem("userData");
		this.setState({
			isLoggedIn: false,
			userId: null,
			token: null,
			role: null,
			expiration: null,
		});
	}

	redirectTo(path) {
		this.props.history.push(path);
	}

	render() {
		return (
			<AuthContext.Provider
				value={{
					state: this.state,
					logIn: this.logIn,
					logOut: this.logOut,
					redirectTo: this.redirectTo,
				}}
			>
				{this.props.children}
			</AuthContext.Provider>
		);
	}
}

export default withRouter(AuthProvider);
