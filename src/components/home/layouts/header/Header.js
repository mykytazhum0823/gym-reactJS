import React from "react";
import "./header.css";
import {Outlet} from "react-router-dom";

const Header = () => {
	return (
		<>
		<header className="header-wrap v1" style={{ zIndex: "5999" }}>
			<div className="container">
				<div className="row align-items-center">
					<div className="col-lg-1 col-md-4  col-5 mpx-0">
						<div className="logo v1">
							<a href="index-2.html">
								<img src="assets/img/logo.png" alt="logo" />
								<span>Vigory</span>
							</a>
						</div>
					</div>
					<div className="col-lg-11 col-md-8 col-7">
						<div className="header-top">
							<div className="row align-items-center">
								<div className="col-lg-5  md-none">
									<p className="mb-0">
										New Membership Deals Going On! Join Now For $0 Initiation.{" "}
									</p>
								</div>
								<div className="col-lg-7">
									<div className="header-top-right">
										<div className="close-header-top">
											<button type="button">
												<i className="las la-times"></i>
											</button>
										</div>
										<div className="header-top-contact">
											<p>
												<i className="flaticon-placeholder"></i>Address: 123
												Western Road, LA.
											</p>
											<a href="tel:2132008224">
												<i className="flaticon-phone-call"></i>213-200-8224
											</a>
										</div>
										<div className="lang-sel">
											<i className="las la-globe"></i>
											<select className="select">
												<option value="1">English</option>
												<option value="2">French</option>
												<option value="3">Arabic</option>
											</select>
										</div>
										<div className="header_btn xl-none">
											<a href="#!" className="btn v1">
												Make A Visit
											</a>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="header-bottom">
							<div className="row align-items-center">
								<div className="col-lg-9 col-md-2 col-3 order-lg-1 order-md-2 order-2">
									<nav id="menu" className="main-menu  text-center">
										<ul>
											<li className="has-child">
												<a className="active" href="#!">
													Home
												</a>
											</li>
											<li className="has-child">
												<a href="/login">Login</a>
											</li>
										</ul>
									</nav>
									<div className="mobile-menu">
										<a href="#menu">
											<i className="las la-bars"></i>
										</a>
									</div>
								</div>
								<div className="col-lg-3 col-md-10 col-9 order-lg-2 order-md-1 order-1">
									<div className="header-bottom-right">
										<div className="mobile-top-bar xl-none">
											<i className="las la-sliders-h"></i>
										</div>
										<div className="header-btn md-none">
											<a href="className.html" className="btn v1">
												Contact Us
											</a>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</header>
		<Outlet/>
		</>
	);
};

export default Header;
