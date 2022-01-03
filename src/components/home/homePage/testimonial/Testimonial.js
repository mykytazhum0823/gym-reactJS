import React from "react";

//Owl Carousel Libraries and Module
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const options = {
	margin: 30,
	responsiveClass: true,
	nav: false,
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

const Testimonial = () => {
	return (
		<section className="testimonial-wrap v2 bg-f test-bg-3">
			<div className="container pos-rel">
				<div className="row">
					<div className="col-md-12">
						<OwlCarousel
							className="slider-items testimonial-slider-v2 owl-carousel "
							{...options}>
							<div className="owl-stage-outer">
								<div
									className="owl-stage"
									style={{
										transform: "translate3d(-2772px, 0px, 0px)",
										transition: "all 0s ease 0s",
										width: "9702px",
									}}>
									<div className="owl-item cloned" style={{ width: "1386px" }}>
										<div className="item">
											<div className="testimonial-item">
												<div className="container px-0">
													<div className="row align-items-center">
														<div className="col-lg-10 offset-lg-1">
															<div className="testimonial-text">
																<h2>What Our Clients Say</h2>
																<div className="client-quote">
																	<p>
																		"Lorem ipsum dolor sit amet, consetetur
																		sadipscing elitr, sed diam nonu my eirmod
																		tempor invidunt ut labore et dolore magna
																		aliquyam erat, sed diam voluptua. At vero
																		eos et accusam et At vero eos et sed diam
																		Voluptua . At vero eos et accusam e
																		accusamjusto."
																	</p>
																</div>
																<div className="client-info-wrap">
																	<div className="client-info">
																		<div className="client-img">
																			<img
																				src="assets/img/client01.jpg"
																				alt=""
																			/>
																		</div>
																		<div className="client-details">
																			<h5>Alex G. Hansen</h5>
																			<p>Banker, USA</p>
																		</div>
																	</div>
																</div>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div className="owl-item cloned" style={{ width: "1386px" }}>
										<div className="item">
											<div className="testimonial-item">
												<div className="container px-0">
													<div className="row align-items-center">
														<div className="col-lg-10 offset-lg-1">
															<div className="testimonial-text">
																<h2>What Our Clients Say</h2>
																<div className="client-quote">
																	<p>
																		"Lorem ipsum dolor sit amet, consetetur
																		sadipscing elitr, sed diam nonu my eirmod
																		tempor invidunt ut labore et dolore magna
																		aliquyam erat, sed diam voluptua. At vero
																		eos et accusam et At vero eos et sed diam
																		Voluptua . At vero eos et accusam e
																		accusamjusto."
																	</p>
																</div>
																<div className="client-info-wrap">
																	<div className="client-info">
																		<div className="client-img">
																			<img
																				src="assets/img/reviewer-1.png"
																				alt=""
																			/>
																		</div>
																		<div className="client-details">
																			<h5>Mark Whon</h5>
																			<p>Actor, UK</p>
																		</div>
																	</div>
																</div>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div className="owl-item active" style={{ width: "1386px" }}>
										<div className="item">
											<div className="testimonial-item">
												<div className="container px-0">
													<div className="row align-items-center">
														<div className="col-lg-10 offset-lg-1">
															<div className="testimonial-text">
																<h2>What Our Clients Say</h2>
																<div className="client-quote">
																	<p>
																		"Lorem ipsum dolor sit amet, consetetur
																		sadipscing elitr, sed diam nonu my eirmod
																		tempor invidunt ut labore et dolore magna
																		aliquyam erat, sed diam voluptua. At vero
																		eos et accusam et At vero eos et sed diam
																		Voluptua . At vero eos et accusam e
																		accusamjusto."
																	</p>
																</div>
																<div className="client-info-wrap">
																	<div className="client-info">
																		<div className="client-img">
																			<img
																				src="assets/img/reviewer-2.png"
																				alt=""
																			/>
																		</div>
																		<div className="client-details">
																			<h5>Tony Stark</h5>
																			<p>Teacher, Canada</p>
																		</div>
																	</div>
																</div>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div className="owl-item" style={{ width: "1386px" }}>
										<div className="item">
											<div className="testimonial-item">
												<div className="container px-0">
													<div className="row align-items-center">
														<div className="col-lg-10 offset-lg-1">
															<div className="testimonial-text">
																<h2>What Our Clients Say</h2>
																<div className="client-quote">
																	<p>
																		"Lorem ipsum dolor sit amet, consetetur
																		sadipscing elitr, sed diam nonu my eirmod
																		tempor invidunt ut labore et dolore magna
																		aliquyam erat, sed diam voluptua. At vero
																		eos et accusam et At vero eos et sed diam
																		Voluptua . At vero eos et accusam e
																		accusamjusto."
																	</p>
																</div>
																<div className="client-info-wrap">
																	<div className="client-info">
																		<div className="client-img">
																			<img
																				src="assets/img/client01.jpg"
																				alt=""
																			/>
																		</div>
																		<div className="client-details">
																			<h5>Alex G. Hansen</h5>
																			<p>Banker, USA</p>
																		</div>
																	</div>
																</div>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div className="owl-item" style={{ width: "1386px" }}>
										<div className="item">
											<div className="testimonial-item">
												<div className="container px-0">
													<div className="row align-items-center">
														<div className="col-lg-10 offset-lg-1">
															<div className="testimonial-text">
																<h2>What Our Clients Say</h2>
																<div className="client-quote">
																	<p>
																		"Lorem ipsum dolor sit amet, consetetur
																		sadipscing elitr, sed diam nonu my eirmod
																		tempor invidunt ut labore et dolore magna
																		aliquyam erat, sed diam voluptua. At vero
																		eos et accusam et At vero eos et sed diam
																		Voluptua . At vero eos et accusam e
																		accusamjusto."
																	</p>
																</div>
																<div className="client-info-wrap">
																	<div className="client-info">
																		<div className="client-img">
																			<img
																				src="assets/img/reviewer-1.png"
																				alt=""
																			/>
																		</div>
																		<div className="client-details">
																			<h5>Mark Whon</h5>
																			<p>Actor, UK</p>
																		</div>
																	</div>
																</div>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div className="owl-item cloned" style={{ width: "1386px" }}>
										<div className="item">
											<div className="testimonial-item">
												<div className="container px-0">
													<div className="row align-items-center">
														<div className="col-lg-10 offset-lg-1">
															<div className="testimonial-text">
																<h2>What Our Clients Say</h2>
																<div className="client-quote">
																	<p>
																		"Lorem ipsum dolor sit amet, consetetur
																		sadipscing elitr, sed diam nonu my eirmod
																		tempor invidunt ut labore et dolore magna
																		aliquyam erat, sed diam voluptua. At vero
																		eos et accusam et At vero eos et sed diam
																		Voluptua . At vero eos et accusam e
																		accusamjusto."
																	</p>
																</div>
																<div className="client-info-wrap">
																	<div className="client-info">
																		<div className="client-img">
																			<img
																				src="assets/img/reviewer-2.png"
																				alt=""
																			/>
																		</div>
																		<div className="client-details">
																			<h5>Tony Stark</h5>
																			<p>Teacher, Canada</p>
																		</div>
																	</div>
																</div>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div className="owl-item cloned" style={{ width: "1386px" }}>
										<div className="item">
											<div className="testimonial-item">
												<div className="container px-0">
													<div className="row align-items-center">
														<div className="col-lg-10 offset-lg-1">
															<div className="testimonial-text">
																<h2>What Our Clients Say</h2>
																<div className="client-quote">
																	<p>
																		"Lorem ipsum dolor sit amet, consetetur
																		sadipscing elitr, sed diam nonu my eirmod
																		tempor invidunt ut labore et dolore magna
																		aliquyam erat, sed diam voluptua. At vero
																		eos et accusam et At vero eos et sed diam
																		Voluptua . At vero eos et accusam e
																		accusamjusto."
																	</p>
																</div>
																<div className="client-info-wrap">
																	<div className="client-info">
																		<div className="client-img">
																			<img
																				src="assets/img/client01.jpg"
																				alt=""
																			/>
																		</div>
																		<div className="client-details">
																			<h5>Alex G. Hansen</h5>
																			<p>Banker, USA</p>
																		</div>
																	</div>
																</div>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							{/* <div className="owl-nav disabled">
								<button role="presentation" className="owl-prev">
									<span aria-label="Previous">Prev</span>
								</button>
								<button role="presentation" className="owl-next">
									<span aria-label="Next">Next</span>
								</button>
							</div>
							<div className="owl-dots">
								<button className="owl-dot active">
									<span></span>
								</button>
								<button className="owl-dot">
									<span></span>
								</button>
								<button className="owl-dot">
									<span></span>
								</button>
							</div> */}
						</OwlCarousel>
					</div>
				</div>
			</div>
			<div className="quote-img md-none">
				<img src="assets/img/quote-2.png" alt="" />
			</div>
		</section>
	);
};

export default Testimonial;
