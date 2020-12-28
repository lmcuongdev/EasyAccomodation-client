import React from "react";

// reactstrap components
import { Container, Row, Col } from "reactstrap";

class UserHeader extends React.Component {
	render() {
		return (
			<>
				<div
					className="header pb-8 pt-5 pt-lg-8 d-flex align-items-center"
					style={{
						minHeight: "500px",
						// backgroundImage:
						//   "url(" + require("assets/img/theme/profile-cover.jpg") + ")",
						backgroundSize: "cover",
						backgroundPosition: "center top",
					}}
				>
					{/* Mask */}
					<span className="mask bg-gradient-default opacity-8" />
					{/* Header container */}
					<Container className="d-flex align-items-center" fluid>
						<Row>
							<Col lg="7" md="10">
								<h1 className="display-2 text-white">Chủ trọ</h1>
								<p className="text-white mt-0 mb-5">
									Đây là trang cá nhân của một anh bạn chủ trọ. Vì bạn là admin
									nên bạn có thể chỉnh sửa nó tùy ý.
								</p>
							</Col>
						</Row>
					</Container>
				</div>
			</>
		);
	}
}

export default UserHeader;
