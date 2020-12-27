import React, { Component } from "react";
import "./Rate.css";

export class Rate extends Component {
	displayPoint() {
		let fiveStart = [];
		for (let i = 5; i > 0; i--) {
			if (i <= this.props.point) {
				fiveStart.push(<label className="checked" key={i}></label>);
			} else {
				fiveStart.push(<label key={i}></label>);
			}
		}
		return fiveStart;
	}

	render() {
		return <fieldset className="rate-show">{this.displayPoint()}</fieldset>;
	}
}

export default Rate;
