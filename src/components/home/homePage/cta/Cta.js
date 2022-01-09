import React from "react";
import '../../assets/css/style.scoped.css';
const Cta = () => {
	return (
		<section className="cta-wrap v1 bg-f section-padding cta-bg-1">
			<div className="overlay op-9 bg-mirage"></div>
			<div className="container">
				<div className="row gx-3 align-items-center">
					<div className="col-xl-5 col-lg-12">
						<div className="section-title v3">
							<h2>
								Book Class <br />
								Flexible Pass{" "}
								<small style={{ color: "red" }}>cancel any time</small>{" "}
							</h2>
						</div>
					</div>
					<div className="col-xl-4 col-lg-12">
						<div className="cta-para">
							<p>
								Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
								diam nonumy eirmod tempor invidunt ut labore et dolore magna
								aliquyam erat.
							</p>
						</div>
					</div>
					<div className="col-xl-3 col-lg-12">
						<div className="cta-call">
							<i className="las la-phone"></i>
							<a href="tel:2132008224">213-200-8224</a>
							<span>Make a call</span>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Cta;
