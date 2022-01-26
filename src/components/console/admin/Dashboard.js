import React from "react";
import useScript from 'usescript-hook';
import "./admin.scoped.scss";
import "../assets/css/app.scoped.css";


const Dashboard = () => {
	useScript("../assets/js/page.instructor-dashboard.js");

	const minHeight = window.innerHeight - 150;
	return (

	<div className="mdk-drawer-layout__content page" style={{paddingTop:'130px', minHeight:minHeight}}>
		<div className="container-fluid page__heading-container">
			<div className="page__heading d-flex flex-column flex-md-row align-items-center justify-content-center justify-content-lg-between text-center text-lg-left">
				<h1 className="m-lg-0">Admin Dashboard</h1>
				<a href="#" className="btn btn-success ml-lg-3">
					Go to Settings{" "}
					<i className="material-icons">arrow_forward</i>
				</a>
			</div>
		</div>

		<div className="container-fluid page__container">
			<div className="row card-group-row">
				<div className="col-lg-4 col-md-6 card-group-row__col">
					<div className="card card-group-row__card card-body card-body-x-lg flex-row align-items-center">
						<div className="flex">
							<div className="card-header__title text-muted mb-2">
								Total GYM's
							</div>
							<div className="text-amount"> 65</div>
						</div>

						<div className="avatar">
							<span className="bg-soft-success avatar-title rounded-circle text-center text-success">
								<i className="material-icons icon-40pt">gps_fixed</i>
							</span>
						</div>
					</div>
				</div>
				<div className="col-lg-4 col-md-6 card-group-row__col">
					<div className="card card-group-row__card card-body card-body-x-lg flex-row align-items-center">
						<div className="flex">
							<div className="card-header__title text-muted mb-2">
								Total Trainer
							</div>
							<div className="text-amount">52</div>
						</div>
						<div className="avatar">
							<span className="bg-soft-primary avatar-title rounded-circle text-center text-primary">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									version="1.1"
									xmlnsXlink="http://www.w3.org/1999/xlink"
									viewBox="0 0 40 40"
									width="30"
									height="30">
									<g transform="matrix(1.6666666666666667,0,0,1.6666666666666667,0,0)">
										<path
											d="M16,5.75c0.414,0,0.75-0.336,0.75-0.75V3.5c0-0.414-0.336-0.75-0.75-0.75s-0.75,0.336-0.75,0.75V5 C15.25,5.414,15.586,5.75,16,5.75z M21,3c0-1.657-1.343-3-3-3H6C4.343,0,3,1.343,3,3v18c0,1.657,1.343,3,3,3h12 c1.657,0,3-1.343,3-3V3z M12,14c0.552,0,1,0.448,1,1s-0.448,1-1,1s-1-0.448-1-1S11.448,14,12,14z M11,10.5c0-0.552,0.448-1,1-1 s1,0.448,1,1s-0.448,1-1,1S11,11.052,11,10.5z M16.5,18.75c0.414,0,0.75,0.336,0.75,0.75s-0.336,0.75-0.75,0.75H11 c-0.414,0-0.75-0.336-0.75-0.75s0.336-0.75,0.75-0.75H16.5z M16.5,16c-0.552,0-1-0.448-1-1s0.448-1,1-1c0.552,0,1,0.448,1,1 S17.052,16,16.5,16z M16.5,11.5c-0.552,0-1-0.448-1-1s0.448-1,1-1c0.552,0,1,0.448,1,1S17.052,11.5,16.5,11.5z M7.5,16 c-0.552,0-1-0.448-1-1s0.448-1,1-1s1,0.448,1,1S8.052,16,7.5,16z M8.5,19.5c0,0.552-0.448,1-1,1s-1-0.448-1-1s0.448-1,1-1 S8.5,18.948,8.5,19.5z M7.5,11.5c-0.552,0-1-0.448-1-1s0.448-1,1-1s1,0.448,1,1S8.052,11.5,7.5,11.5z M6,2h12c0.552,0,1,0.448,1,1 v3.25c0,0.138-0.112,0.25-0.25,0.25H5.25C5.112,6.5,5,6.388,5,6.25V3C5,2.448,5.448,2,6,2z"
											stroke="none"
											fill="currentColor"
											strokeWidth="0"
											strokeLinecap="round"
											strokeLinejoin="round"></path>
									</g>
								</svg>
							</span>
						</div>
					</div>
				</div>
				<div className="col-lg-4 col-md-12 card-group-row__col">
					<div className="card card-group-row__card card-body card-body-x-lg flex-row align-items-center">
						<div className="flex">
							<div className="card-header__title text-muted mb-2">
								Total Customer
							</div>
							<div className="text-amount">182</div>
						</div>
						<div className="avatar">
							<span className="bg-soft-warning avatar-title rounded-circle text-center text-warning">
								<i className="material-icons text-warning icon-40pt">
									perm_identity
								</i>
							</span>
						</div>
					</div>
				</div>
			</div>

			{/* // CHART  */}
			<div className="row">
				<div className="col-md-8">
					<div className="card">
						<div className="card-header bg-white d-flex align-items-center">
							<h4 className="card-header__title mb-0">
								Customer Join
							</h4>
							<div className="flatpickr-wrapper flatpickr-calendar-right d-flex ml-auto">
								<div
									id="recent_orders_date"
									data-toggle="flatpickr"
									data-flatpickr-wrap="true"
									data-flatpickr-static="true"
									data-flatpickr-mode="range"
									data-flatpickr-alt-format="d/m/Y"
									data-flatpickr-date-format="d/m/Y">
									<a
										href="#"
										className="link-date"
										data-toggle>
										01/03/2020 to 20/03/2020
									</a>
									<input
										className="d-none"
										type="hidden"
										value="13/03/2018 to 20/03/2018"
										data-input
									/>
								</div>
							</div>
						</div>
						<div className="card-body">
							<div className="chart">
								<canvas
									id="ordersChart"
									className="chart-canvas"></canvas>
								
							</div>
						</div>
					</div>
				</div>
				<div className="col-md-4">
					<div className="card">
						<div className="card-header card-header-large bg-light d-flex align-items-center">
							<h4 className="card-header__title">Top Gym's</h4>
						</div>

						<ul
							className="list-group list-group-flush mb-0"
							style={{ zIndex: "initial" }}>
							<li
								className="list-group-item"
								style={{ zIndex: "initial" }}>
								<div className="d-flex align-items-center">
									<a href="#" className="mr-3">
										<img
											src="https://images.unsplash.com/photo-1562577309-4932fdd64cd1?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=clamp&amp;w=35&amp;h=35"
											alt="course"
											className=""
										/>
									</a>
									<div className="flex">
										<a href="#" className="text-body">
											<strong>Basics </strong>
										</a>
										<div className="d-flex align-items-center">
											<small className="text-muted">
												60 Customer
											</small>
										</div>
									</div>
									<div className="ml-3">$23460</div>
								</div>
							</li>

							<li
								className="list-group-item"
								style={{ zIndex: "initial" }}>
								<div className="d-flex align-items-center">
									<a href="#" className="mr-3">
										<img
											src="https://images.unsplash.com/photo-1562577309-4932fdd64cd1?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=clamp&amp;w=35&amp;h=35"
											alt="course"
											className=""
										/>
									</a>
									<div className="flex">
										<a href="#" className="text-body">
											<strong>Basics </strong>
										</a>
										<div className="d-flex align-items-center">
											<small className="text-muted">
												60 Customer
											</small>
										</div>
									</div>
									<div className="ml-3">$23460</div>
								</div>
							</li>

							<li
								className="list-group-item"
								style={{ zIndex: "initial" }}>
								<div className="d-flex align-items-center">
									<a href="#" className="mr-3">
										<img
											src="https://images.unsplash.com/photo-1562577309-4932fdd64cd1?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=clamp&amp;w=35&amp;h=35"
											alt="course"
											className=""
										/>
									</a>
									<div className="flex">
										<a href="#" className="text-body">
											<strong>Basics </strong>
										</a>
										<div className="d-flex align-items-center">
											<small className="text-muted">
												60 Customer
											</small>
										</div>
									</div>
									<div className="ml-3">$23460</div>
								</div>
							</li>
							<li
								className="list-group-item"
								style={{ zIndex: "initial" }}>
								<div className="d-flex align-items-center">
									<a href="#" className="mr-3">
										<img
											src="https://images.unsplash.com/photo-1562577309-4932fdd64cd1?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=clamp&amp;w=35&amp;h=35"
											alt="course"
											className=""
										/>
									</a>
									<div className="flex">
										<a href="#" className="text-body">
											<strong>Basics </strong>
										</a>
										<div className="d-flex align-items-center">
											<small className="text-muted">
												60 Customer
											</small>
										</div>
									</div>
									<div className="ml-3">$23460</div>
								</div>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</div>
	);
};

export default Dashboard;
