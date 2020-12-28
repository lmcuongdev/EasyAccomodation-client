import React, { Component } from "react";
import Modal from "react-modal";

import "./css/Report.css";

export class Report extends Component {
	constructor(props) {
		super(props);
		this.state = {
			show: false,
			content: "",
			type: "",
		};
	}

	handleClose = () => {
		this.setState({ show: false });
	};

	handleShow = () => {
		this.setState({ show: true });
	};

	handleChange = (event) => {
		this.setState({ [event.target.name]: event.target.value });
	};

	handleClick = () => {
		console.log(this.state);
		this.handleClose();
	};

	render() {
		const customStyles = {
			content: {
				top: "50%",
				left: "50%",
				right: "auto",
				bottom: "auto",
				marginRight: "-50%",
				width: "35%",
				transform: "translate(-50%, -50%)",
				padding: "0",
			},
		};

		return (
			<div>
				<label onClick={this.handleShow} className="btn btn-secondary btn-lg">
					Report
				</label>
				<Modal
					isOpen={this.state.show}
					onRequestClose={this.handleClose}
					style={customStyles}
					ariaHideApp={false}
					className=" modal-content "
				>
					<div className="headerCustom">
						<button type="button" className="close" onClick={this.handleClose}>
							<span aria-hidden="true">×</span>
						</button>
						<h4 className="text-center titleCustom">
							{" "}
							Tin rao vặt này có vấn đề gì?
						</h4>
					</div>
					<div className="bodyCustom">
						<div className="report-accomod" onChange={this.handleChange}>
							<div>
								<label>
									<input type="radio" name="type" value="1" />
									<span>Lừa đảo</span>
								</label>
							</div>
							<div>
								<label>
									<input type="radio" name="type" value="2" />
									<span>Trùng lặp</span>
								</label>
							</div>
							<div>
								<label>
									<input type="radio" name="type" value="3" />
									<span>Hàng đã bán</span>
								</label>
							</div>
							<div>
								<label>
									<input type="radio" name="type" value="4" />
									<span>Không liên lạc được</span>
								</label>
							</div>
							<div>
								<label>
									<input type="radio" name="type" value="5" />
									<span>Thông tin không đúng thực tế</span>
								</label>
							</div>
						</div>
						<div className="report-accomod">
							<textarea
								name="content"
								rows="3"
								style={{ width: "100%", padding: "10px", margin: "10px" }}
								placeholder="Mô tả chi tiết thêm"
								value={this.state.content}
								onChange={this.handleChange}
							></textarea>
						</div>
						<div className="report-accomod">
							<button
								className="btn btn-success btn-block"
								style={{ margin: "10px" }}
								onClick={this.handleClick}
							>
								Gửi
							</button>
						</div>
					</div>
				</Modal>
			</div>
		);
	}
}

export default Report;
