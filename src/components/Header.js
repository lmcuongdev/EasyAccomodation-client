import React from "react";
import "../css/Header.css";

import { Link } from "react-router-dom";
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
						<button
							type="button"
							className="btn btn-b-n navbar-toggle-box-collapse d-none d-md-block"
						>
							<span className="fa fa-search" aria-hidden="true"></span>
						</button>
					</div>
				</nav>
			</div>
		);
	}
}

export default Header;
