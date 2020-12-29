import React from "react";

import Search from "./Search";
import Property from "../accomodation/Property";
import AboutUs from "./AboutUs";

import "./css/Home.css";

class Home extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			condition: {},
		};
	}

	setCondition = (search_text, type, size, minValue, maxValue) => {
		this.setState(
			(prevState) => ({
				condition: {
					...prevState.condition,
					search_text: search_text,
					type: type,
					size: size,
					minValue: minValue,
					maxValue: maxValue,
				},
			}),
			() => {
				console.log(this.state.condition);
			}
		);
	};

	render() {
		return (
			<div className="container">
				<Search setCondition={this.setCondition} />
				<Property
					orientation="vertical"
					all={true}
					condition={this.state.condition}
				/>
				{/* <AboutUs /> */}
			</div>
		);
	}
}

export default Home;
