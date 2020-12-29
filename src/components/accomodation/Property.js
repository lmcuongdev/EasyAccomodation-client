import React from "react";
import axios from "axios";
import { toEng } from "../Convert";
import AuthContext from "../../contexts/AuthContext";

import "./css/Property.css";

import PropertyItemHorizontal from "./PropertyItemHorizontal";
import PropertyItem from "./PropertyItem";

class Property extends React.Component {
	static contextType = AuthContext;

	constructor(props) {
		super(props);
		this.state = {
			accomod_list: [],
			alert: null,
		};

		this.handleRemove = this.handleRemove.bind(this);
	}

	isEmpty = (inputObject) => {
		return Object.keys(inputObject).length === 0;
	};

	orientateItem() {
		switch (this.props.orientation) {
			case "vertical":
				return this.state.accomod_list
					.filter((item) => {
						if (!this.isEmpty(this.props.condition)) {
							let condition = this.props.condition;
							return (
								(toEng(item.description.toLowerCase()).includes(
									condition.search_text
								) ||
									toEng(item.title.toLowerCase()).includes(
										condition.search_text
									)) &&
								item.type.includes(condition.type) &&
								item.area >= parseInt(condition.size) &&
								item.price >= parseInt(condition.minValue) &&
								item.price <= parseInt(condition.maxValue)
							);
						}
						return true;
					})
					.map((item) => {
						return (
							<PropertyItem
								_id={item._id}
								title={item.title}
								description={item.description}
								number_of_room={item.number_of_room}
								price={item.price}
								is_available={item.is_available}
								ward={item.ward}
								district={item.district}
								area={item.area}
							/>
						);
					});
			case "horizontal":
				if (this.props.myAccomod) {
					return this.state.accomod_list.map((item, index) => (
						<PropertyItemHorizontal
							key={index}
							accommod={item}
							myAccomod={this.props.myAccomod}
							isVerified={item.is_verified}
							editable={false}
							sendRequest={this.state.sendRequest}
							handleRemove={this.handleRemove}
						/>
					));
				} else {
					return [
						<PropertyItemHorizontal is_available="true" />,
						<PropertyItemHorizontal />,
					];
				}

			default:
				break;
		}
	}

	handleRemove(id) {
		axios({
			method: "DELETE",
			url: `${process.env.REACT_APP_API_URL}/accommodations/${id}`,
			headers: { Authorization: `Bearer ${this.context.state.token}` },
		})
			.then((res) => {
				this.setState((prev) => ({
					...prev,
					accomod_list: prev.accomod_list.filter((item) => item._id !== id),
				}));
			})
			.catch((err) => {
				this.setState({
					alert: { message: err.response?.data.message, type: "danger" },
				});
			});
	}

	componentDidMount() {
		// check if this component should
		// load data of this owner
		if (this.props.myAccomod) {
			console.log(this.context.state.userId);
			console.log(this.context.state.token);
			axios
				.get(
					`${process.env.REACT_APP_API_URL}/users/${this.context.state.userId}/accommodations`,
					{ headers: { Authorization: `Bearer ${this.context.state.token}` } }
				)
				.then((resp) => {
					this.setState({ accomod_list: resp.data.accommodations });
				})
				.catch((err) => {
					this.setState({ error: err.response?.data.message });
				});
		}
		// load all accommod
		if (this.props.all) {
			axios
				.get(`${process.env.REACT_APP_API_URL}/accommodations`)
				.then((res) => {
					const data = res.data.accommodations;
					this.setState({ accomod_list: data });
				});
		}

		// if (this.condition) {
		// 	if (this.condition.order) {
		// 		this.sortByPriceAsc();
		// 	} else {
		// 		this.sortByPriceAsc();
		// 	}
		// }
	}

	render() {
		return (
			<>
				<div className="row">
					{this.state.alert && (
						<div className={`alert alert-${this.state.alert.type}`}>
							{this.state.alert.message}
						</div>
					)}
					{this.orientateItem()}
				</div>
			</>
			// <section id="aa-latest-property">
			// 	<div className="container">
			// 		<div className="aa-latest-property-area">
			// 			<div className="aa-title alert alert-danger">dsa</div>
			// 			<div className="aa-latest-properties-content">
			// 				<div className="row">{this.orientateItem()}</div>
			// 			</div>
			// 		</div>
			// 	</div>
			// </section>
		);
	}
}

export default Property;
