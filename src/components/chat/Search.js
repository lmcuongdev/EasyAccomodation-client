import React, { Component } from "react";

export class Search extends Component {
	render() {
		return (
			<div id="search">
				<label for="">
					<i className="fa fa-search" aria-hidden="true"></i>
				</label>
				<input type="text" placeholder="Search contacts..." />
			</div>
		);
	}
}

export default Search;
