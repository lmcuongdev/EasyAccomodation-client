import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import AdminApp from "./AdminApp";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";

import "./admin/assets/plugins/nucleo/css/nucleo.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./admin/assets/scss/argon-dashboard-react.scss";

import AdminLayout from "./admin/layouts/Admin";
import AuthLayout from "./admin/layouts/Auth";

import { BrowserRouter as Router } from "react-router-dom";

import AuthProvider from "./contexts/AuthProvider";
import AuthContext from "./contexts/AuthContext";

ReactDOM.render(
	<Router>
		<AuthProvider>
			<AuthContext.Consumer>
				{(context) =>
					context.state.role !== "admin" ? (
						<App />
					) : (
						<>
							<AdminApp />
						</>
					)
				}
			</AuthContext.Consumer>
		</AuthProvider>
	</Router>,
	document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
