import React from "react";

import "./css/Search.css";

class Search extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			search: "",
			type: "",
			size: "0",
			minValue: "1000000",
			maxValue: "100000000",
		};
	}

	handleChange = (event) => {
		this.setState({ [event.target.name]: event.target.value });
	};

	handleClick = () => {
		this.props.setCondition(
			this.state.search.toLowerCase().trim(),
			this.state.type,
			this.state.size,
			this.state.minValue,
			this.state.maxValue
		);
	};

	render() {
		return (
			<section id="aa-advance-search">
				<div className="form-row filters py-2 mx-0">
					<div className="form-group col-md-4">
						<label>Search</label>
						<input
							type="text"
							className="form-control "
							placeholder="Search name"
							name="search"
							value={this.state.search}
							onChange={this.handleChange}
						/>
					</div>
					<div className="form-group col-md-2">
						<label>Type</label>
						<select
							className="form-control"
							name="type"
							onChange={this.handleChange}
							value={this.state.type}
						>
							<option value="">All</option>
							<option value="apartment">Apartment</option>
							<option value="mini-apartment">Mini-Apartment</option>
							<option value="motel">Motel</option>
						</select>
					</div>
					<div className="form-group col-md-2">
						<label>Area</label>
						<select
							className="form-control"
							name="size"
							onChange={this.handleChange}
							value={this.state.size}
						>
							<option value="0">All</option>
							<option value="20">20 +</option>
							<option value="40">40 +</option>
							<option value="60">60 +</option>
						</select>
					</div>
					<div className="form-group col-md-2">
						<label>From</label>
						<select
							className="form-control"
							name="minValue"
							onChange={this.handleChange}
							value={this.state.minValue}
						>
							<option value="1000000">1.000.000</option>
							<option value="3000000">3.000.000</option>
							<option value="5000000">5.000.000</option>
						</select>
					</div>
					<div className="form-group col-md-2">
						<label>To</label>
						<select
							className="form-control"
							name="maxValue"
							onChange={this.handleChange}
							value={this.state.maxValue}
						>
							<option value="6000000">6.000.000</option>
							<option value="8000000">8.000.000</option>
							<option value="10000000">10.000.000</option>
							<option value="100000000">10.000.000 +</option>
						</select>
					</div>

					<button
						className="btn btn-primary"
						onClick={this.handleClick}
						style={{ marginLeft: "5px" }}
					>
						Search
					</button>
				</div>
			</section>
		);
	}
}

export default Search;
