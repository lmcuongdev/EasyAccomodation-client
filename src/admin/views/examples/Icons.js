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
		axios.get(`${process.env.REACT_APP_API_URL}/users`).then((res) => {
			console.log(res.data.users);
			this.setState((prev) => ({
				rentersList: res.data.users
					.filter((item) => {
						if (item.role !== "owner") return false;
						return true;
					})
					.map((item) => ({
						// avatar: "",
						id: item._id,
						email: item.email,
						rentersPage: "users",
					})),
			}));
		});
	};

	renderRenters = () => {
		const data = this.state.rentersList;

		const mapRenters = data.map((item, index) => {
			console.log(item);
			return (
				<Col lg="3" md="6" key={index}>
					<a href={`users/${item.id}`}>
						<button className=" btn-icon-clipboard" type="button">
							<div>
								{/* <img alt="..." src={Image} className="avatar rounded-circle" /> */}
								<span className="font-weight-bold">{item.email}</span>
							</div>
						</button>
					</a>
				</Col>
			);
		});
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
