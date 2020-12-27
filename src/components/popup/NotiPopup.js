import React, { Component } from "react";

import "./css/NotiPopup.css";
import NotiItem from "./NotiItem";

export class NotiPopup extends Component {
	render() {
		return (
			<div className="card">
				<ul className="list-style-none">
					<NotiItem />
					<NotiItem />
					<NotiItem />
					<NotiItem />
					<NotiItem />
					<NotiItem />
				</ul>
			</div>
		);
	}
}

export default NotiPopup;
