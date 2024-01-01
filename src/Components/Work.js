import React from "react";
import PickMeals from "../Assets/pick-meals-image.png";
import ChooseMeals from "../Assets/choose-image.png";
import DeliveryMeals from "../Assets/delivery-image.png";

const Work = () => {
	const workInfoData = [
		{
			image: PickMeals,
			title: "Pick Meals",
			text: "Browse our extensive menu of delicious dishes, from classic comfort food to exotic culinary adventures. We have something for everyone, so filter by dietary restrictions, preferences, or simply explore our curated collections.",
		},
		{
			image: ChooseMeals,
			title: "Choose How Often",
			text: "Order whenever you crave! We offer flexible delivery options, whether you're looking for a one-time treat or a recurring weekly meal plan. You can even schedule deliveries in advance so your fridge is always stocked with goodness.",
		},
		{
			image: DeliveryMeals,
			title: "Fast Deliveries",
			text: "Sit back and relax! Our efficient delivery team ensures your food arrives fresh and hot within the estimated timeframe. We track your order every step of the way, so you'll always know when to expect your culinary delights.",
		},
	];
	return (
		<div className="work-section-wrapper">
			<div className="work-section-top">
				<p className="primary-subheading">Work</p>
				<h1 className="primary-heading">How It Works</h1>
				<p className="primary-text">
					Open our virtual feast for the senses! Our menu boasts a tempting
					array of dishes, from comforting classics to global delicacies.
					Whether you're craving juicy burgers, steaming pasta, or a taste of
					faraway lands, we've got something to tantalize your taste buds.
					Browse by category, dietary preferences, or explore our curated
					collections for inspiration.
				</p>
			</div>
			<div className="work-section-bottom">
				{workInfoData.map((data) => (
					<div className="work-section-info" key={data.title}>
						<div className="info-boxes-img-container">
							<img src={data.image} alt="" />
						</div>
						<h2>{data.title}</h2>
						<p>{data.text}</p>
					</div>
				))}
			</div>
		</div>
	);
};

export default Work;
