import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import { Nav, NavDropdown } from "react-bootstrap";
import AuthContext from "../../contexts/AuthContext";

export class NavbarRB extends Component {
	render() {
		return (
			<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
				<div className="container">
					<Navbar.Brand href="/">
						Easy<span className="color-b">Accomod</span>
					</Navbar.Brand>
					<Navbar.Toggle aria-controls="responsive-navbar-nav" />
					<Navbar.Collapse id="responsive-navbar-nav" style={{ top: "60px" }}>
						<Nav className="mr-auto finish">
							<Nav.Link href="/">Home</Nav.Link>
							<Nav.Link href="/chat">Chat</Nav.Link>
							<Nav className="notification">
								<span className="nav-link" onClick={this.props.openPopup}>
									<span>Notification</span>
									<span className="badge">3</span>
								</span>
							</Nav>
							{/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
								<NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
								<NavDropdown.Item href="#action/3.2">
									Another action
								</NavDropdown.Item>
								<NavDropdown.Item href="#action/3.3">
									Something
								</NavDropdown.Item>
								<NavDropdown.Divider />
								<NavDropdown.Item href="#action/3.4">
									Separated link
								</NavDropdown.Item>
							</NavDropdown> */}
						</Nav>
						<Nav>
							<AuthContext.Consumer>
								{({ logIn, logOut, state, redirectTo }) => (
									<>
										{state.isLoggedIn ? (
											<>
												<button
													style={{ marginRight: 0 }}
													className="btn btn-success"
													onClick={() => redirectTo("/profile/aboutme")}
												>
													{/* <span className="fa fa-search" aria-hidden="true"></span> */}
													Profile
												</button>
												<button
													style={{ marginLeft: 0 }}
													className="btn btn-secondary"
													onClick={() => logOut()}
												>
													Logout
												</button>
											</>
										) : (
											<>
												<button
													style={{ marginRight: 0 }}
													className="btn btn-primary"
													onClick={() => redirectTo("/sign-in")}
												>
													Login
												</button>
												<button
													style={{ marginLeft: 0 }}
													className="btn btn-light btn-block"
													onClick={() => redirectTo("/sign-up")}
												>
													Register
												</button>
											</>
										)}
									</>
								)}
							</AuthContext.Consumer>
						</Nav>
					</Navbar.Collapse>
				</div>
			</Navbar>
		);
	}
}

export default NavbarRB;
