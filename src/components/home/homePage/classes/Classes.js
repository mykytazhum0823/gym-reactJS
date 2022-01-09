import React from "react";
import '../../assets/css/style.scoped.css';
const Classes = () => {
	return (
		<section className="class-wrap v1 section-padding">
			<div className="container">
				<div className="row align-items-start mb-5">
					<div className="col-md-6">
						<div className="section-title v1">
							<h2>Today's Class</h2>
						</div>
					</div>
					<div className="col-md-6 sm-none">
						<div className="text-md-end">
							<a href="class.html" className="btn v3">
								View All Classes
							</a>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
						<div className="class-item">
							<div className="class-img">
								<div className="overlay op-8 bg-red"></div>
								<img
									className="img-fluid"
									src="assets/img/class/class-1.jpg"
									alt=""
								/>
								<a href="class.html" className="btn v9">
									Join Now
								</a>
							</div>
							<div className="class-info">
								<h5>Abs Of Steel</h5>
								<p>With Chris Rodrigues</p>
								<span>Sunday To Saturday (9:00 AM - 9:50 AM)</span>
								<a href="class-details.html" className="link v1">
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
								<a href="class.html" className="btn v9">
									Join Now
								</a>
							</div>
							<div className="class-info">
								<h5>Total Body Conditioning</h5>
								<p>With Chris Rodrigues</p>
								<span>Sunday To Saturday (9:00 AM - 9:50 AM)</span>
								<a href="class-details.html" className="link v1">
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
								<a href="class.html" className="btn v9">
									Join Now
								</a>
							</div>
							<div className="class-info">
								<h5>Body Blast</h5>
								<p>With Chris Rodrigues</p>
								<span>Sunday To Saturday (9:00 AM - 9:50 AM)</span>
								<a href="class-details.html" className="link v1">
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
								<a href="class-details.html" className="btn v9">
									Join Now
								</a>
							</div>
							<div className="class-info">
								<h5>Flow & Restore Yoga</h5>
								<p>With Chris Rodrigues</p>
								<span>Sunday To Saturday (9:00 AM - 9:50 AM)</span>
								<a href="class.html" className="link v1">
									View Details
								</a>
							</div>
						</div>
					</div>
				</div>
				<div className="row lg-none mb-30">
					<div className="col-12">
						<div className="text-center">
							<a href="class.html" className="btn v3">
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
