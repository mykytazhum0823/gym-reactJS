import React from "react";
import '../assets/css/style.scoped.css';
const ContactPage = () => {
	const handleSubmit = (e) => {
		e.preventDefault();
		console.log("submit");
	};
	return (
		<React.Fragment>
			<section className="breadcrumb-wrap bg-f br-bg-1">
				<div className="section_subtext v3 trans_text">
					<span>Contact Us</span>
				</div>
				<div className="overlay bg-charcole op-8"></div>
				<div className="breadcrumb-title">
					<h2>
						Contact <span>Us</span>
					</h2>
				</div>
			</section>
			<section className="contact-wrap section-padding">
				<div className="container">
					<div className="row gx-4">
						<div className="col-lg-6">
							<div className="contact-box v1">
								<div className="contact-box-title">
									<h5>Contact Us</h5>
								</div>
								<form
									className="review-form"
									onSubmit={handleSubmit}
									id="contact_form">
									<div
										id="message"
										className="alert alert-danger alert-dismissible fade"></div>
									<div className="row">
										<div className="col-lg-6">
											<div className="form-group v1">
												<input
													id="name"
													name="name"
													type="text"
													placeholder="Your  Full Name*"
													required
												/>
											</div>
											<div className="form-group v1">
												<input
													id="email"
													name="email"
													type="email"
													placeholder="Email Address*"
													required
												/>
											</div>
											<div className="form-group v1">
												<input
													id="phone"
													name="phone"
													type="number"
													placeholder="Phone Number"
												/>
											</div>
											<div className="form-group v1">
												<input
													type="text"
													id="subj"
													name="subj"
													placeholder="Subject"
												/>
											</div>
										</div>
										<div className="col-lg-6">
											<div className="form-group v1">
												<textarea
													name="comment"
													id="comment"
													cols="30"
													rows="10"
													placeholder="Your Messages.."></textarea>
											</div>
										</div>
										<div className="col-lg-12">
											<div className="form-group checkbox">
												<input type="checkbox" id="ts" />
												<label htmlFor="ts">I Accept Your Terms & Conditions</label>
											</div>
											<button type="submit" className="btn v7">
												Send Message
											</button>
										</div>
									</div>
								</form>
							</div>
						</div>
						<div className="col-lg-6">
							<div className="contact-box v2">
								<div className="contact-box-title">
									<h5>Find Us On Goolge Map</h5>
								</div>
								<div id="map">
									<iframe
										title="google-map"
										src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14600.12353976731!2d88.74217940927734!3d23.817500758025076!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f94baf4a23d9e7%3A0xe727323682098df5!2sGangni%20Upazila%20Health%20Complex!5e0!3m2!1sen!2sbd!4v1638547494165!5m2!1sen!2sbd"
										width="600"
										height="450"
										style={{ border: 0 }}
										allowFullScreen=""
										loading="lazy"></iframe>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</React.Fragment>
	);
};

export default ContactPage;
