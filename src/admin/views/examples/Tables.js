import React from "react";
import axios from "axios";

// reactstrap components
import {
	Badge,
	Card,
	CardHeader,
	CardFooter,
	DropdownMenu,
	DropdownItem,
	UncontrolledDropdown,
	DropdownToggle,
	Media,
	Pagination,
	PaginationItem,
	PaginationLink,
	Progress,
	Table,
	Container,
	Row,
	UncontrolledTooltip,
	Input,
	Col,
	ButtonDropdown,
} from "reactstrap";
// core components
import Header from "../../components/Headers/Header";

import Image from "../../../images/logo512.png";

class Tables extends React.Component {
	state = {
		isDropdown: 0,
		FilterOptions: ["Tên", "Giá", "Tình trạng", "Chủ sở hữu", "Đánh giá"],
		Paging: [],
		Room: [],
	};
	componentDidMount = () => {
		axios
			.get("https://easy-accommodation-api.herokuapp.com/api/accommodations")
			.then((res) => {
				this.setState({
					Room: res.data.accommodations.map((item) => ({
						images: item.images,
						price: item.price.toLocaleString() + " VND",
						status: item.status,
						name: item.name,
					})),
				});
			});
	};

	renderItem = () => {
		const data = this.state.Room;

		function bg(value) {
			if (value < 60) return "bg-danger";
			if (60 <= value && value < 80) return "bg-warning";
			if (80 <= value && value < 95) return "bg-info";
			else return "bg-success";
		}

		const mapRows = data.map((item, index) => (
			<tr key={index}>
				<th scope="row">
					<Media className="align-items-center">
						<a
							className="avatar rounded-circle mr-3"
							href="#pablo"
							onClick={(e) => e.preventDefault()}
						>
							<img alt="..." src={item.images} />
						</a>
						<Media>
							<span className="mb-0 text-sm">{item.name}</span>
						</Media>
					</Media>
				</th>
				<td>{item.price}</td>
				<td>
					<Badge color="" className="badge-dot mr-4">
						<i
							className={
								item.status === "pending" ? "bg-warning" : "bg-success"
							}
						/>
						{item.status}
					</Badge>
				</td>
				<td>
					<div className="avatar-group">
						<a
							className="avatar avatar-sm"
							href="#pablo"
							id={"tooltip996637554" + index.toString()}
							onClick={(e) => e.preventDefault()}
						>
							<img alt="..." className="rounded-circle" src={Image} />
						</a>
						<UncontrolledTooltip
							delay={0}
							target={"tooltip996637554" + index.toString()}
						>
							{item.name}
						</UncontrolledTooltip>
					</div>
				</td>
				<td>
					<div className="d-flex align-items-center">
						<span className="mr-2">{item.rating}%</span>
						<div>
							<Progress
								max="100"
								value={item.rating}
								barClassName={bg(item.rating)}
							/>
						</div>
					</div>
				</td>
				<td className="text-right">
					<UncontrolledDropdown>
						<DropdownToggle
							className="btn-icon-only text-light"
							href="#pablo"
							role="button"
							size="sm"
							color=""
							onClick={(e) => e.preventDefault()}
						>
							<i className="fas fa-ellipsis-v" />
						</DropdownToggle>
						<DropdownMenu className="dropdown-menu-arrow" right>
							<DropdownItem href="#pablo" onClick={(e) => e.preventDefault()}>
								Action
							</DropdownItem>
							<DropdownItem href="#pablo" onClick={(e) => e.preventDefault()}>
								Another action
							</DropdownItem>
							<DropdownItem href="#pablo" onClick={(e) => e.preventDefault()}>
								Something else here
							</DropdownItem>
						</DropdownMenu>
					</UncontrolledDropdown>
				</td>
			</tr>
		));
		return mapRows;
	};

	renderPaging = () => {
		const data = this.state.Paging;

		function isActive(isActive) {
			if (isActive) return "active";
			else return "";
		}
		const mapPaging = data.map((item, index) => (
			<PaginationItem className={isActive(item.isActive)} key="index">
				<PaginationLink
					onClick={() =>
						this.setState((prev) => ({
							Paging: prev.Paging.map((old, i) => ({
								...old,
								isActive: i === index,
							})),
						}))
					}
				>
					{item.number}
				</PaginationLink>
			</PaginationItem>
		));
		return mapPaging;
	};

