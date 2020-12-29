import React, { Component } from "react";
import { Link } from "react-router-dom";
import Deadline from "../post/Deadline";

export class PropertyItemHorizontal extends Component {
	constructor(props) {
		super();
		this.state = {
			sendRequest: false,
		};
	}

	handleRequest = () => {
		this.setState({ sendRequest: true });
	};

	checkEditingRequest = () => {
		if (this.props.myAccomod) {
			if (this.props.isVerified) {
				if (this.state.sendRequest) {
					if (this.props.editable) {
						return (
							<Link to="/">
								Chỉnh sửa bài viết <i class="fa fa-arrow-right"></i>
							</Link>
						);
					} else {
						return (
							<p style={{ color: "red" }}>
								Yêu cầu chỉnh sửa đang chờ phê duyệt ...
							</p>
						);
					}
				}
			} else {
				return (
					<Link to={`/property-detail/${this.props.accommod._id}/edit`}>
						Chỉnh sửa bài viết <i class="fa fa-arrow-right"></i>
					</Link>
				);
			}
		}
	};

	render() {
		return (
			<li className="list-group-item">
				<div className="media align-items-lg-center flex-column flex-lg-row p-3">
					<div className="media-body order-2 order-lg-1 pr-5">
						<div className="float-right">
							{!this.props.myAccomod ? (
								<>
									{!this.props.is_available ? (
										<button className="btn btn-warning btn-sm">Sold out</button>
									) : (
										<button className="btn btn-info btn-sm">For rent</button>
									)}
									<button className="btn btn-danger btn-sm">Remove</button>
								</>
							) : (
								<>
									{this.props.isVerified ? (
										<>
											<button className="btn btn-success btn-sm">
												Verified
											</button>
											<button
												className="btn btn-warning btn-sm"
												disabled={this.state.sendRequest}
												onClick={this.handleRequest}
											>
												Editing Request
											</button>
										</>
									) : (
										<>
											<h2 className="btn btn-secondary btn-sm">Pending</h2>
											<button
												className="btn btn-danger btn-sm"
												onClick={() =>
													this.props.handleRemove(this.props.accommod._id)
												}
											>
												Remove
											</button>
										</>
									)}
								</>
							)}
						</div>
						<h5 className="mt-0 font-weight-bold mb-2">{this.props.name}</h5>
						<p className="font-italic text-muted mb-0 small">
							{/* {this.props.accommod.description} */}Temp description
						</p>
						<div className="d-flex align-items-center justify-content-between mt-1">
							<h6 className="font-weight-bold my-2">
								{/* {this.props.accommod.price} */}Temp price
							</h6>
							{this.checkEditingRequest()}
							{/* <ul className="list-inline small">
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
							</ul> */}
						</div>
						{/* <p style={{ color: "blue" }}>16 day left</p> */}
						{this.props.myAccomod && this.props.isVerified ? (
							<div style={{ marginBottom: "30px", marginTop: "10px" }}>
								<Deadline lineHeightSm={true} />
							</div>
						) : null}
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
