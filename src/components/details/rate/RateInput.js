import React, { Component } from "react";
import "./RateInput.css";

export class RateInput extends Component {
	render() {
		return (
			<fieldset className="rating" onChange={this.props.handleChange}>
				<input type="radio" id="star5" name="rating" value="5" />
				<label
					className="full"
					htmlFor="star5"
					title="Awesome - 5 stars"
				></label>

				<input type="radio" id="star4" name="rating" value="4" />
				<label
					className="full"
					htmlFor="star4"
					title="Pretty good - 4 stars"
				></label>

				<input type="radio" id="star3" name="rating" value="3" />
				<label className="full" htmlFor="star3" title="Meh - 3 stars"></label>

				<input type="radio" id="star2" name="rating" value="2" />
				<label
					className="full"
					htmlFor="star2"
					title="Kinda bad - 2 stars"
				></label>

				<input type="radio" id="star1" name="rating" value="1" />
				<label
					className="full"
					htmlFor="star1"
					title="Sucks big time - 1 star"
				></label>
			</fieldset>
		);
	}
}

export default RateInput;
