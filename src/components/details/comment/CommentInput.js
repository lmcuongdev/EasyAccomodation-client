import React, { Component } from "react";
import RateInput from "../rate/RateInput";

export class CommentInput extends Component {
	constructor(props) {
		super(props);
		this.state = {
			rating: 0,
			content: "",
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleClick = this.handleClick.bind(this);
	}

	handleChange(event) {
		this.setState({ [event.target.name]: event.target.value });
	}

	handleClick() {
		console.log(this.state);
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
									className="form-control"
									placeholder="Comment *"
									name="content"
									value={this.state.content}
									onChange={this.handleChange}
									rows="6"
								></textarea>
							</div>
							<button className="btn btn-primary" onClick={this.handleClick}>
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
