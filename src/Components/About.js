import React from "react";
import AboutBackground from "../Assets/about-background.png";
import AboutBackgroundImage from "../Assets/about-background-image.png";
import { BsFillPlayCircleFill } from "react-icons/bs";

const About = () => {
	return (
		<div id="about" className="about-section-container">
			<div className="about-background-image-container">
				<img src={AboutBackground} alt="" />
			</div>
			<div className="about-section-image-container">
				<img src={AboutBackgroundImage} alt="" />
			</div>
			<div className="about-section-text-container">
				<p className="primary-subheading">About</p>
				<h1 className="primary-heading">
					Food Is An Important Part Of A Balanced Diet
				</h1>
				<p className="primary-text">
					Forget the ordinary, dine like the extraordinary! FOODIE 
					brings a touch of magic to your mealtimes. We source our ingredients
					from local farms and family producers, ensuring the highest quality
					and freshest flavors. 
				</p>
				<p className="primary-text">
          Our chefs, who are masters of their craft, blend
					tradition with a touch of innovation to create dishes that are both
					familiar and surprising. Whether you're looking for a romantic night
					in or a family feast,FOODIE  offers an experience that goes
					beyond just a meal. Order now and taste the difference!
				</p>
				<div className="about-buttons-container">
					<button className="secondary-button">Learn More</button>
					<button className="watch-video-button">
						<BsFillPlayCircleFill /> Watch Video
					</button>
				</div>
			</div>
		</div>
	);
};

export default About;
