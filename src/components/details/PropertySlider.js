import React from "react";

import Image1 from "../../images/test.jpg";
import Image2 from "../../images/logo512.png";

import Carousel from "react-bootstrap/Carousel";

import "./css/PropertySlider.css";

class PropertySlider extends React.Component {
	render() {
		return (
			<div className="gallery-property">
				<Carousel>
					{this.props.images.map((each, key) => {
						return (
							<Carousel.Item>
								<img
									key={key}
									className="d-block w-100"
									src={each}
									alt="First slide"
								/>
								{/* <Carousel.Caption>
							<h3>First slide label</h3>
							<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
						</Carousel.Caption> */}
							</Carousel.Item>
						);
					})}
				</Carousel>
			</div>
		);
	}
}

export default PropertySlider;
