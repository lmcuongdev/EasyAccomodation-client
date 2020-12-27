import React, { Component } from "react";
import { Link } from "react-router-dom";

export class Rent_Contact extends Component {
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
			<div className="page-wrapper bg-gra-03 p-t-45 p-b-50">
				<div className="wrapper wrapper--w790">
					<div className="card card-5">
						<div className="progress">
							<div className="progress-bar progress-color progress-3">
								<h3>3/3</h3>
							</div>
						</div>
						<div className="card-heading">
							<button
								className="btn btn-info back-btn"
								onClick={this.props.prevPage}
							>
								<i className="fa fa-arrow-circle-left"></i>
								Back
							</button>
							<div className="title">Thong tin lien lac</div>
						</div>
						<div className="card-body">
							<div className="form-row">
								<div className="name">Ten</div>
								<div className="value">
									<div className="input-group">
										<input
											className="input--style-5"
											type="text"
											name="company"
										/>
									</div>
								</div>
							</div>
							<div className="form-row">
								<div className="name">So dien thoai</div>
								<div className="value">
									<div className="input-group">
										<input
											className="input--style-5"
											type="text"
											name="company"
										/>
									</div>
								</div>
							</div>
							<div className="form-row">
								<div className="name">Dia chi email</div>
								<div className="value">
									<div className="input-group">
										<input
											className="input--style-5"
											type="text"
											name="company"
										/>
									</div>
								</div>
							</div>
							<div className="form-row">
								<div className="name">Han chot</div>
								<div className="value">
									<div className="input-group-desc">
										<input
											className="input--style-5"
											type="date"
											name="deadline"
											min={this.minDate()}
											value={this.state.deadline}
											onChange={this.changeDate}
										/>
										<label className="label--desc">
											Thanh tien :{" "}
											<span style={{ color: "red" }}>
												{this.state.totalFee}
											</span>{" "}
											d
										</label>
									</div>
								</div>
							</div>
							<div className="finish">
								<button
									className="btn btn--radius-2 btn--red"
									style={{ marginTop: "20px" }}
								>
									<Link to="/" style={{ textDecoration: "none" }}>
										Finish
									</Link>
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Rent_Contact;
