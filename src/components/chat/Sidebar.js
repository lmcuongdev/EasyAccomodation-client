import React, { Component } from "react";
import Contact from "./Contact";
import Profile from "./Profile";
import Search from "./Search";

export class Sidebar extends Component {
	render() {
		return (
			<div id="sidepanel">
				<Profile />
				<Search />
				<Contact />
			</div>
		);
	}
}

export default Sidebar;
