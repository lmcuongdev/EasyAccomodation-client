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
import AuthContext from "../../../contexts/AuthContext";

class Reviews extends React.Component {
	static contextType = AuthContext;

	state = {
		search: "",
		status: "",
		rating: 0,
		Paging: [],
		Reviews: [],
	};
	componentDidMount = () => {
		const roomCount = this.state.Reviews.length;
		var roomPage = [{ number: 1, isActive: true }];
		for (let i = 2; i <= roomCount / 5 + 1; i++) {
			roomPage.push({ number: i, isActive: false });
		}

		axios
			.get(`${process.env.REACT_APP_API_URL}/reviews`, {
				headers: { Authorization: `Bearer ${this.context.state.token}` },
			})
			.then((res) => {
				console.log(res.data.reviews);
				this.setState({
					Reviews: res.data.reviews.map((item) => ({
						...item,
						name: item.accommodation?.title,
						comment: item.comment,
						status: item.status,
						author: item.author.name,
						rating: (item.rating / 5) * 100,
						time: Date(item.created_at).toLocaleString(),
						approved: true,
					})),
				});
			});
	};

	updateChange = (id) => {
		axios
			.put(
				`${process.env.REACT_APP_API_URL}/reviews/${id}`,
				{ ...this.state },
				{
					headers: { Authorization: `Bearer ${this.context.state.token}` },
				}
			)
			.then((res) => {
				console.log("updated");
				// var item = res.data.accommodation;
				// this.setState({
				// 	...item,
				// });
			});
	};

	searchFilter(event) {
		this.setState({
			search: event.target.value.toString(),
		});
	}

	reviewsFilter(event) {
		this.setState({
			rating: event.target.value,
		});
	}
	statusFilter(event) {
		this.setState({
			status: event.target.value,
		});
	}

	renderItem = () => {
		const filterSearch = this.state.Reviews.filter((item) => {
			return (
				item.comment.toLowerCase().indexOf(this.state.search.toLowerCase()) !==
				-1
			);
		});
		const filterRating = filterSearch.filter((item) => {
			switch (this.state.rating) {
				case "1":
					return item.rating >= 0 && item.rating < 60;
				case "2":
					return item.rating >= 60 && item.rating < 80;
				case "3":
					return item.rating >= 80 && item.rating < 95;
				case "4":
					return item.rating >= 95;
				default:
					return item.rating;
			}
		});

		const data = filterRating.filter((item) => {
			if (this.state.status !== "") {
				return item.status === this.state.status;
			} else return true;
		});

		function bg(value) {
			if (value < 60) return "bg-danger";
			if (60 <= value && value < 80) return "bg-warning";
			if (80 <= value && value < 95) return "bg-info";
			else return "bg-success";
		}

		const mapRows = data.map((item, index) => (
			<tr key={index}>
				<th scope="row">
					<span className="mb-0 text-sm">{item.name}</span>
				</th>
				<td>{item.comment}</td>
				<td>
					<span
						className={`badge badge-${
							item.status !== "pending" ? "success" : "danger"
						}`}
					>
						{item.status}
					</span>
				</td>
				<td>{item.author}</td>
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
				<td>{item.time}</td>
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
							<DropdownItem
								onClick={(e) => {
									e.preventDefault();
									this.updateChange(item._id);
								}}
							>
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

	render = () => {
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
									<Row className="align-items-center">
										<Col className="thead-light" lg="1">
											Filter:
										</Col>
										<Col lg="3">
											<select
												onChange={(e) => this.reviewsFilter(e)}
												className="form-control form-control-md"
											>
												<option value="none" disabled hidden selected>
													Rating (số sao)
												</option>
												<option value="none">Tất cả</option>
												<option value="1">Nhỏ hơn 3</option>
												<option value="2">3 - 4</option>
												<option value="3">4 - 4.75</option>
												<option value="4">4.75 - 5</option>
											</select>
										</Col>
										<Col lg="3">
											<select
												onChange={(e) => this.statusFilter(e)}
												className="form-control form-control-md"
											>
												<option value="none" disabled hidden selected>
													Tình trạng
												</option>
												<option value="">Tất cả</option>
												<option value="pending">pending</option>
												<option value="verified">verified</option>
											</select>
										</Col>
										<Col lg="5">
											<Input
												className="form-control-alternative"
												placeholder="Search"
												type="text"
												onChange={(e) => this.searchFilter(e)}
											/>
										</Col>
									</Row>
								</CardHeader>
								<Table className="align-items-center table-flush" responsive>
									<thead className="thead-light">
										<tr>
											<th scope="col">Comment tại</th>
											<th scope="col">Nội dung</th>
											<th scope="col">Tình trạng</th>
											<th scope="col">Người review</th>
											<th scope="col">Đánh giá</th>
											<th scope="col">Thời gian</th>
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
				</Container>
			</>
		);
	};
}

export default Reviews;
