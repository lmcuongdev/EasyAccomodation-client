import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import AdminLayout from "./admin/layouts/Admin";
import AuthLayout from "./admin/layouts/Auth";

import AuthContext from "./contexts/AuthContext";

class AdminApp extends Component {
	static contextType = AuthContext;

	render() {
		return (
			<Switch>
				<Route path="/admin" render={(props) => <AdminLayout {...props} />} />
				<Route path="/auth" render={(props) => <AuthLayout {...props} />} />
				<Redirect from="/" to="/admin/index" />

				{/* <Route component={NotFound} /> */}
			</Switch>
		);
	}
}

export default AdminApp;