	render() {
		return (
			<>
				<Header />
				{/* Page content */}
				<Container className="mt--7" fluid>
					{/* Table */}
					<Row>
						<div className="col">
							<Card className="shadow">
								<CardHeader className="border-0">
									<h3 className="mb-3">Cần được duyệt</h3>
									<Row className="justify-content-center">
										<Col className="mt-2 col-2">Filter:</Col>
										<Col>
											<ButtonDropdown
												isOpen={this.state.isDropdown === 1}
												onClick={() =>
													this.setState((prev) => {
														var isDd = prev.isDropdown === 1 ? 0 : 1;
														return {
															isDropdown: isDd,
														};
													})
												}
											>
												<DropdownToggle caret>Giá</DropdownToggle>
												<DropdownMenu>
													<DropdownItem>0-1000$</DropdownItem>
													<DropdownItem>1000-2000$</DropdownItem>
													<DropdownItem>2000-3000$</DropdownItem>
												</DropdownMenu>
											</ButtonDropdown>
										</Col>
										<Col>
											<ButtonDropdown
												isOpen={this.state.isDropdown === 2}
												onClick={() =>
													this.setState((prev) => {
														var isDd = prev.isDropdown === 2 ? 0 : 2;
														return {
															isDropdown: isDd,
														};
													})
												}
											>
												<DropdownToggle caret>Tình trạng</DropdownToggle>
												<DropdownMenu>
													<DropdownItem>Chưa duyệt</DropdownItem>
													<DropdownItem>Chưa được thuê</DropdownItem>
													<DropdownItem>Đã được thuê</DropdownItem>
												</DropdownMenu>
											</ButtonDropdown>
										</Col>
										<Col>
											<ButtonDropdown
												isOpen={this.state.isDropdown === 3}
												onClick={() =>
													this.setState((prev) => {
														var isDd = prev.isDropdown === 3 ? 0 : 3;
														return {
															isDropdown: isDd,
														};
													})
												}
											>
												<DropdownToggle caret>Đánh giá</DropdownToggle>
												<DropdownMenu>
													<DropdownItem>Nhỏ hơn 60</DropdownItem>
													<DropdownItem>60-80</DropdownItem>
													<DropdownItem>80-95</DropdownItem>
													<DropdownItem>Lớn hơn 95</DropdownItem>
												</DropdownMenu>
											</ButtonDropdown>
										</Col>

										<Col>
											<Input
												className="form-control-alternative"
												placeholder="Search"
												type="text"
											/>
										</Col>
									</Row>
								</CardHeader>
								<Table className="align-items-center table-flush" responsive>
									<thead className="thead-light">
										<tr>
											<th scope="col">Phòng trọ</th>
											<th scope="col">Giá cho thuê</th>
											<th scope="col">Tình trạng</th>
											<th scope="col">Chủ sở hữu</th>
											<th scope="col">Đánh giá khách hàng</th>
											<th scope="col" />
										</tr>
									</thead>
									<tbody>
										{/* white table items */}
										{this.renderItem()}
									</tbody>
								</Table>
								<CardFooter className="py-4">
									<nav aria-label="...">
										<Pagination
											className="pagination justify-content-end mb-0"
											listClassName="justify-content-end mb-0"
										>
											<PaginationItem>
												<PaginationLink
													href="#pablo"
													onClick={(e) => e.preventDefault()}
													tabIndex="-1"
												>
													<i className="fas fa-angle-left" />
													<span className="sr-only">Previous</span>
												</PaginationLink>
											</PaginationItem>

											{/* paging */}
											{this.renderPaging()}

											<PaginationItem>
												<PaginationLink
													href="#pablo"
													onClick={(e) => e.preventDefault()}
												>
													<i className="fas fa-angle-right" />
													<span className="sr-only">Next</span>
												</PaginationLink>
											</PaginationItem>
										</Pagination>
									</nav>
								</CardFooter>
							</Card>
						</div>
					</Row>
					{/* Dark table */}
					<Row className="mt-5">
						<div className="col">
							<Card className="bg-default shadow">
								<CardHeader className="bg-transparent border-0">
									<h3 className="text-white mb-0">Đã từ chối</h3>
								</CardHeader>
								<Table
									className="align-items-center table-dark table-flush"
									responsive
								>
									<thead className="thead-dark">
										<tr>
											<th scope="col">Phòng trọ</th>
											<th scope="col">Giá cho thuê</th>
											<th scope="col">Tình trạng</th>
											<th scope="col">Chủ sở hữu</th>
											<th scope="col">Đánh giá khách hàng</th>
											<th scope="col" />
										</tr>
									</thead>
									<tbody>{this.renderItem()}</tbody>
								</Table>
							</Card>
						</div>
					</Row>
				</Container>
			</>
		);
	}
}

export default Tables;
