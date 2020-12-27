import React from "react";

import "./css/PropertyDescription.css";

class PropertyDescription extends React.Component {
	render() {
		return (
			<div className="col-md-7 col-lg-7 section-md-t3">
				<div className="row">
					<div className="col-sm-12">
						<div className="title-box-d">
							<h3 className="title-d">Property Description</h3>
						</div>
					</div>
				</div>
				<div className="property-description">
					<p className="description color-text-a">{this.props.description}</p>
					{/* <p className="description color-text-a no-margin">
						Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.
						Donec rutrum congue leo eget malesuada. Quisque velit nisi, pretium
						ut lacinia in, elementum id enim. Donec sollicitudin molestie
						malesuada.
					</p> */}
				</div>
				<div className="row section-t3">
					<div className="col-sm-12">
						<div className="title-box-d">
							<h3 className="title-d">Amenities</h3>
						</div>
					</div>
				</div>
				<div className="amenities-list color-text-a">
					<ul className="list-a no-margin">
						{this.props.same_owner == true ? (
							<li>Co chung chu</li>
						) : (
							<li>Khong chung chu</li>
						)}
						<li>{this.props.number_of_room} Phong</li>
						{this.props.has_balcony == true ? <li>Ban cong</li> : null}
						{this.props.kitchen == "private" ? (
							<li>Bep rieng</li>
						) : (
							<li>Bep chung</li>
						)}
						{this.props.has_air_condition ? <li>Dieu hoa</li> : null}
						{this.props.has_private_bathroom == true ? (
							<li>Phong tam rieng</li>
						) : (
							<li>Phong tam chung</li>
						)}
						{this.props.has_water_heater == true ? (
							<li>Binh nong lanh</li>
						) : null}
					</ul>
				</div>
			</div>
		);
	}
}

export default PropertyDescription;
