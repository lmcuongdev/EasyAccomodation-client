import React from "react";

import "./css/Search.css";

class Search extends React.Component {
	render() {
		return (
			<section id="aa-advance-search">
				<div class="form-row filters py-2 mx-0">
					<div class="form-group col-md-4">
						<label>Search</label>
						<input
							type="text"
							class="form-control "
							placeholder="Search expense"
							value=""
						/>
					</div>
					<div class="form-group col-md-2">
						<label>Sort By</label>
						<select class="form-control">
							<option>Date</option>
							<option>Amount</option>
						</select>
					</div>
					<div class="form-group col-md-2">
						<label>Sort Type</label>
						<select class="form-control">
							<option>Descending</option>
							<option>Ascending</option>
						</select>
					</div>
					<div class="form-group col-md-2">
						<label>From</label>
						<input type="date" class="form-control" />
					</div>
					<div class="form-group col-md-2">
						<label>To</label>
						<input type="date" class="form-control" />
					</div>
				</div>
			</section>
		);
	}
}

export default Search;
