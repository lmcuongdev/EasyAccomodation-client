import React, { Component } from "react";

export class PreviewImage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			src: [],
		};
	}

	handleChange = () => {
		for (let file of this.refs.file.files) {
			let reader = new FileReader();
			let url = reader.readAsDataURL(file);

			reader.onloadend = () => {
				this.setState((prevState) => ({
					src: [...prevState.src, reader.result],
				}));
			};
		}
	};

	deleteImage = (index) => {
		console.log(index);
		if (index !== -1) {
			this.setState((prevState) => ({
				src: prevState.src
					.slice(0, index)
					.concat(prevState.src.slice(index + 1)),
			}));
		}
	};

	render() {
		const closeBtn = {
			position: "absolute",
			top: "20px",
			right: "16px",
			cursor: "pointer",
			color: "red",
			fontSize: "20px",
		};

		return (
			<div className="form-row">
				<div className="name">Hinh anh</div>
				<div className="value">
					<div className="input-group">
						<input
							className="input--style-5"
							ref="file"
							type="file"
							multiple={true}
							onChange={this.handleChange}
						/>
					</div>
				</div>
				<div className="preview col-md-12">
					<div className="row">
						{this.state.src.map((item, index) => (
							<div className="col-md-4" style={{ position: "relative" }}>
								<span style={closeBtn} onClick={() => this.deleteImage(index)}>
									x
								</span>
								<img src={item} key={index} />
							</div>
						))}
					</div>
				</div>
			</div>
		);
	}
}

export default PreviewImage;
