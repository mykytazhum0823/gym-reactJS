import React from "react";

const Featured = () => {
	return (
		<section
			className="feature-wrap bg-alb section-padding"
			style={{ backgroundColor: "rgb(255, 255, 255)" }}>
			<div className="container">
				<div className="row align-items-center">
					<div className="col-xl-6 col-lg-12">
						<div className="feature-content">
							<div className="feature-content-title content-title v6 mt-0">
								<h2>Are You Find Gym'</h2>
								<p>
									Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
									diam nonumy eirmod tempor invidunt ut labore et dolore magna.
								</p>
							</div>
							<div className="feature-box-wrap v1">
								<div className="feature-box-item">
									<div className="feature-icon">
										<i className="flaticon-balanced-diet"></i>
									</div>
									<div className="feature-box-text">
										<h5>Visit Our Gym's</h5>
										<p>
											Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
											sed diam nonumy eirmod tempor Invidunt.
										</p>
									</div>
								</div>
								<div className="feature-box-item v1">
									<div className="feature-icon">
										<i className="flaticon-body-scale"></i>
									</div>
									<div className="feature-box-text">
										<h5>Gym's Owner</h5>
										<a href="about.html" className="btn v10">
											List Your Club with us
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="col-xl-6  col-lg-12">
						<div className="img-comp-container">
							<div className="img-comp-slider">
								<span className="left-arrow las la-angle-left"></span>
								<span className="right-arrow las la-angle-right"></span>
							</div>
							<div className="img-comp-responsive">
								<div className="img-comp-img">
									<img src="assets/img/comp-slider-1.png" alt="" />
								</div>
								<div
									className="img-comp-img img-comp-overlay"
									id="img-comp-overlay">
									<img src="assets/img/comp-slider-2.png" alt="" />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Featured;
