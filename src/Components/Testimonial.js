import React from "react";
import ProfilePic from "../Assets/john-doe-image.png";
import { AiFillStar } from "react-icons/ai";

const Testimonial = () => {
	return (
		<div id="testimonial" className="work-section-wrapper">
			<div className="work-section-top">
				<p className="primary-subheading">Testimonial</p>
				<h1 className="primary-heading">What They Are Saying</h1>
				<p className="primary-text">
					Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et
					elit. Dolor turpis molestie dui magnis facilisis at fringilla quam.
				</p>
			</div>
			<div className="testimonial-section-bottom">
				<img src={ProfilePic} alt="" />
				<p>
					As a working professional, time is always a precious commodity.
					FOODIE has been a lifesaver! Their online ordering is super
					easy, the deliveries are lightning-fast, and the food is absolutely
					delicious. I can still enjoy restaurant-quality meals without leaving
					my apartment after a long day. No more takeout menus and greasy pizza
					- FOODIE has become my go-to for healthy, flavorful dinners
					I can feel good about.
				</p>
				<div className="testimonials-stars-container">
					<AiFillStar />
					<AiFillStar />
					<AiFillStar />
					<AiFillStar />
					<AiFillStar />
				</div>
				<h2>John Doe</h2>
			</div>
		</div>
	);
};

export default Testimonial;
