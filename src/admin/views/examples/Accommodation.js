import React from "react";
import "../../assets/scss/checkbox.scss";

// reactstrap components
import {
	Button,
	Card,
	CardHeader,
	CardBody,
	FormGroup,
	Form,
	Input,
	Container,
	Row,
	Col,
} from "reactstrap";
// core components
import AccommodationHeader from "../../components/Headers/AccommodationHeader.js";
import axios from "axios";

import Image from "../../../images/logo512.png";
import AuthContext from "../../../contexts/AuthContext";

class Accommodations extends React.Component {
	static contextType = AuthContext;

	state = {
		has_water_heater: "",
		has_private_bathroom: "",
		images: "",
		is_available: "",
		status: "",
		reviews: "",
		views: "",
		ward: "",
		district: "",
		city: "",
		address: "",
		type: "",
		number_of_room: "",
		price: "",
		area: "",
		owner: "",
		same_owner: "",
		has_air_condition: "",
		has_balcony: "",
		description: "",
		kitchen: "",
		name: "",
		phone: "",
	};
	componentDidMount = () => {
		axios
			.get(
				`${process.env.REACT_APP_API_URL}/accommodations/${this.props.match.params.id}`,
				{
					headers: { Authorization: `Bearer ${this.context.state.token}` },
				}
			)
			.then((res) => {
				var item = res.data.accommodation;
				this.setState({
					...item,
				});
			});
	};

	handleChange = (e) => {
		const { name, value } = e.target;
		this.setState({ [name]: value });
	};

	updateChange = () => {
		axios
			.put(
				`${process.env.REACT_APP_API_URL}/accommodations/${this.props.match.params.id}`,
				{ ...this.state },
				{
					headers: { Authorization: `Bearer ${this.context.state.token}` },
				}
			)
			.then((res) => {
				var item = res.data.accommodation;
				this.setState({
					...item,
				});
			});
	};

