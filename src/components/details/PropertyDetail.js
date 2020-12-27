import React from "react";
import axios from "axios";

import "./css/PropertyDetail.css";

import PropertyInfo from "./PropertyInfo";
import PropertyDescription from "./PropertyDescription";
import PropertySlider from "./PropertySlider";
import PropertyContact from "./PropertyContact";
import PropertyComment from "./PropertyComment";
import Report from "./Report";

class PropertyDetail extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			id: this.props.match.params.id,
			has_water_heater: false,
			has_private_bathroom: false,
			is_available: false,
			views: 0,
			ward: "Ward",
			district: "District",
			city: "City",
			address: "Address",
			type: "Type",
			number_of_room: 0,
			price: 0,
			area: 0,
			same_owner: false,
			has_air_condition: false,
			has_balcony: false,
			description: "Description",
			kitchen: "private",
			name: "Name",
			ownerId: null,
			phone: "Phone",
			title: "Title",
		};
	}

	componentDidMount() {
		axios
			.get(`${process.env.API_URL}/accommodations/${this.state.id}`)
			.then((res) => {
				const data = res.data.accommodation;
				this.setState({
					has_water_heater: data.has_water_heater,
					has_private_bathroom: data.has_private_bathroom,
					is_available: data.is_available,
					views: data.views,
					ward: data.ward,
					district: data.district,
					city: data.city,
					address: data.address,
					type: data.type,
					number_of_room: data.number_of_room,
					price: data.price,
					area: data.area,
					same_owner: data.same_owner,
					has_air_condition: data.has_air_condition,
					has_balcony: data.has_balcony,
					description: data.description,
					kitchen: data.kitchen,
					name: data.name,
					ownerId: data.owner,
					phone: data.phone,
					title: data.title,
				});
			});
	}

	render() {
		return (
			<section className="property-single nav-arrow-b container">
				<div className="container">
					<div className="row">
						<PropertySlider />
						<section className="intro-single">
							<div className="title-single-box">
								<div>
									{this.state.is_available === true ? (
										<button className="btn btn-info btn-lg">For rent</button>
									) : (
										<button className="btn btn-warning btn-lg">Sold out</button>
									)}

									<Report />
									<button className="btn btn-outline-danger btn-lg">
										<i className="fa fa-heart"></i>Like
									</button>
								</div>
								<h1 className="title-single">{this.state.title}</h1>
							</div>
						</section>
						<div className="col-sm-12">
							<div className="row justify-content-between">
								<PropertyInfo
									city={this.state.city}
									district={this.state.district}
									ward={this.state.ward}
									address={this.state.address}
									type={this.state.type}
									price={this.state.price}
									area={this.state.area}
									views={this.state.views}
								/>
								<PropertyDescription
									description={this.state.description}
									has_air_condition={this.state.has_air_condition}
									has_balcony={this.state.has_balcony}
									has_private_bathroom={this.state.has_air_condition}
									has_water_heater={this.state.has_water_heater}
									number_of_room={this.state.number_of_room}
									same_owner={this.state.same_owner}
									kitchen={this.state.kitchen}
								/>
								<PropertyContact
									name={this.state.name}
									phone={this.state.phone}
									ownerId={this.state.ownerId}
								/>
								<PropertyComment id={this.state.id} />
							</div>
						</div>
					</div>
				</div>
			</section>
		);
	}
}

export default PropertyDetail;
