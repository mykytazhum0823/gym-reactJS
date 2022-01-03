import React from "react";

const Pricing = () => {
	return (
		<div className="section-full p-t120 p-b90 site-bg-gray-light">
			<div className="container">
				{/* // TITLE START */}
				<div className="section-head center wt-small-separator-outer">
					<div className="wt-small-separator site-text-secondry">
						<div className="sep-leaf-left"></div>
						<div>Pricing</div>
					</div>
					<h2>Our Pricing Plan</h2>
				</div>
				{/* //TITLE END */}

				<div className="section-content">
					<div className="pricing-block-outer2">
						<div className="row justify-content-center">
							<div className="col-lg-4 col-md-6 m-b30">
								<div className="pricing-table-2">
									<div className="p-table-title">
										<h4 className="wt-title">Standard</h4>
									</div>
									<div className="p-table-list">
										<ul>
											<li>Service Locker Room</li>
											<li>Personal Trainer</li>
											<li>Morning Slot</li>
											<li>Yoga classes</li>
											<li>Health Checkup</li>
											<li>Fitness Assessment</li>
										</ul>
									</div>
									<div className="p-table-price">
										<span>$100</span>
										<p>Per/month</p>
									</div>
									<div className="p-table-btn">
										<a
											href="about-1.html"
											className="site-button-secondry site-btn-effect">
											Purchase Now
										</a>
									</div>
								</div>
							</div>

							<div className="col-lg-4 col-md-6 m-b30">
								<div className="pricing-table-2">
									<div className="p-table-title">
										<h4 className="wt-title">Professional</h4>
									</div>
									<div className="p-table-list">
										<ul>
											<li>Service Locker Room</li>
											<li>Personal Trainer</li>
											<li>Morning Slot</li>
											<li>Yoga classes</li>
											<li>Health Checkup</li>
											<li>Fitness Assessment</li>
										</ul>
									</div>
									<div className="p-table-price">
										<span>$150</span>
										<p>Per/month</p>
									</div>
									<div className="p-table-btn">
										<a
											href="about-1.html"
											className="site-button-secondry site-btn-effect">
											Purchase Now
										</a>
									</div>
								</div>
							</div>

							<div className="col-lg-4 col-md-6 m-b30">
								<div className="pricing-table-2">
									<div className="p-table-title">
										<h4 className="wt-title">Ultimate</h4>
									</div>
									<div className="p-table-list">
										<ul>
											<li>Service Locker Room</li>
											<li>Personal Trainer</li>
											<li>Morning Slot</li>
											<li>Yoga classes</li>
											<li>Health Checkup</li>
											<li>Fitness Assessment</li>
										</ul>
									</div>
									<div className="p-table-price">
										<span>$200</span>
										<p>Per/month</p>
									</div>
									<div className="p-table-btn">
										<a
											href="about-1.html"
											className="site-button-secondry site-btn-effect">
											Purchase Now
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Pricing;
