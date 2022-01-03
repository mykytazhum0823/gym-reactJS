import React from "react";

const Blog = () => {
	return (
		<section className="blog-post-wrap section-padding">
			<div className="container pos-rel">
				<div className="row align-items-center mb-5">
					<div className="col-md-7"></div>
					<div className="col-md-5"></div>
				</div>
				<div className="row">
					<div className="col-lg-12">
						<div className="blog-item-wrap v1">
							<div className="blog-item">
								<div className="blog-img">
									<img
										className="img-fluid"
										src="assets/img/blog/blog-1.jpg"
										alt=""
									/>
								</div>
								<div className="blog-content">
									<div className="blog-info">
										<h5>
											<a
												className="blog-card-title"
												href="blog-details-left-sidebar.html">
												Do you Offer classes?{" "}
											</a>
										</h5>
										<a href="contact.html" className="btn v1">
											Contact US
										</a>
										<br />
										<br />
										<br />
										<br />
										<br />
										<br />
										<br />
									</div>
								</div>
							</div>

							<div className="blog-item">
								<div className="blog-img">
									<img
										className="img-fluid"
										src="assets/img/blog/blog-2.jpg"
										alt=""
									/>
								</div>
								<div className="blog-content">
									<div className="blog-info">
										<h5>
											<a
												className="blog-card-title"
												href="blog-details-left-sidebar.html">
												Looking to be a paretner with us?
											</a>
										</h5>
										<a href="contact.html" className="btn v1">
											Contact US
										</a>
										<br />
										<br />
										<br />
										<br />
										<br />
										<br />
										<br />
									</div>
								</div>
							</div>
							<div className="blog-item">
								<div className="blog-img">
									<img
										className="img-fluid"
										src="assets/img/blog/blog-12.jpg"
										alt=""
									/>
								</div>
								<div className="blog-content">
									<div className="blog-info">
										<h5>
											<a
												className="blog-card-title"
												href="blog-details-left-sidebar.html">
												Exercise Advice For Over 30's
											</a>
										</h5>
										<a href="contact.html" className="btn v1">
											Contact US
										</a>
										<br />
										<br />
										<b />
										<br />
										<br />
										<br />
										<br />
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Blog;
