import React from "react";

import "./css/PropertyInfo.css";

class PropertyInfo extends React.Component {
	render() {
		return (
			<div className="col-md-5 col-lg-4">
				{/* <div className="property-price d-flex justify-content-center foo">
					<div className="card-header-c d-flex">
						<div className="card-box-ico">
							<span className="ion-money">$</span>
						</div>
						<div className="card-title-c align-self-center">
							<h5 className="title-c">15000</h5>
						</div>
					</div>
				</div> */}
				<div className="property-summary">
					<div className="row">
						<div className="col-sm-12">
							<div className="title-box-d section-t4">
								<h3 className="title-d">Quick Summary</h3>
							</div>
						</div>
					</div>
					<div className="summary-list">
						<ul className="list">
							<li className="d-flex justify-content-between">
								<strong>City:</strong>
								<span>{this.props.city}</span>
							</li>
							<li className="d-flex justify-content-between">
								<strong>District:</strong>
								<span>{this.props.district}</span>
							</li>
							<li className="d-flex justify-content-between">
								<strong>Ward:</strong>
								<span>{this.props.ward}</span>
							</li>
							<li className="d-flex justify-content-between">
								<strong>Address:</strong>
								<span>{this.props.address}</span>
							</li>
							<li className="d-flex justify-content-between">
								<strong>Property Type:</strong>
								<span>{this.props.type}</span>
							</li>
							<li className="d-flex justify-content-between">
								<strong>Price:</strong>
								<span>{this.props.price}</span>
							</li>
							<li className="d-flex justify-content-between">
								<strong>Area:</strong>
								<span>
									{this.props.area}m<sup>2</sup>
								</span>
							</li>
							<li className="d-flex justify-content-between">
								<strong>Views:</strong>
								<span>{this.props.views}</span>
							</li>
						</ul>
					</div>
				</div>
			</div>
		);
	}
}

export default PropertyInfo;
