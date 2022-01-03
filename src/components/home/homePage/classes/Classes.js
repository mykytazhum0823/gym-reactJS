import React from "react";

const Classes = () => {
	return (
		<section class="class-wrap v1 section-padding">
			<div className="container">
				<div className="row align-items-start mb-5">
					<div className="col-md-6">
						<div className="section-title v1">
							<h2>Today's Class</h2>
						</div>
					</div>
					<div className="col-md-6 sm-none">
						<div className="text-md-end">
							<a href="class.html" class="btn v3">
								View All Classes
							</a>
						</div>
					</div>
				</div>
				<div class="row">
					<div class="col-xl-3 col-lg-4 col-md-6 col-sm-6">
						<div className="class-item">
							<div className="class-img">
								<div className="overlay op-8 bg-red"></div>
								<img
									className="img-fluid"
									src="assets/img/class/class-1.jpg"
									alt=""
								/>
								<a href="class.html" class="btn v9">
									Join Now
								</a>
							</div>
							<div className="class-info">
								<h5>Abs Of Steel</h5>
								<p>With Chris Rodrigues</p>
								<span>Sunday To Saturday (9:00 AM - 9:50 AM)</span>
								<a href="class-details.html" class="link v1">
									View Details
								</a>
							</div>
						</div>
					</div>
					<div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
						<div className="class-item">
							<div className="class-img">
								<div className="overlay op-8 bg-red"></div>
								<img
									className="img-fluid"
									src="assets/img/class/class-2.jpg"
									alt=""
								/>
								<a href="class.html" class="btn v9">
									Join Now
								</a>
							</div>
							<div className="class-info">
								<h5>Total Body Conditioning</h5>
								<p>With Chris Rodrigues</p>
								<span>Sunday To Saturday (9:00 AM - 9:50 AM)</span>
								<a href="class-details.html" class="link v1">
									View Details
								</a>
							</div>
						</div>
					</div>
					<div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
						<div className="class-item">
							<div className="class-img">
								<div className="overlay op-8 bg-red"></div>
								<img
									className="img-fluid"
									src="assets/img/class/class-3.jpg"
									alt=""
								/>
								<a href="class.html" class="btn v9">
									Join Now
								</a>
							</div>
							<div className="class-info">
								<h5>Body Blast</h5>
								<p>With Chris Rodrigues</p>
								<span>Sunday To Saturday (9:00 AM - 9:50 AM)</span>
								<a href="class-details.html" class="link v1">
									View Details
								</a>
							</div>
						</div>
					</div>
					<div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
						<div className="class-item">
							<div className="class-img">
								<div className="overlay op-8 bg-red"></div>
								<img
									className="img-fluid"
									src="assets/img/class/class-4.jpg"
									alt=""
								/>
								<a href="class-details.html" class="btn v9">
									Join Now
								</a>
							</div>
							<div className="class-info">
								<h5>Flow & Restore Yoga</h5>
								<p>With Chris Rodrigues</p>
								<span>Sunday To Saturday (9:00 AM - 9:50 AM)</span>
								<a href="class.html" class="link v1">
									View Details
								</a>
							</div>
						</div>
					</div>
				</div>
				<div className="row lg-none mb-30">
					<div className="col-12">
						<div className="text-center">
							<a href="class.html" class="btn v3">
								View All Classes
							</a>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Classes;
