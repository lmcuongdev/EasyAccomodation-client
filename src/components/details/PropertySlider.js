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
					<Carousel.Item>
						<img className="d-block w-100" src={Image1} alt="First slide" />
						{/* <Carousel.Caption>
							<h3>First slide label</h3>
							<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
						</Carousel.Caption> */}
					</Carousel.Item>
					<Carousel.Item>
						<img className="d-block w-100" src={Image2} alt="Third slide" />
						{/* <Carousel.Caption>
							<h3>Second slide label</h3>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
						</Carousel.Caption> */}
					</Carousel.Item>
					<Carousel.Item>
						<img className="d-block w-100" src={Image1} alt="Third slide" />
						{/* <Carousel.Caption>
							<h3>Third slide label</h3>
							<p>
								Praesent commodo cursus magna, vel scelerisque nisl consectetur.
							</p>
						</Carousel.Caption> */}
					</Carousel.Item>
				</Carousel>
			</div>
		);
	}
}

export default PropertySlider;
