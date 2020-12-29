import React from "react";

import Search from "./Search";
import Property from "../accomodation/Property";
import AboutUs from "./AboutUs";

import "./css/Home.css";

class Home extends React.Component {
	render() {
		return (
			<div className="container">
				<Search />
				<Property orientation="vertical" all={true} />
				<AboutUs />
			</div>
		);
	}
}

export default Home;
