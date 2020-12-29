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
import UserHeader from "../../components/Headers/UserHeader.js";

import Image from "../../../images/logo512.png";

class Profile extends React.Component {
	state = {
		accommodations: {
			_id: "5fe3958c3759dc3a25834a1b",
			has_water_heater: true,
			has_private_bathroom: true,
			images: [],
			is_available: true,
			status: "verified",
			reviews: [],
			views: 0,
			ward: "Dich Vong Hau",
			district: "Cau Giay",
			city: "Hanoi",
			address: "215 Tran Quoc Hoan",
			type: "motel",
			number_of_room: 2,
			price: 5000000,
			area: 50,
			same_owner: false,
			has_air_condition: true,
			has_balcony: true,
			description: "Nha trọ gần VNU",
			kitchen: "private",
			name: "Cuong",
			phone: "0217647214",
			owner: "5fe01183c120871a3f96cb95",
			publication_date: "2020-12-30T19:07:56.387Z",
			end_date: "2021-01-22T19:07:56.387Z",
			__v: 0,
		},
	};
	render() {
		return (
			<>
				<UserHeader />
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
											Poke
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
									<Row>
										<div className="col">
											<div className="card-profile-stats d-flex justify-content-center mt-md-5">
												<div>
													<span className="heading">22</span>
													<span className="description">Friends</span>
												</div>
												<div>
													<span className="heading">10</span>
													<span className="description">Photos</span>
												</div>
												<div>
													<span className="heading">89</span>
													<span className="description">Comments</span>
												</div>
											</div>
										</div>
									</Row>
									<div className="text-center">
										<h3>
											Jessica Jones
											<span className="font-weight-light">, 27</span>
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
										<p>
											Ryan — the name taken by Melbourne-raised, Brooklyn-based
											Nick Murphy — writes, performs and records all of his own
											music.
										</p>
										<a href="#pablo" onClick={(e) => e.preventDefault()}>
											Show more
										</a>
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
											Thông tin chủ trọ
										</h6>
										<div className="pl-lg-4">
											<Row>
												<Col lg="6">
													<FormGroup>
														<label
															className="form-control-label"
															htmlFor="input-username"
														>
															Tên người dùng
														</label>
														<Input
															className="form-control-alternative"
															id="input-username"
															placeholder="Username"
															type="text"
														/>
													</FormGroup>
												</Col>
												<Col lg="6">
													<FormGroup>
														<label
															className="form-control-label"
															htmlFor="input-email"
														>
															Địa chỉ email
														</label>
														<Input
															className="form-control-alternative"
															id="input-email"
															placeholder="jesse@example.com"
															type="email"
														/>
													</FormGroup>
												</Col>
											</Row>
											<Row>
												<Col lg="6">
													<FormGroup>
														<label
															className="form-control-label"
															htmlFor="input-first-name"
														>
															Họ
														</label>
														<Input
															className="form-control-alternative"
															id="input-first-name"
															placeholder="First name"
															type="text"
														/>
													</FormGroup>
												</Col>
												<Col lg="6">
													<FormGroup>
														<label
															className="form-control-label"
															htmlFor="input-last-name"
														>
															Tên
														</label>
														<Input
															className="form-control-alternative"
															id="input-last-name"
															placeholder="Last name"
															type="text"
														/>
													</FormGroup>
												</Col>
											</Row>
										</div>
										<hr className="my-4" />
										{/* Address */}
										<h6 className="heading-small text-muted mb-4">
											Thông tin liên lạc
										</h6>
										<div className="pl-lg-4">
											<Row>
												<Col md="12">
													<FormGroup>
														<label
															className="form-control-label"
															htmlFor="input-address"
														>
															Địa chỉ
														</label>
														<Input
															className="form-control-alternative"
															id="input-address"
															placeholder="Home Address"
															type="text"
														/>
													</FormGroup>
												</Col>
											</Row>
											<Row>
												<Col lg="4">
													<di>
														<label
															className="form-control-label"
															htmlFor="input-city"
														>
															Thành phố
														</label>
														<Input
															className="form-control-alternative"
															id="input-city"
															placeholder="City"
															type="text"
														/>
													</di>
												</Col>
												<Col lg="4">
													<FormGroup>
														<label
															className="form-control-label"
															htmlFor="input-country"
														>
															Quốc gia
														</label>
														<Input
															className="form-control-alternative"
															id="input-country"
															placeholder="Country"
															type="text"
														/>
													</FormGroup>
												</Col>
												<Col lg="4">
													<FormGroup>
														<label
															className="form-control-label"
															htmlFor="input-country"
														>
															Mã bưu điện
														</label>
														<Input
															className="form-control-alternative"
															id="input-postal-code"
															placeholder="Postal code"
															type="number"
														/>
													</FormGroup>
												</Col>
											</Row>
										</div>
										<hr className="my-4" />
										{/* Description */}
										<h6 className="heading-small text-muted mb-4">
											Giới thiệu
										</h6>
										<div className="pl-lg-4">
											<FormGroup>
												<label>Về chủ trọ</label>
												<Input
													className="form-control-alternative"
													placeholder="A few words about you ..."
													rows="4"
													type="textarea"
												/>
											</FormGroup>
										</div>
										<div className="">
											<label className="form-control-label mr-2">
												Xác nhận
											</label>
											<input type="checkbox" className="switch"></input>
										</div>
									</Form>
								</CardBody>
							</Card>
							<Button
								color="info"
								className="ml-3"
								onClick={(e) => e.preventDefault()}
							>
								Save
							</Button>
						</Col>
					</Row>
				</Container>
			</>
		);
	}
}

export default Profile;
