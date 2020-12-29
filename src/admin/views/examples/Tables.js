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

class Tables extends React.Component {
	static contextType = AuthContext;

	state = {
		search: "",
		price: 0,
		status: "",
		isDropdown: 0,
		FilterOptions: ["Tên", "Giá", "Tình trạng", "Chủ sở hữu", "Đánh giá"],
		Paging: [],
		Room: [],
	};
	componentDidMount = () => {
		axios.get(`${process.env.REACT_APP_API_URL}/accommodations`).then((res) => {
			this.setState({
				Room: res.data.accommodations.map((item) => ({
					...item,
					price: item.price.toLocaleString() + " VND",
				})),
			});
		});
	};

	searchFilter(event) {
		this.setState({
			search: event.target.value.toString(),
		});
	}

	priceFilter(event) {
		this.setState({
			price: event.target.value,
		});
	}
	statusFilter(event) {
		this.setState({
			status: event.target.value,
		});
	}
	renderItem = () => {
		const filterSearch = this.state.Room.filter((item) => {
			return (
				item.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1
			);
		});
		const filterPrice = filterSearch.filter((item) => {
			switch (this.state.price) {
				case "1":
					return item.price / 1000000 >= 0 && item.price / 1000000 < 2;
				case "2":
					return item.price / 1000000 >= 2 && item.price / 1000000 < 4;
				case "3":
					return item.price / 1000000 >= 4 && item.price / 1000000 < 6;
				case "4":
					return item.price / 1000000 >= 6;
				default:
					return item.price;
			}
		});

		const data = filterPrice.filter((item) => {
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
					<Media className="align-items-center">
						<a
							className="avatar mr-3"
							href="#pablo"
							onClick={(e) => e.preventDefault()}
						>
							<img alt="..." src={item.images[0]} />
						</a>
						<Media>
							<span className="mb-0 text-sm">{item.title}</span>
						</Media>
					</Media>
				</th>
				<td>{item.price}</td>
				<td>
					<span
						className={`badge badge-${
							item.status !== "pending" ? "success" : "danger"
						}`}
					>
						{item.status}
					</span>
				</td>
				<td>{item.name}</td>
				<td>{`${item.ward}, ${item.district}, ${item.city}`}</td>
				<td>{item.views}</td>
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
								href=""
								onClick={(e) =>
									this.context.redirectTo(`/admin/accommodations/${item._id}`)
								}
							>
								Detail
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
								</CardHeader>
								<Table className="align-items-center table-flush" responsive>
									<thead className="thead-light">
										<tr>
											<th scope="col">Phòng trọ</th>
											<th scope="col">Giá cho thuê</th>
											<th scope="col">Tình trạng</th>
											<th scope="col">Chủ sở hữu</th>
											<th scope="col">Địa chỉ</th>
											<th scope="col">View</th>
											<th scope="col" />
										</tr>
									</thead>
									<tbody>{this.renderItem()}</tbody>
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
	}
}

export default Tables;
