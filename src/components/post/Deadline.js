import React, { Component } from "react";

export class Deadline extends Component {
	constructor(props) {
		super(props);

		this.state = {
			deadline: "",
			totalFee: 0,
			cost: 5000,
		};

		this.changeDate = this.changeDate.bind(this);
	}

	changeDate(event) {
		let currentDate = new Date();
		let diffTime = Math.abs(event.target.valueAsDate - currentDate);
		let diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
		this.setState({
			deadline: event.target.value,
			totalFee: (diffDays * this.state.cost)
				.toFixed(1)
				.replace(/\d(?=(\d{3})+\.)/g, "$&,")
				.slice(0, -2),
		});
	}

	minDate() {
		let currentDate = new Date();
		currentDate.setDate(currentDate.getDate() + 7);
		let result = `${currentDate.getFullYear()}-${
			currentDate.getMonth() + 1
		}-${currentDate.getDate()}`;
		return result;
	}

	render() {
		return (
			<div className="input-group-desc">
				<input
					className={`input--style-5 ${
						this.props.lineHeightSm ? "line-height-sm" : ""
					}`}
					type="date"
					name="deadline"
					min={this.minDate()}
					value={this.state.deadline}
					onChange={this.changeDate}
				/>
				<label className="label--desc">
					Thanh tien :{" "}
					<span style={{ color: "red" }}>{this.state.totalFee}</span> d
				</label>
			</div>
		);
	}
}

export default Deadline;
