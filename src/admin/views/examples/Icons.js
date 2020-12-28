import React from "react";
import axios from "axios";
// react component that copies the given text inside your clipboard
// import { CopyToClipboard } from "react-copy-to-clipboard";
// reactstrap components
import {
	Card,
	CardHeader,
	CardBody,
	Container,
	Row,
	Col,
	// UncontrolledTooltip,
} from "reactstrap";
// core components
import Header from "../../components/Headers/Header";

import Image from "../../../images/logo512.png";

class Icons extends React.Component {
	state = {
		rentersList: [{}],
	};

	componentDidMount = () => {
		axios
			.get("https://easy-accommodation-api.herokuapp.com/api/users")
			.then((res) => {
				this.setState((prev) => ({
					rentersList: res.data.users.map((item) => ({
						avatar: "",
						name: (item.role = "owner" ? item.name : "renters"),
						rentersPage: "user-profile",
					})),
				}));
			});
	};

	renderRenters = () => {
		const data = this.state.rentersList;

		const mapRenters = data.map((item, index) => (
			<Col lg="3" md="6" key={index}>
				<a href={item.rentersPage}>
					<button className=" btn-icon-clipboard" type="button">
						<div>
							<img alt="..." src={Image} className="avatar rounded-circle" />
							<span>{item.name}</span>
						</div>
					</button>
				</a>
			</Col>
		));
		return mapRenters;
	};

	render() {
		return (
			<>
				<Header />
				{/* Page content */}
				<Container className=" mt--7" fluid>
					{/* Table */}
					<Row>
						<div className=" col">
							<Card className=" shadow">
								<CardHeader className=" bg-transparent">
									<h3 className=" mb-0">Chủ trọ</h3>
								</CardHeader>
								<CardBody>
									<Row className=" icon-examples">{this.renderRenters()}</Row>
								</CardBody>
							</Card>
						</div>
					</Row>
				</Container>
			</>
		);
	}
}

export default Icons;
