import React from "react";

import "./CommentForm.css";
import Rate from "../rate/Rate";

export class CommentForm extends React.Component {
	formatDate = (date) => {
		if (date) {
			let createdAt = new Date(date);
			return createdAt.toDateString();
		}
	};

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
							<div className="comment-head">
								<h6 className="comment-name">{this.props.author}</h6>
								<span>{this.formatDate(this.props.createdAt)}</span>
								<Rate point={this.props.rating} />
							</div>
							<div className="comment-content">{this.props.comment}</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

CommentForm.defaultProps = {
	comment: "Comment",
	rating: 0,
	createdAt: "Di de tro ve",
	author: "Author",
};

export default CommentForm;
