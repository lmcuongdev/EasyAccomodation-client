import React, { Component } from "react";
import "./NewPost.css";
import PreviewImage from "./PreviewImage";

export class Rent_Accomod extends Component {
	render() {
		return (
			<div className="page-wrapper p-t-45 p-b-50">
				<div className="wrapper wrapper--w790">
					<div className="card card-5">
						<div className="progress">
							<div className="progress-bar progress-color progress-2">
								<h3>2/3</h3>
							</div>
						</div>
						<div className="card-heading">
							<button
								className="btn btn-info back-btn"
								onClick={this.props.prevPage}
							>
								<i className="fa fa-arrow-circle-left"></i>
								Back
							</button>
							<h2 className="title">Thong tin ve phong tro</h2>
						</div>
						<div className="card-body">
							<div className="form-row">
								<div className="name">Loai phong</div>
								<div className="value">
									<div className="input-group">
										<select
											name="subject"
											className="input--style-5"
											id="select"
										>
											<option disabled="disabled" selected="selected">
												Choose option
											</option>
											<option>Subject 1</option>
											<option>Subject 2</option>
											<option>Subject 3</option>
										</select>
									</div>
								</div>
							</div>
							<div className="form-row">
								<div className="name">Gia</div>
								<div className="value">
									<div className="input-group">
										<input
											className="input--style-5"
											type="text"
											name="company"
										/>
									</div>
								</div>
							</div>
							<div className="form-row">
								<div className="name">Dien tich</div>
								<div className="value">
									<div className="input-group">
										<input
											className="input--style-5"
											type="text"
											name="company"
										/>
									</div>
								</div>
							</div>
							<div className="form-row p-t-20 col-md-12">
								<div className="col-md-6">
									<label className="label label--block">Phong tam </label>
									<div className="p-t-15 col-md-3">
										<label className="radio-container m-r-55">
											Co
											<input type="radio" name="bathroom" />
											<span className="checkmark"></span>
										</label>
										<label className="radio-container">
											Khong
											<input type="radio" name="bathroom" />
											<span className="checkmark"></span>
										</label>
									</div>
								</div>
								<div className="col-md-6">
									<label className="label label--block">Phong bep </label>
									<div className="p-t-15 col-md-3">
										<label className="radio-container m-r-55">
											Co
											<input type="radio" name="kitchen" />
											<span className="checkmark"></span>
										</label>
										<label className="radio-container">
											Khong
											<input type="radio" name="kitchen" />
											<span className="checkmark"></span>
										</label>
									</div>
								</div>
								<div className="col-md-6">
									<label className="label label--block">Dieu hoa </label>
									<div className="p-t-15 col-md-3">
										<label className="radio-container m-r-55">
											Co
											<input type="radio" name="air-conditioner" />
											<span className="checkmark"></span>
										</label>
										<label className="radio-container">
											Khong
											<input type="radio" name="air-conditioner" />
											<span className="checkmark"></span>
										</label>
									</div>
								</div>
								<div className="col-md-6">
									<label className="label label--block">Ban cong </label>
									<div className="p-t-15 col-md-3">
										<label className="radio-container m-r-55">
											Co
											<input type="radio" name="balcony" />
											<span className="checkmark"></span>
										</label>
										<label className="radio-container">
											Khong
											<input type="radio" name="balcony" />
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
											className="input--style-5"
											name="company"
											rows="3"
										></textarea>
									</div>
								</div>
							</div>
							<PreviewImage />
							<div>
								<button
									className="btn btn--radius-2 btn--red"
									onClick={this.props.nextPage}
								>
									Continue
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Rent_Accomod;