	render = () => {
		const data = this.state;
		return (
			<>
				<AccommodationHeader />
				{/* Page content */}
				<Container className="mt--7" fluid>
					<Row>
						<Col className="order-xl-2 mb-5 mb-xl-0" xl="4">
							<Card className="card-profile shadow">
								<Row className="justify-content-center">
									<Col className="order-lg-2" lg="3">
										<div className="card-profile-image">
											<a href="#pablo" onClick={(e) => e.preventDefault()}>
												<img alt="..." className="rounded-circle" src={Image} />
											</a>
										</div>
									</Col>
								</Row>
								<CardHeader className="text-center border-0 pt-8 pt-md-4 pb-0 pb-md-4">
									<div className="d-flex justify-content-between">
										<Button
											className="float-left inline ml-2"
											color="primary"
											href="#pablo"
											onClick={(e) => e.preventDefault()}
											size="sm"
										>
											Profile
										</Button>
										<Button
											className="float-right inline"
											color="default"
											href="#pablo"
											onClick={(e) => e.preventDefault()}
											size="sm"
										>
											Message
										</Button>
									</div>
								</CardHeader>
								<CardBody className="pt-0 pt-md-4">
									<div className=" my-5"></div>

									<div className="text-center">
										<h3>
											<span className="font-weight-light">Chủ trọ: </span>
											{this.state.name}
										</h3>
										<div className="h5 font-weight-300">
											<i className="ni location_pin mr-2" />
											Bucharest, Romania
										</div>
										<div className="h5 mt-4">
											<i className="ni business_briefcase-24 mr-2" />
											Solution Manager - Creative Tim Officer
										</div>
										<div>
											<i className="ni education_hat mr-2" />
											University of Computer Science
										</div>
										<hr className="my-4" />
										<p>{this.state.description}</p>
									</div>
								</CardBody>
							</Card>
						</Col>
						<Col className="order-xl-1" xl="8">
							<Card className="bg-secondary shadow">
								<CardHeader className="bg-white border-0">
									<Row className="align-items-center">
										<Col xs="8">
											<h3 className="mb-0">Chỉnh sửa</h3>
										</Col>
									</Row>
								</CardHeader>
								<CardBody>
									<Form>
										<h6 className="heading-small text-muted mb-4">
											Tình trạng
										</h6>
										<div className="pl-lg-4">
											<Row>
												<Col lg="3">
													<FormGroup>
														<label className="form-control-label">
															Có bình nóng lạnh:
														</label>
													</FormGroup>
												</Col>
												<Col>
													<FormGroup>
														<input
															type="checkbox"
															className="switch"
															checked={this.state.has_water_heater}
														/>
													</FormGroup>
												</Col>

												<Col lg="3">
													<FormGroup>
														<label className="form-control-label">
															Có ban công:
														</label>
													</FormGroup>
												</Col>
												<Col>
													<FormGroup>
														<input
															type="checkbox"
															className="switch"
															checked={this.state.has_balcony}
															onClick=""
														/>
													</FormGroup>
												</Col>
											</Row>
											<Row>
												<Col lg="3">
													<FormGroup>
														<label className="form-control-label">
															Có nhà tắm riêng:
														</label>
													</FormGroup>
												</Col>
												<Col>
													<FormGroup>
														<input
															type="checkbox"
															className="switch"
															checked={this.state.has_private_bathroom}
														/>
													</FormGroup>
												</Col>
												<Col lg="3">
													<FormGroup>
														<label className="form-control-label">
															Có điều hòa:
														</label>
													</FormGroup>
												</Col>
												<Col>
													<FormGroup>
														<input
															type="checkbox"
															className="switch"
															checked={this.state.has_air_condition}
														/>
													</FormGroup>
												</Col>
											</Row>
											<Row>
												<Col lg="3">
													<FormGroup>
														<label className="form-control-label ">
															Còn trống:
														</label>
													</FormGroup>
												</Col>
												<Col lg="3">
													<FormGroup>
														<input
															type="checkbox"
															className="switch"
															checked={this.state.is_available}
														/>
													</FormGroup>
												</Col>
												<Col lg="3">
													<FormGroup>
														<label className="form-control-label ">
															Chung chủ:
														</label>
													</FormGroup>
												</Col>
												<Col lg="3">
													<FormGroup>
														<input
															type="checkbox"
															className="switch"
															checked={this.state.same_owner}
														/>
													</FormGroup>
												</Col>
											</Row>
										</div>
										<hr className="my-4" />
										<h6 className="heading-small text-muted mb-4">Thông tin</h6>
										<div className="pl-lg-4">
											<Row>
												<Col lg="6">
													<FormGroup>
														<label className="form-control-label">
															Lượt xem
														</label>
														<Input
															className="form-control-alternative"
															onChange={this.handleChange}
															name="views"
															value={this.state.views}
															placeholder="Số lượt xem"
															type="number"
														/>
													</FormGroup>
												</Col>
												<Col lg="6">
													<FormGroup>
														<label className="form-control-label">
															Số lượng phòng
														</label>
														<Input
															className="form-control-alternative"
															onChange={this.handleChange}
															name="number_of_room"
															value={this.state.number_of_room}
															placeholder="Số lượng"
															type="email"
														/>
													</FormGroup>
												</Col>
											</Row>
											<Row>
												<Col lg="6">
													<FormGroup>
														<label className="form-control-label">
															Giá tiền
														</label>
														<Input
															className="form-control-alternative"
															onChange={this.handleChange}
															name="price"
															value={this.state.price}
															placeholder="VNĐ"
															type="email"
														/>
													</FormGroup>
												</Col>
												<Col lg="6">
													<FormGroup>
														<label className="form-control-label">
															Diện tích
														</label>
														<Input
															className="form-control-alternative"
															onChange={this.handleChange}
															name="area"
															value={this.state.area}
															placeholder="mét vuông"
															type="email"
														/>
													</FormGroup>
												</Col>
											</Row>
										</div>
										<hr className="my-4" />
										{/* Address */}
										<h6 className="heading-small text-muted mb-4">Địa chỉ</h6>
										<div className="pl-lg-4">
											<Row>
												<Col md="6">
													<FormGroup>
														<label className="form-control-label">Số nhà</label>
														<Input
															className="form-control-alternative"
															placeholder="Địa chỉ"
															onChange={this.handleChange}
															name="address"
															value={this.state.address}
															type="text"
														/>
													</FormGroup>
												</Col>
												<Col md="6">
													<FormGroup>
														<label className="form-control-label">Đường</label>
														<Input
															className="form-control-alternative"
															placeholder="Tên đường"
															onChange={this.handleChange}
															name="ward"
															value={this.state.ward}
															type="text"
														/>
													</FormGroup>
												</Col>
											</Row>
											<Row>
												<Col lg="4">
													<di>
														<label className="form-control-label">
															Thành phố
														</label>
														<Input
															className="form-control-alternative"
															placeholder="Tên"
															onChange={this.handleChange}
															name="city"
															value={this.state.city}
															type="text"
														/>
													</di>
												</Col>
												<Col lg="4">
													<FormGroup>
														<label className="form-control-label">
															Quốc gia
														</label>
														<Input
															className="form-control-alternative"
															placeholder="Nước"
															onChange={this.handleChange}
															name="name"
															value="Việt Nam"
															type="text"
														/>
													</FormGroup>
												</Col>
												<Col lg="4">
													<FormGroup>
														<label className="form-control-label">
															Số điện thoại
														</label>
														<Input
															className="form-control-alternative"
															placeholder="0123456789"
															onChange={this.handleChange}
															name="phone"
															value={this.state.phone}
															type="tel"
														/>
													</FormGroup>
												</Col>
											</Row>
										</div>
										<hr className="my-4" />
										{/* Description */}

										<FormGroup className="">
											<label className="form-control-label mr-2">
												Xác nhận
											</label>
											<input
												type="checkbox"
												className="switch"
												checked={this.state.status !== "pending" && true}
												onChange={(e) => {
													this.setState((prev) => {
														return {
															status:
																prev.status === "pending"
																	? "verified"
																	: "pending",
														};
													});
												}}
											></input>
										</FormGroup>
									</Form>
								</CardBody>
							</Card>
							<Button color="info" className="" onClick={this.updateChange}>
								Save
							</Button>
						</Col>
					</Row>
				</Container>
			</>
		);
	};
}

export default Accommodations;
