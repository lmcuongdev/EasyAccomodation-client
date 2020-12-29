import React, { Component } from "react";

export class EditAccomod extends Component {
	render() {
		return (
			<div class="wrapper wrapper--w790">
				<div class="card card-5">
					<div class="card-heading">
						<h2 class="title">Day la trang fake</h2>
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
											<select name="city" className="input--style-5">
												<option disabled>Choose option</option>
												<option value="city_1">City 1</option>
												<option value="city_2">City 2</option>
												<option value="city_3">City 3</option>
											</select>
										</div>
									</div>
								</div>
								<div className="form-row">
									<div className="name">Quan, huyen</div>
									<div className="value">
										<div className="input-group">
											<select name="subject" className="input--style-5">
												<option disabled>Choose option</option>
												<option>Subject 1</option>
												<option>Subject 2</option>
												<option>Subject 3</option>
											</select>
										</div>
									</div>
								</div>
								<div className="form-row">
									<div className="name">Phuong, Xa, Thi Tran</div>
									<div className="value">
										<div className="input-group">
											<select
												name="subject"
												className="input--style-5"
												id="select"
											>
												<option disabled>Choose option</option>
												<option>Subject 1</option>
												<option>Subject 2</option>
												<option>Subject 3</option>
											</select>
										</div>
									</div>
								</div>
								<div className="form-row m-b-55">
									<div className="name">Dia chi cu the</div>
									<div className="value">
										<div className="row row-refine">
											<div className="col-3">
												<div className="input-group-desc">
													<input
														className="input--style-5"
														type="text"
														name="area_code"
													/>
													<label className="label--desc">So nha</label>
												</div>
											</div>
											<div className="col-9">
												<div className="input-group-desc">
													<input
														className="input--style-5"
														type="text"
														name="phone"
													/>
													<label className="label--desc">Ten duong</label>
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
												className="input--style-5"
												type="text"
												name="company"
											/>
										</div>
									</div>
								</div>
								<div className="form-row">
									<div className="name">So dien thoai</div>
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
									<div className="name">Dia chi email</div>
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
							</div>
							<div className="finish">
								<button className="btn btn--radius-2 btn--red">Update</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		);
	}
}

export default EditAccomod;
