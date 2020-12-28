import React from "react";
import "../css/Header.css";

import AuthContext from "../contexts/AuthContext";

import { Link, Redirect } from "react-router-dom";
import UserInfo from "./profile/UserInfo";
//import UserPopup from "./UserPopup";

class Header extends React.Component {
	render() {
		return (
			<div>
				<nav className="navbar navbar-default navbar-trans navbar-expand-lg fixed-top">
					<div className="container">
						<Link className="navbar-brand text-brand" to="/">
							Easy<span className="color-b">Accomod</span>
						</Link>
						<div
							className="navbar-collapse collapse justify-content-center"
							id="navbarDefault"
						>
							<ul className="navbar-nav">
								<li className="nav-item">
									<Link className="nav-link active" to="/">
										Home
									</Link>
								</li>
								<li className="nav-item">
									<Link className="nav-link" to="/chat">
										Chat
									</Link>
								</li>
								<li className="nav-item notification">
									<span className="nav-link" onClick={this.props.openPopup}>
										<span>Notification</span>
										<span className="badge">3</span>
									</span>
								</li>
							</ul>
						</div>
						<AuthContext.Consumer>
							{({ logIn, logOut, state, redirectTo }) => (
								<>
									{state.isLoggedIn ? (
										<>
											<button
												type="button"
												className="btn rounded btn-b-n navbar-toggle-box-collapse d-none d-md-block"
												onClick={() => redirectTo("profile/history")}
											>
												{/* <span className="fa fa-search" aria-hidden="true"></span> */}
												Profile
											</button>
											<button
												className="btn btn-secondary"
												onClick={() => logOut()}
											>
												Logout
											</button>
										</>
									) : (
										<>
											<button
												className="btn btn-primary"
												onClick={() => redirectTo("/sign-in")}
											>
												Login
											</button>
											<button
												className="btn btn-light"
												onClick={() => redirectTo("/sign-up")}
											>
												Register
											</button>
										</>
									)}
								</>
							)}
						</AuthContext.Consumer>
					</div>
				</nav>
			</div>
		);
	}
}

export default Header;
