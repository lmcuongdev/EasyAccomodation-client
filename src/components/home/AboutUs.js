import React from "react";
import "./css/AboutUs.css";

import Image from "../../images/test.jpg";

class AboutUs extends React.Component {
	render() {
		return (
			<div id="about">
				<div className="container">
					<div className="col-md-12"></div>
					<div className="row">
						{/* <div className="col-md-6">
							{" "}
							<img src={Image} className="img-responsive" alt="" />{" "}
						</div> */}

						<div className="about-text">
							<h2>Who We Are</h2>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
								eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
								enim ad minim veniam, quis nostrud exercitation ullamco laboris
								nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit
								amet, consectetur adipiscing elit, sed do eiusmod tempor
								incididunt ut labore et dolore magna aliqua.
							</p>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default AboutUs;
