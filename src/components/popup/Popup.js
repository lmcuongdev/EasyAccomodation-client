import React, { Component } from "react";

import "./css/Popup.css";
import Image from "../../images/logo512.png";
import NotiPopup from "./NotiPopup";

export class Popup extends Component {
	render() {
		return (
			<div className={`box-collapse-${this.props.popupState}`}>
				<div className="click-closed"></div>
				<div className="box-collapse">
					<div className="title-box-d">
						<img src={Image} alt="" />
						<span className="title-d">Username</span>
					</div>
					<span
						className="close-box-collapse right-boxed"
						onClick={this.props.handleClose}
					>
						&times;
					</span>
					<div className="box-collapse-wrap form">
						<div className="row d-flex justify-content-center mt-100 mb-100">
							<NotiPopup />
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Popup;
