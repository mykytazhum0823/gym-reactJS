import React from "react";

//Owl Carousel Libraries and Module
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "./hero.css";

const options = {
	margin: 30,
	responsiveClass: true,
	nav: true,
	autoplay: false,
	smartSpeed: 1000,
	responsive: {
		0: {
			items: 1,
		},
		400: {
			items: 1,
		},
		600: {
			items: 1,
		},
		700: {
			items: 1,
		},
		1000: {
			items: 1,
		},
	},
};
const Hero = () => {
	return (
		<div className="hero-wrap v1">
			<OwlCarousel
				className="slider-items hero-slider-v1 owl-carousel"
				{...options}>
				<div className="item">
					<div className="hero-slider-item bg-f hero-bg-7">
						<div className="container">
							<div className="row">
								<div className="col-lg-10 offset-lg-1 col-md-12">
									<div className="hero-content">
										<h1>
											Outdoor Gym Now
											<span> Open</span> With <span>15%</span>
											Discount
										</h1>
										<div className="hero-btn">
											<a href="shop.html" className="btn v1">
												<i className="flaticon-location"></i>Find Gym's
											</a>
											<a href="contact.html" className="btn v4">
												Enter Location Now
											</a>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="item">
					<div className="hero-slider-item bg-f hero-bg-6">
						<div className="overlay bg-charcole op-6"></div>
						<div className="container">
							<div className="row">
								<div className="col-md-12">
									<div className="hero-content">
										<h1>
											Your Trusted <span>Fitness</span>
											Studio In Town
										</h1>
										<div className="hero-btn">
											<a href="className.html" className="btn v1">
												Find Gym's
											</a>
											<a href="contact.html" className="btn v4">
												Enter Location Now
											</a>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="item">
					<div className="hero-slider-item bg-f hero-bg-8">
						<div className="overlay bg-charcole op-4"></div>
						<div className="container">
							<div className="row">
								<div className="col-lg-10 offset-lg-1 col-md-12">
									<div className="hero-content">
										<h1>
											Building <span>Confidence</span> <br /> Building{" "}
											<span>Fitness</span>
										</h1>
										<div className="hero-btn">
											<a href="className.html" className="btn v1">
												Find Gym's
											</a>
											<a href="contact.html" className="btn v4">
												Enter Location Now
											</a>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</OwlCarousel>
		</div>
	);
};

export default Hero;
