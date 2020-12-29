import axios from "axios";
import React, { Component } from "react";
import RateInput from "../rate/RateInput";

export class CommentInput extends Component {
	constructor(props) {
		super(props);
		this.state = {
			rating: 0,
			comment: "",
		};

		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(event) {
		let { name, value } = event.target;

		if (name === "rating") value = Number(value);
		this.setState({ [name]: value });
	}

	render() {
		return (
			<div className="comments-container">
				<div id="comments-list" className="comments-list">
					<div className="comment-main-level">
						<div className="comment-avatar">
							<img
								src="http://i9.photobucket.com/albums/a88/creaticode/avatar_2_zps7de12f8b.jpg"
								alt=""
							/>
						</div>
						<div className="comment-box">
							<RateInput handleChange={this.handleChange} />
							<div className="form-group">
								<textarea
									className={`form-control ${
										this.props.alert && "border border-" + this.props.alert.type
									}`}
									placeholder="Comment *"
									name="comment"
									value={this.state.comment}
									onChange={this.handleChange}
									rows="6"
								></textarea>
							</div>
							<button
								className="btn btn-primary"
								onClick={() => {
									this.setState({ rating: 0, comment: "" });
									this.props.submitReview(this.state);
								}}
							>
								Send Message
							</button>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default CommentInput;
