import React, { Component } from "react";

export class PropertyItemHorizontal extends Component {
	render() {
		return (
			<li className="list-group-item">
				<div className="media align-items-lg-center flex-column flex-lg-row p-3">
					<div className="media-body order-2 order-lg-1">
						<div style={{ float: "right" }}>
							<button className="btn btn-warning btn-sm">Sold out</button>
							<button className="btn btn-outline-danger btn-sm">Remove</button>
						</div>

						<h5 className="mt-0 font-weight-bold mb-2">{this.props.name}</h5>
						<p className="font-italic text-muted mb-0 small">
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit
							fuga autem maiores necessitatibus.
						</p>
						<div className="d-flex align-items-center justify-content-between mt-1">
							<h6 className="font-weight-bold my-2">$120.00</h6>
							<ul className="list-inline small">
								<li className="list-inline-item m-0">
									<i className="fa fa-star text-success"></i>
								</li>
								<li className="list-inline-item m-0">
									<i className="fa fa-star text-success"></i>
								</li>
								<li className="list-inline-item m-0">
									<i className="fa fa-star text-success"></i>
								</li>
								<li className="list-inline-item m-0">
									<i className="fa fa-star text-success"></i>
								</li>
								<li className="list-inline-item m-0">
									<i className="fa fa-star-o text-gray"></i>
								</li>
							</ul>
						</div>
					</div>
					<img
						src="https://res.cloudinary.com/mhmd/image/upload/v1556485076/shoes-1_gthops.jpg"
						alt="Generic placeholder image"
						width="200"
						className="ml-lg-5 order-1 order-lg-2"
					/>
				</div>
			</li>
		);
	}
}

PropertyItemHorizontal.defaultProps = { name: "La la land" };

export default PropertyItemHorizontal;
