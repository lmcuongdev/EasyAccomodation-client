import React from "react";
import axios from "axios";

import "./css/Property.css";

import PropertyItemHorizontal from "./PropertyItemHorizontal";
import PropertyItem from "./PropertyItem";

class Property extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			accomod_list: [],
		};
	}

	orientateItem() {
		switch (this.props.orientation) {
			case "vertical":
				return this.state.accomod_list.map((item) => {
					return (
						<PropertyItem
							_id={item._id}
							title={item.title}
							description={item.description}
							number_of_room={item.number_of_room}
							price={item.price}
							is_available={item.is_available}
							ward={item.ward}
							district={item.district}
							area={item.area}
						/>
					);
				});
			case "horizontal":
				return [
					<PropertyItemHorizontal />,
					<PropertyItemHorizontal />,
					<PropertyItemHorizontal />,
				];
			default:
				break;
		}
	}

	componentDidMount() {
		axios
			.get("https://easy-accommodation-api.herokuapp.com/api/accommodations")
			.then((res) => {
				const data = res.data.accommodations;
				this.setState({ accomod_list: data });
			});
	}

	render() {
		return (
			<section id="aa-latest-property">
				<div className="container">
					<div className="aa-latest-property-area">
						<div className="aa-title">
							<h2>Latest Properties</h2>
							<span></span>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum
								sit ea nobis quae vero voluptatibus.
							</p>
						</div>
						<div className="aa-latest-properties-content">
							<div className="row">{this.orientateItem()}</div>
						</div>
					</div>
				</div>
			</section>
		);
	}
}

export default Property;
