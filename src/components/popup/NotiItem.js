import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./css/NotiPopup.css";

export class NotiItem extends Component {
	render() {
		return (
			<div>
				<li className="d-flex no-block card-body border-top">
					{/* <i className="fa fa-gift w-30px m-t-5"></i> */}
					<div>
						<Link to="/" className="m-b-0 font-medium p-0">
							Congratulation to AAA For new investment
						</Link>
						<div className="text-muted">
							AAA has invested $2M in MMM. we are happy to working forward with
							AAA.
						</div>
					</div>
					<div className="ml-auto">
						<div className="tetx-right">
							<h5 className="text-muted m-b-0">11</h5>
							<span className="text-muted font-16">MAR</span>
						</div>
					</div>
				</li>
			</div>
		);
	}
}

export default NotiItem;
