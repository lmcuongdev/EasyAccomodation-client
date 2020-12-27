import React from "react";
import "../css/Footer.css";

class Footer extends React.Component {
	render() {
		return (
			<footer id="aa-footer">
				<div className="container">
					<div className="row">
						<div className="col-md-12">
							<div className="aa-footer-area">
								<div className="row">
									<div className="col-md-3 col-sm-6 col-xs-12">
										<div className="aa-footer-left">
											<p>Designed by HTPePe</p>
										</div>
									</div>
									<div className="col-md-3 col-sm-6 col-xs-12">
										<div className="aa-footer-middle">
											<span>
												<i className="fa fa-facebook"></i>
											</span>
											<span>
												<i className="fa fa-twitter"></i>
											</span>
											<span>
												<i className="fa fa-google-plus"></i>
											</span>
											<span>
												<i className="fa fa-youtube"></i>
											</span>
										</div>
									</div>
									<div className="col-md-6 col-sm-12 col-xs-12">
										<div className="aa-footer-right">
											<span>Home</span>
											<span>Support</span>
											<span>License</span>
											<span>FAQ</span>
											<span>Privacy & Term</span>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</footer>
		);
	}
}

export default Footer;
