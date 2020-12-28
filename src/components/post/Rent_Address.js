import React, { Component } from "react";

import "../auth/css/SignUp.css";
import "./NewPost.css";

export class Rent_Address extends Component {
	render() {
		return (
			<div className="page-wrapper p-t-45 p-b-50">
				<div className="wrapper wrapper--w790">
					<div className="card card-5">
						<div className="progress">
							<div className="progress-bar progress-color progress-1">
								<h3>1/3</h3>
							</div>
						</div>
						<div className="card-heading">
							<div className="title">Dia chi phong tro</div>
						</div>
						<div className="card-body">
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

export default Rent_Address;
