import React, { Component } from "react";
import Rent_Accomod from "./Rent_Accomod";
import Rent_Address from "./Rent_Address";
import Rent_Contact from "./Rent_Contact";
import axios from "axios";
import AuthContext from "../../contexts/AuthContext";
import Deadline from "./Deadline";
export class Rent extends Component {
	static contextType = AuthContext;

	constructor(props) {
		super(props);

		this.state = {
			error: null,
			page: "address",
			has_water_heater: false,
			has_private_bathroom: false,
			is_available: false,
			ward: "Dich Vong Hau",
			district: "Cau Giay",
			city: "Ha Noi",
			address: "",
			type: "apartment",
			number_of_room: 2,
			price: 2000000,
			area: 50,
			same_owner: false,
			has_air_condition: false,
			has_balcony: false,
			description: "Nhà trọ gần ĐHQG",
			kitchen: "private",
			name: "Name",
			ownerId: null,
			phone: "",
			title: "Nhà trọ gần ĐHQG",
			is_available: true,
		};

		this.wards = ["Dich Vong Hau", "Nghia Do", "Nghia Tan"];
		this.districts = ["Cau Giay", "Dong Da", "Thanh Xuan"];
		this.cities = ["Ha Noi", "Sai Gon", "Da Nang"];
		this.types = [
			{ name: "motel", label: "Phong tro" },
			{ name: "mini-apartment", label: "Chung cu mini" },
			{ name: "apartment", label: "Chung cu" },
			{ name: "detached-house", label: "Nha nguyen can" },
		];

		this.nextPage = this.nextPage.bind(this);
		this.prevPage = this.prevPage.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.radioChange = this.radioChange.bind(this);
		this.componentDidMount = this.componentDidMount.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	componentDidMount() {
		if (this.props.edit) {
			axios
				.get(
					`${process.env.REACT_APP_API_URL}/accommodations/${this.props.match.params.id}`
				)
				.then((res) => {
					let data = res.data.accommodation;
					console.log(data);
					this.setState(data);
				});
		} else {
			axios
				.get(
					`${process.env.REACT_APP_API_URL}/users/${this.context?.state?.userId}`
				)
				.then((res) => {
					let user = res.data.user;
					this.setState({
						name: user.name,
						phone: user.owner_info.phone,
					});
				});
		}
	}

	handleSubmit(event) {
		event.preventDefault();
		console.log(this.state);
		this.setState({ error: null });
		// should make PUT request
		axios({
			method: this.props.edit ? "PUT" : "POST",
			url: this.props.edit
				? `${process.env.REACT_APP_API_URL}/accommodations/${this.props.match.params.id}`
				: `${process.env.REACT_APP_API_URL}/accommodations/create`,
			data: { ...this.state },
			headers: { Authorization: `Bearer ${this.context.state.token}` },
		})
			.then((resp) => {
				this.context.redirectTo("/");
			})
			.catch((err) => {
				this.setState({ error: err.response?.data?.message });
			});
	}

	handleChange(event) {
		this.setState({ [event.target.name]: event.target.value });
	}

	radioChange(event) {
		this.setState({
			[event.target.name]: event.target.value === "true",
		});
	}

	nextPage() {
		this.setState((prevState) => {
			if (prevState.page === "address") {
				return { page: "accomod" };
			}
			return { page: "contact" };
		});
	}

	prevPage() {
		this.setState((prevState) => {
			if (prevState.page === "accomod") {
				return { page: "address" };
			}
			return { page: "accomod" };
		});
	}

	selectPage() {
		switch (this.state.page) {
			case "address":
				return <Rent_Address nextPage={this.nextPage} />;
			case "accomod":
				return (
					<Rent_Accomod nextPage={this.nextPage} prevPage={this.prevPage} />
				);
			case "contact":
				return (
					<Rent_Contact
						prevPage={this.prevPage}
						name={this.state.name}
						email={this.state.email}
						phone={this.state.phone}
					/>
				);
		}
	}

	render() {
		// return <div>{this.selectPage()}</div>;
		return (
			<div class="wrapper wrapper--w790">
				{this.state.error && (
					<div className="alert alert-danger">{this.state.error}</div>
				)}
				<div class="card card-5">
					<div class="card-heading">
						<h2 class="title">Thong tin nha tro</h2>
					</div>
					<div class="card-body" style={{ paddingTop: "0" }}>
						<form method="POST">
							<div>
								<section className="intro-single">
									<div className="title-single-box">
										<h1 className="title-single">Dia chi</h1>
									</div>
								</section>
								<div className="form-row">
									<div className="name">Thanh pho</div>
									<div className="value">
										<div className="input-group">
											<select
												value={this.state.city}
												onChange={this.handleChange}
												name="city"
												className="input--style-5"
											>
												{this.cities.map((option, index) => (
													<option value={option} key={index}>
														{option}
													</option>
												))}
											</select>
										</div>
									</div>
								</div>
								<div className="form-row">
									<div className="name">Quan, huyen</div>
									<div className="value">
										<div className="input-group">
											<select
												value={this.state.district}
												onChange={this.handleChange}
												name="district"
												className="input--style-5"
											>
												{this.districts.map((option, index) => (
													<option value={option} key={index}>
														{option}
													</option>
												))}
											</select>
										</div>
									</div>
								</div>
								<div className="form-row">
									<div className="name">Phuong, Xa, Thi Tran</div>
									<div className="value">
										<div className="input-group">
											<select
												value={this.state.ward}
												onChange={this.handleChange}
												name="ward"
												className="input--style-5"
											>
												{this.wards.map((option, index) => (
													<option value={option} key={index}>
														{option}
													</option>
												))}
											</select>
										</div>
									</div>
								</div>
								<div className="form-row m-b-55">
									<div className="name">Dia chi cu the</div>
									<div className="value">
										<div className="row row-refine">
											<div className="col-12">
												<div className="input-group-desc">
													<input
														value={this.state.address}
														onChange={this.handleChange}
														className="input--style-5"
														type="text"
														name="address"
													/>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div>
								<section className="intro-single">
									<div className="title-single-box">
										<span className="title-single">Dich vu phong tro</span>
									</div>
								</section>
								<div className="form-row">
									<div className="name">Title</div>
									<div className="value">
										<div className="input-group">
											<input
												value={this.state.title}
												onChange={this.handleChange}
												className="input--style-5"
												type="text"
												name="title"
											/>
										</div>
									</div>
								</div>
								<div className="form-row">
									<div className="name">Loai phong</div>
									<div className="value">
										<div className="input-group">
											<select
												value={this.state.type}
												onChange={this.handleChange}
												name="type"
												className="input--style-5"
											>
												{this.types.map((option, index) => (
													<option value={option.name} key={index}>
														{option.label}
													</option>
												))}
											</select>
										</div>
									</div>
								</div>
								<div className="form-row">
									<div className="name">Gia</div>
									<div className="value">
										<div className="input-group">
											<input
												value={this.state.price}
												onChange={this.handleChange}
												className="input--style-5"
												type="text"
												name="price"
											/>
										</div>
									</div>
								</div>
								<div className="form-row">
									<div className="name">Dien tich</div>
									<div className="value">
										<div className="input-group">
											<input
												value={this.state.area}
												onChange={this.handleChange}
												placeholder="/m2"
												className="input--style-5"
												type="text"
												name="area"
											/>
										</div>
									</div>
								</div>
								<div className="form-row p-t-20 col-md-12">
									<div className="col-md-6">
										<label className="label label--block">
											Phong tam rieng
										</label>
										<div className="p-t-15 col-md-3">
											<label className="radio-container m-r-55">
												Co
												<input
													type="radio"
													name="has_private_bathroom"
													value="true"
													checked={this.state.has_private_bathroom}
													onChange={this.radioChange}
												/>
												<span className="checkmark"></span>
											</label>
											<label className="radio-container">
												Khong
												<input
													type="radio"
													name="has_private_bathroom"
													value="false"
													checked={!this.state.has_private_bathroom}
													onChange={this.radioChange}
												/>
												<span className="checkmark"></span>
											</label>
										</div>
									</div>
									<div className="col-md-6">
										<label className="label label--block">Phong bep </label>
										<div className="p-t-15 col-md-3">
											<label className="radio-container m-r-55">
												Co
												<input
													type="radio"
													name="kitchen"
													value="private"
													checked={this.state.kitchen === "private"}
													onChange={this.handleChange}
												/>
												<span className="checkmark"></span>
											</label>
											<label className="radio-container">
												Khong
												<input
													type="radio"
													name="kitchen"
													value="none"
													checked={this.state.kitchen !== "private"}
													onChange={this.handleChange}
												/>
												<span className="checkmark"></span>
											</label>
										</div>
									</div>
									<div className="col-md-6">
										<label className="label label--block">Dieu hoa </label>
										<div className="p-t-15 col-md-3">
											<label className="radio-container m-r-55">
												Co
												<input
													type="radio"
													name="has_air_condition"
													value="true"
													checked={this.state.has_air_condition}
													onChange={this.radioChange}
												/>
												<span className="checkmark"></span>
											</label>
											<label className="radio-container">
												Khong
												<input
													type="radio"
													name="has_air_condition"
													value="false"
													checked={!this.state.has_air_condition}
													onChange={this.radioChange}
												/>
												<span className="checkmark"></span>
											</label>
										</div>
									</div>
									<div className="col-md-6">
										<label className="label label--block">Ban cong </label>
										<div className="p-t-15 col-md-3">
											<label className="radio-container m-r-55">
												Co
												<input
													type="radio"
													name="has_balcony"
													value="true"
													checked={this.state.has_balcony}
													onChange={this.radioChange}
												/>
												<span className="checkmark"></span>
											</label>
											<label className="radio-container">
												Khong
												<input
													type="radio"
													name="has_balcony"
													value="false"
													checked={!this.state.has_balcony}
													onChange={this.radioChange}
												/>
												<span className="checkmark"></span>
											</label>
										</div>
									</div>
								</div>
								<div className="form-row">
									<div className="name">Mo ta chi tiet</div>
									<div className="value">
										<div className="input-group">
											<textarea
												value={this.state.description}
												onChange={this.handleChange}
												className="input--style-5"
												name="description"
												rows="3"
											></textarea>
										</div>
									</div>
								</div>
								<div className="form-row">
									<div className="name">Hinh anh</div>
									<div className="value">
										<div className="input-group">
											<input
												className="input--style-5"
												type="file"
												name="file"
											/>
										</div>
									</div>
									<div className="preview col-md-12">
										<div className="row">
											<div className="col-md-4">
												<img src={Image} alt="" />
											</div>
											<div className="col-md-4">
												<img src={Image} alt="" />
											</div>
											<div className="col-md-4">
												<img src={Image} alt="" />
											</div>
										</div>
									</div>
								</div>
							</div>
							<div>
								<section className="intro-single">
									<div className="title-single-box">
										<span className="title-single">Thong tin lien lac</span>
									</div>
								</section>
								<div className="form-row">
									<div className="name">Ten</div>
									<div className="value">
										<div className="input-group">
											<input
												value={this.state.name}
												onChange={this.handleChange}
												className="input--style-5"
												type="text"
												name="name"
											/>
										</div>
									</div>
								</div>
								<div className="form-row">
									<div className="name">So dien thoai</div>
									<div className="value">
										<div className="input-group">
											<input
												value={this.state.phone}
												onChange={this.handleChange}
												className="input--style-5"
												type="text"
												name="phone"
											/>
										</div>
									</div>
								</div>
								<div className="form-row">
									<div className="name">Thoi han dang bai</div>
									<div className="value">
										<Deadline />
									</div>
								</div>
							</div>
							<div className="finish">
								<button
									className="btn btn--radius-2 btn--red"
									onClick={this.handleSubmit}
								>
									{this.props.edit ? "Update" : "Tao bai dang"}
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		);
	}
}

export default Rent;
