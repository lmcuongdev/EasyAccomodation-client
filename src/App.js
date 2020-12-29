import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";

import React, { Component } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./components/home/Home";
import PropertyDetail from "./components/details/PropertyDetail";
import SignIn from "./components/auth/SignIn";
import SignUp from "./components/auth/SignUp";
import Popup from "./components/popup/Popup";
import Profile from "./components/profile/Profile";
import NotFound from "./components/NotFound";
import Rent from "./components/post/Rent";
import Chat from "./components/chat/Chat";

import "./admin/assets/plugins/nucleo/css/nucleo.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./admin/assets/scss/argon-dashboard-react.scss";

import AdminLayout from "./admin/layouts/Admin";
import AuthLayout from "./admin/layouts/Auth";

import AuthProvider from "./contexts/AuthProvider";
class App extends Component {
	constructor() {
		super();
		this.state = {
			popupState: "close",
			adminPage: true,
		};

		this.openPopup = this.openPopup.bind(this);
		this.closePopup = this.closePopup.bind(this);
	}

	openPopup() {
		this.setState(() => {
			return {
				popupState: "open",
			};
		});
	}

	closePopup() {
		this.setState(() => {
			return {
				popupState: "close",
			};
		});
	}

	render() {
		return (
			<Router>
				<AuthProvider>
					{this.state.adminPage ? (
						<Switch>
							<Route
								path="/admin"
								render={(props) => <AdminLayout {...props} />}
							/>
							<Route
								path="/auth"
								render={(props) => <AuthLayout {...props} />}
							/>
							{/* <Redirect from="/" to="/admin/index" /> */}
						</Switch>
					) : (
						<>
							<Header openPopup={this.openPopup} />
							<Popup
								popupState={this.state.popupState}
								handleClose={this.closePopup}
							/>
							<div className="container" id="container-content">
								<Switch>
									<Route path="/" exact component={Home} />
									<Route path="/sign-in" component={SignIn} exact />
									<Route path="/sign-up" component={SignUp} />
									<Route
										path="/property-detail/:id"
										component={PropertyDetail}
									/>
									<Route path="/profile/:page" component={Profile} exact />
									<Route path="/rent" component={Rent} />
									<Route exact path="/chat/:id" component={Chat} />
									<Route path="/chat" component={Chat} />
									<Route component={NotFound} />
								</Switch>
							</div>
							<Footer />{" "}
						</>
					)}
				</AuthProvider>
			</Router>
		);
	}
}

export default App;
