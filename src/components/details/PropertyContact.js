import React from "react";

import "./css/PropertyContact.css";
import Image from "../../images/logo512.png";
import { Link } from "react-router-dom";

class PropertyContact extends React.Component {
	render() {
		return (
			<div className="col-md-12">
				<div className="row section-t3">
					<div className="col-sm-12">
						<div className="title-box-d">
							<h3 className="title-d">Contact Agent</h3>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-md-6">
						<div className="property-agent">
							<h4 className="title-agent">{this.props.name}</h4>
							<ul className="list-unstyled">
								<li className="d-flex justify-content-between">
									<strong>Phone:</strong>
									<span className="color-text-a">{this.props.phone}</span>
								</li>
								<li className="d-flex justify-content-between">
									<strong>Email:</strong>
									<span className="color-text-a">annabella@example.com</span>
								</li>
							</ul>
							{!this.props.ownerId ? null : (
								<Link
									to={`/chat/${this.props.ownerId}`}
									style={{ textDecoration: "none" }}
								>
									<button className="btn btn-success btn-block">
										<i
											class="fa fa-envelope-open"
											style={{ marginRight: "10px" }}
										></i>
										CHAT VOI NGUOI BAN
									</button>
								</Link>
							)}
						</div>
					</div>
					<div className="col-md-3">
						<img src={Image} alt="" className="img-fluid" />
					</div>
				</div>
			</div>
		);
	}
}

export default PropertyContact;
