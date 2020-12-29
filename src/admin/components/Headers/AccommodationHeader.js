import React from "react";

// reactstrap components
import { Container, Row, Col } from "reactstrap";

class AccommodationHeader extends React.Component {
	render() {
		return (
			<>
				<div
					className="header pb-8 pt-5 pt-lg-8 d-flex align-items-center"
					style={{
						minHeight: "500px",
						backgroundImage:
							"url(" +
							require("../../assets/img/theme/profile-cover.jpg") +
							")",
						backgroundSize: "cover",
						backgroundPosition: "center top",
					}}
				>
					{/* Mask */}
					<span className="mask bg-gradient-default opacity-8" />
					{/* Header container */}
					<Container className="d-flex align-items-center" fluid>
						<Row>
							<Col lg="12" md="10">
								<h3 className="display-2 text-white">Thông tin trọ</h3>
								<p className="text-white mt-0 mb-5">
									Trang thông tin chi tiết về nhà trọ.
								</p>
							</Col>
						</Row>
					</Container>
				</div>
			</>
		);
	}
}

export default AccommodationHeader;
