import React from "react";

const Faqs = () => {
	return (
		<section className="faq-wrap section-padding">
			<div className="container">
				<div className="row">
					<div className="col-md-12">
						<div className="section-title  text-center mb-5">
							<h2>FAQs</h2>
						</div>
					</div>
					<div className="col-lg-8 offset-lg-2">
						<div className="single-product-accordion">
							<div className="accordion" id="accordionExample">
								<div className="accordion-item">
									<h2 className="accordion-header" id="headingOne">
										<button
											className="accordion-button"
											type="button"
											data-bs-toggle="collapse"
											data-bs-target="#collapseOne"
											aria-expanded="true"
											aria-controls="collapseOne">
											How Much Is Membership At Fitness First?
										</button>
									</h2>
									<div
										id="collapseOne"
										className="accordion-collapse collapse show"
										aria-labelledby="headingOne"
										data-bs-parent="#accordionExample">
										<div className="accordion-body">
											<div className="single-product-text">
												<p>
													Lorem ipsum dolor sit amet, consetetur sadipscing
													elitr, sed diam nonumy eirmod tempor invidunt ut
													labore et dolore magna aliquyam erat, sed diam
													voluptua. At vero eos et accusam et justo duo dolores
													et ea rebum. Stet clita kasd gubergren, no sea
													takimata sanctus est Lorem ipsum dolor sit amet. Lorem
													ipsum dolor sit amet, consetetur sadipscing elitr, sed
													diam nonumy eirmod tempor invidunt ut labore et dolore
													magna aliquyam erat, sed diam voluptua. At vero eos et
													accusam et justo duo dolores et ea rebum. Stet clita
													kasd gubergren,
												</p>
											</div>
										</div>
									</div>
								</div>
								<div className="accordion-item">
									<h2 className="accordion-header" id="headingTwo">
										<button
											className="accordion-button collapsed"
											type="button"
											data-bs-toggle="collapse"
											data-bs-target="#collapseTwo"
											aria-expanded="false"
											aria-controls="collapseTwo">
											What Is The Age Limit To Join Fitness
										</button>
									</h2>
									<div
										id="collapseTwo"
										className="accordion-collapse collapse"
										aria-labelledby="headingTwo"
										data-bs-parent="#accordionExample">
										<div className="accordion-body">
											<p>
												Lorem ipsum, dolor sit, amet consectetur adipisicing
												elit. Eveniet in ad tempora odit omnis voluptatibus quod
												repudiandae nulla facere. Maxime aperiam officia id
												provident, sunt!
											</p>
										</div>
									</div>
								</div>
								<div className="accordion-item">
									<h2 className="accordion-header" id="headingThree">
										<button
											className="accordion-button collapsed"
											type="button"
											data-bs-toggle="collapse"
											data-bs-target="#collapseThree"
											aria-expanded="false"
											aria-controls="collapseThree">
											What If I Want To Cancel My Membership?
										</button>
									</h2>
									<div
										id="collapseThree"
										className="accordion-collapse collapse"
										aria-labelledby="headingThree"
										data-bs-parent="#accordionExample">
										<div className="accordion-body">
											<p>
												Lorem, ipsum dolor sit amet consectetur adipisicing
												elit. Odio quibusdam ex, recusandae sed sint. Nemo saepe
												eius quaerat asperiores praesentium cupiditate ab quod
												beatae a tempora, numquam dolor excepturi illo.
											</p>
										</div>
									</div>
								</div>
								<div className="accordion-item">
									<h2 className="accordion-header" id="headingfour">
										<button
											className="accordion-button collapsed"
											type="button"
											data-bs-toggle="collapse"
											data-bs-target="#collapsefour"
											aria-expanded="false"
											aria-controls="collapsefour">
											Can I Put My Membership On Hold?
										</button>
									</h2>
									<div
										id="collapsefour"
										className="accordion-collapse collapse"
										aria-labelledby="headingfour"
										data-bs-parent="#accordionExample">
										<div className="accordion-body">
											<p>
												Lorem, ipsum dolor sit amet consectetur adipisicing
												elit. Odio quibusdam ex, recusandae sed sint. Nemo saepe
												eius quaerat asperiores praesentium cupiditate ab quod
												beatae a tempora, numquam dolor excepturi illo.
											</p>
										</div>
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

export default Faqs;
