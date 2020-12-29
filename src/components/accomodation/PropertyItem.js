import React from "react";
import { Link } from "react-router-dom";

import "./css/PropertyItem.css";
import Image from "../../images/logo512.png";

class PropertyItem extends React.Component {
	showState() {
		if (this.props.is_available === false) {
			return <div className="aa-tag bg-warning">Sold out</div>;
		} else {
			return <div className="aa-tag bg-info">For rent</div>;
		}
	}

	render() {
		return (
			<div className="col-md-4">
				<article className="aa-properties-item">
					<Link to="/" className="aa-properties-item-img">
						<img src={this.props.images[0]} alt="img" />
					</Link>
					{this.showState()}
					<div className="aa-properties-item-content">
						<div className="aa-properties-info">
							<span>{this.props.number_of_room} Rooms</span>
							<span>{this.props.area} m2</span>
							<span>{this.props.ward}</span>
							<span>{this.props.district}</span>
						</div>
						<div className="aa-properties-about">
							<h3>{this.props.title}</h3>
							<p>{this.props.description}</p>
						</div>
						<div className="aa-properties-detial">
							<span className="aa-price"> {this.props.price} d </span>
							{/* <button className="btn btn-danger">
								<i className="fa fa-heart"></i>
							</button> */}
							<Link
								to={`/property-detail/${this.props._id}`}
								className="btn btn-primary"
							>
								View Details
							</Link>
						</div>
					</div>
				</article>
			</div>
		);
	}
}

PropertyItem.defaultProps = {
	_id: "0",
	title: "Title",
	description: "Description",
	number_of_room: 0,
	price: 0,
	is_available: false,
	ward: "Ward",
	district: "District",
	area: 0,
};

export default PropertyItem;
