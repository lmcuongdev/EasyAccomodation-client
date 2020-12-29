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

class Accommodations extends React.Component {
	state = {
		accommodation: {},
	};
	componentDidMount = () => {
		axios
			.get(
				"https://easy-accommodation-api.herokuapp.com/api/accommodations/5fe3958c3759dc3a25834a1b"
			)
			.then((res) => {
				var item = res.data.accommodation;
				this.setState({
					accommodation: {
						has_water_heater: item.has_water_heater,
						has_private_bathroom: item.has_private_bathroom,
						images: item.images,
						is_available: item.is_available,
						status: "verified",
						reviews: item.reviews,
						views: item.views,
						ward: item.ward,
						district: item.district,
						city: item.city,
						address: item.address,
						type: item.type,
						number_of_room: item.number_of_room,
						price: item.price,
						area: item.area,
						owner: item.owner,
						same_owner: item.same_owner,
						has_air_condition: item.has_air_condition,
						has_balcony: item.has_balcony,
						description: item.description,
						kitchen: item.kitchen,
						name: item.name,
						phone: item.phone,
					},
				});
			});
	};
	render() {
		const data = this.state.accommodation;
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
											{data.name}
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
										<p>{data.description}</p>
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
															checked={data.has_water_heater}
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
															checked={data.has_balcony}
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
															checked={data.has_private_bathroom}
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
															checked={data.has_air_condition}
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
															checked={data.is_available}
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
															checked={data.same_owner}
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
															defaultValue={data.views}
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
															defaultValue={data.number_of_room}
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
															defaultValue={data.price}
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
															defaultValue={data.area}
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
															defaultValue={data.address}
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
															defaultValue={data.ward}
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
															defaultValue={data.city}
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
															defaultValue="Việt Nam"
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
															defaultValue={data.phone}
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
												checked="true"
											></input>
										</FormGroup>
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

export default Accommodations;
