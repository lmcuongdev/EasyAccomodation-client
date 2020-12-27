import React, { Component } from "react";
import axios from "axios";
import CommentForm from "./comment/CommentForm";
import CommentInput from "./comment/CommentInput";

export class PropertyComment extends Component {
	constructor(props) {
		super(props);
		this.state = {
			reviews_list: [],
		};
	}

	componentDidMount() {
		axios
			.get(
				`https://easy-accommodation-api.herokuapp.com/api/accommodations/${this.props.id}/reviews`
			)
			.then((res) => {
				const data = res.data.reviews;
				if (data) {
					this.setState({ reviews_list: data });
				}
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
						<CommentInput />
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
