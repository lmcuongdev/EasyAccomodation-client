import React, { Component } from "react";
import axios from "axios";
import CommentForm from "./comment/CommentForm";
import CommentInput from "./comment/CommentInput";
import AuthContext from "../../contexts/AuthContext";
export class PropertyComment extends Component {
	static contextType = AuthContext;

	constructor(props) {
		super(props);
		this.state = {
			reviews_list: [],
			alert: null,
		};
		this.submitReview = this.submitReview.bind(this);
	}

	componentDidMount() {
		axios
			.get(
				`${process.env.REACT_APP_API_URL}/accommodations/${this.props.id}/reviews`
			)
			.then((res) => {
				const data = res.data.reviews;
				if (data) {
					this.setState({
						reviews_list: data,

						// alert: { message: err.response?.data.message, type: "danger" },
					});
				}
			});
	}

	submitReview(data) {
		axios
			.post(
				`${process.env.REACT_APP_API_URL}/accommodations/${this.props.id}/reviews/create`,
				data,
				{
					headers: { Authorization: `Bearer ${this.context.state.token}` },
				}
			)
			.then((resp) => {
				this.setState({ alert: { type: "success" } });
				console.log(resp.data);
			});
	}

	render() {
		return (
			<div className="col-md-12">
				<div className="row section-t3">
					<div className="col-sm-12">
						<div className="title-box-d">
							<h3 className="title-d">Comment</h3>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-sm-12">
						{this.context.state.isLoggedIn && (
							<CommentInput
								submitReview={this.submitReview}
								alert={this.state.alert}
							/>
						)}
						<div>
							{this.state.reviews_list.map((item) => {
								if (item.status === "verified") {
									console.log(item.created_at);
									return (
										<CommentForm
											comment={item.comment}
											rating={item.rating}
											createdAt={item.created_at}
											author={item.author.name}
											key={item._id}
										/>
									);
								}
							})}
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default PropertyComment;
