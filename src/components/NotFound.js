import React, { Component } from "react";

import "../css/NotFound.css";
import { Link } from "react-router-dom";

export class NotFound extends Component {
	render() {
		return (
			<div className="error-page">
				<h1>This page isn't available</h1>
				<section className="error-container">
					<span>4</span>
					<span>
						<span className="screen-reader-text">0</span>
					</span>
					<span>4</span>
				</section>
				<div className="link-container">
					<Link className="more-link" to="/">
						Visit the home page
					</Link>
				</div>
				<p className="zoom-area">
					The link may be broken, or the page may have been removed. Check to
					see if the link you're trying to open is correct.
				</p>
			</div>
		);
	}
}

export default NotFound;
