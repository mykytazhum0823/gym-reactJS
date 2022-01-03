import React from "react";

const Membership = () => {
	return (
		<div className="layout-default">
			<div className="mdk-header-layout js-mdk-header-layout">
				{/* <!-- Header Layout Content --> */}
				<div className="mdk-header-layout__content">
					<div
						className="mdk-drawer-layout js-mdk-drawer-layout"
						data-push
						data-responsive-width="992px">
						<div className="mdk-drawer-layout__content page">
							<div className="container-fluid page__heading-container">
								<div className="page__heading d-flex flex-column flex-md-row align-items-center justify-content-center justify-content-lg-between text-center text-lg-left">
									<h1 className="m-lg-0">Validate membership</h1>
									<a href="#" className="btn btn-primary ml-lg-3">
										Upgrade
									</a>
								</div>
							</div>

							<div className="container-fluid page__container">
								<div className="card card-form">
									<div className="row no-gutters">
										<div className="col-lg-4 card-body">
											<p>
												<strong className="headings-color">
													membership Information
												</strong>
											</p>
											<p className="text-muted mb-0">
												Lorem ipsum dolor sit amet consectetur adipisicing elit.
												Officia corrupti voluptate{" "}
											</p>
										</div>
										<div className="col-lg-8 card-form__body card-body">
											<div className="d-flex align-items-center flex-wrap">
												<div className="mr-3">
													<img
														src="customerAssets/images/256_jeremy-banks-798787-unsplash.jpg"
														width="60px"
														alt=""
													/>
												</div>

												<strong>Mambership Name</strong>

												<div className="ml-auto">
													<button className="btn btn-danger"> Remove</button>
													<button className="btn btn-outline-primary">
														{" "}
														Change
													</button>
												</div>
											</div>
										</div>
									</div>
								</div>

								<div className="card card-form">
									<div className="row no-gutters">
										<div className="col-lg-4 card-body">
											<p>
												<strong className="headings-color">
													Validate Capacity
												</strong>
											</p>
											<p className="text-muted mb-0">Your Capacity</p>
										</div>
										<div className="col-lg-8 card-form__body">
											<div className="table-responsive">
												<table className="table mb-0">
													<thead>
														<tr>
															<th>Invoice</th>
															<th className="text-center">Amount</th>
															<th className="text-center">Status</th>
															<th className="text-center" style="width: 140px;">
																Date
															</th>
														</tr>
													</thead>
													<tbody className="list">
														<tr>
															<td>
																<a href="invoice.html">
																	#<span>12199</span>
																</a>
															</td>
															<td className="text-center">$49.00</td>
															<td className="text-center">
																<div className="badge badge-soft-warning">
																	DUE
																</div>
															</td>
															<td>
																<div className="d-flex align-items-center text-muted small">
																	<i className="material-icons icon-16pt mr-1">
																		today
																	</i>
																	25 May 2019
																</div>
															</td>
														</tr>

														<tr>
															<td>
																<a href="invoice.html">
																	#<span>38331</span>
																</a>
															</td>
															<td className="text-center">$49.00</td>
															<td className="text-center">
																<div className="badge badge-soft-success">
																	PAID
																</div>
															</td>
															<td>
																<div className="d-flex align-items-center text-muted small">
																	<i className="material-icons icon-16pt mr-1">
																		today
																	</i>
																	18 Apr 2019
																</div>
															</td>
														</tr>

														<tr>
															<td>
																<a href="invoice.html">
																	#<span>58331</span>
																</a>
															</td>
															<td className="text-center">$49.00</td>
															<td className="text-center">
																<div className="badge badge-soft-danger">
																	UNPAID
																</div>
															</td>
															<td>
																<div className="d-flex align-items-center text-muted small">
																	<i className="material-icons icon-16pt mr-1">
																		today
																	</i>
																	12 Feb 2019
																</div>
															</td>
														</tr>

														<tr>
															<td>
																<a href="invoice.html">
																	#<span>23421</span>
																</a>
															</td>
															<td className="text-center">$49.00</td>
															<td className="text-center">
																<div className="badge badge-soft-success">
																	PAID
																</div>
															</td>
															<td>
																<div className="d-flex align-items-center text-muted small">
																	<i className="material-icons icon-16pt mr-1">
																		today
																	</i>
																	28 Jan 2019
																</div>
															</td>
														</tr>
													</tbody>
												</table>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						{/* <!-- // END drawer-layout__content --> */}
						<div
							className="mdk-drawer  js-mdk-drawer"
							id="default-drawer"
							data-align="start">
							<div className="mdk-drawer__content">
								<div
									className="sidebar sidebar-light sidebar-left bg-white"
									data-perfect-scrollbar>
									<div className="sidebar-block p-0 m-0">
										<div className="d-flex align-items-center sidebar-p-a border-bottom bg-light">
											<a
												href="#"
												className="flex d-flex align-items-center text-body text-underline-0">
												<span className="avatar avatar-sm mr-2">
													<span className="avatar-title rounded-circle bg-soft-secondary text-muted">
														ST
													</span>
												</span>
												<span className="flex d-flex flex-column">
													<strong>Coustomer Name </strong>
													<small className="text-muted text-uppercase">
														membership Name
													</small>
												</span>
											</a>
											<div className="dropdown ml-auto">
												<a
													href="#"
													data-toggle="dropdown"
													data-caret="false"
													className="text-muted">
													<i className="material-icons">more_vert</i>
												</a>
												<div className="dropdown-menu dropdown-menu-right">
													<div className="dropdown-divider"></div>
													<a
														className="dropdown-item"
														rel="nofollow"
														data-method="delete"
														href="login.html">
														Logout
													</a>
													<a
														className="dropdown-item"
														rel="nofollow"
														data-method="delete"
														href="edit-account.html">
														Edit Profile
													</a>
												</div>
											</div>
										</div>
									</div>
									<div className="sidebar-block p-0">
										<ul className="sidebar-menu mt-0">
											<li className="sidebar-menu-item">
												<a
													className="sidebar-menu-button"
													href="enroll_class.html">
													<span className="sidebar-menu-icon sidebar-menu-icon--left">
														<svg
															xmlns="http://www.w3.org/2000/svg"
															version="1.1"
															xmlnsXlink="http://www.w3.org/1999/xlink"
															viewBox="0 0 40 40"
															width="22"
															height="22">
															<g transform="matrix(1.6666666666666667,0,0,1.6666666666666667,0,0)">
																<path
																	d="M23,14.5H1c-0.552,0-1,0.448-1,1V16c0,0.684,0.462,1.282,1.125,1.453C1.346,17.51,1.5,17.709,1.5,17.937V23 c0,0.552,0.448,1,1,1s1-0.448,1-1v-1c0-0.276,0.224-0.5,0.5-0.5h16c0.276,0,0.5,0.224,0.5,0.5v1c0,0.552,0.448,1,1,1s1-0.448,1-1 v-5.063c0-0.228,0.154-0.427,0.375-0.484C23.538,17.282,24,16.684,24,16v-0.5C24,14.948,23.552,14.5,23,14.5z M20.5,19 c0,0.276-0.224,0.5-0.5,0.5H4c-0.276,0-0.5-0.224-0.5-0.5v-1c0-0.276,0.224-0.5,0.5-0.5h16c0.276,0,0.5,0.224,0.5,0.5V19z M7.522,5.717l0.75,0.385c0.143,0.073,0.313,0.073,0.456,0l0.75-0.385C9.645,5.631,9.75,5.46,9.75,5.272V4.334 c0-0.189-0.107-0.362-0.276-0.447l-0.75-0.375c-0.141-0.071-0.307-0.071-0.448,0l-0.75,0.375C7.357,3.972,7.25,4.145,7.25,4.334 v0.938C7.25,5.46,7.355,5.631,7.522,5.717z M14.522,9.217l0.75,0.385c0.143,0.073,0.313,0.073,0.456,0l0.75-0.385 c0.167-0.086,0.272-0.257,0.272-0.445V7.834c0-0.189-0.107-0.362-0.276-0.447l-0.75-0.375c-0.141-0.071-0.307-0.071-0.448,0 l-0.75,0.375c-0.169,0.085-0.276,0.258-0.276,0.447v0.938C14.25,8.96,14.355,9.131,14.522,9.217z M2.5,13h19 c0.276,0,0.5-0.224,0.5-0.5v-11C22,0.672,21.328,0,20.5,0h-17C2.672,0,2,0.672,2,1.5v11C2,12.776,2.224,13,2.5,13z M5.75,3.871 C5.749,3.397,6.017,2.964,6.441,2.753L7.941,2c0.352-0.175,0.766-0.175,1.118,0l1.5,0.75c0.424,0.211,0.692,0.644,0.691,1.118v1.4 c0,0.188,0.106,0.36,0.273,0.445l1.275,0.649c0.162,0.082,0.355,0.07,0.505-0.031c0.107-0.071,0.118-0.068,1.171-0.6 c0.169-0.085,0.276-0.258,0.276-0.447V3.5c0-0.414,0.336-0.75,0.75-0.75c0.414,0,0.75,0.336,0.75,0.75v1.79 c0,0.189,0.107,0.362,0.276,0.447l1.033,0.516c0.424,0.211,0.692,0.644,0.691,1.118V9.23c0.001,0.469-0.262,0.899-0.68,1.112 l-1.5,0.77c-0.358,0.184-0.784,0.184-1.142,0l-1.5-0.77c-0.417-0.213-0.68-0.643-0.678-1.112v-0.9c0-0.188-0.106-0.36-0.273-0.445 l-1.748-0.889c-0.143-0.073-0.312-0.073-0.455,0L9.522,7.383C9.355,7.468,9.25,7.64,9.25,7.827v2.237c0,0.414-0.336,0.75-0.75,0.75 s-0.75-0.336-0.75-0.75V7.825c0-0.187-0.105-0.359-0.272-0.444L6.429,6.842C6.011,6.629,5.749,6.199,5.75,5.73V3.871z"
																	stroke="none"
																	fill="currentColor"
																	stroke-width="0"
																	stroke-linecap="round"
																	stroke-linejoin="round"></path>
															</g>
														</svg>
													</span>
													<span className="sidebar-menu-text">
														Enroll className
													</span>
												</a>
											</li>

											<li className="sidebar-menu-item">
												<a
													className="sidebar-menu-button"
													href="manage_traniner.html">
													<span className="sidebar-menu-icon sidebar-menu-icon--left">
														<svg
															xmlns="http://www.w3.org/2000/svg"
															version="1.1"
															xmlnsXlink="http://www.w3.org/1999/xlink"
															viewBox="0 0 40 40"
															width="22"
															height="22">
															<g transform="matrix(1.6666666666666667,0,0,1.6666666666666667,0,0)">
																<path
																	d="M2.5,16C2.224,16,2,15.776,2,15.5v-11C2,4.224,2.224,4,2.5,4h14.625c0.276,0,0.5,0.224,0.5,0.5V8c0,0.552,0.448,1,1,1 s1-0.448,1-1V4c0-1.105-0.895-2-2-2H2C0.895,2,0,2.895,0,4v12c0,1.105,0.895,2,2,2h5.375c0.138,0,0.25,0.112,0.25,0.25v1.5 c0,0.138-0.112,0.25-0.25,0.25H5c-0.552,0-1,0.448-1,1s0.448,1,1,1h7.625c0.552,0,1-0.448,1-1s-0.448-1-1-1h-2.75 c-0.138,0-0.25-0.112-0.25-0.25v-1.524c0-0.119,0.084-0.221,0.2-0.245c0.541-0.11,0.891-0.638,0.781-1.179 c-0.095-0.466-0.505-0.801-0.981-0.801L2.5,16z M3.47,9.971c-0.303,0.282-0.32,0.757-0.037,1.06c0.282,0.303,0.757,0.32,1.06,0.037 c0.013-0.012,0.025-0.025,0.037-0.037l2-2c0.293-0.292,0.293-0.767,0.001-1.059c0,0-0.001-0.001-0.001-0.001l-2-2 c-0.282-0.303-0.757-0.32-1.06-0.037s-0.32,0.757-0.037,1.06C3.445,7.006,3.457,7.019,3.47,7.031l1.293,1.293 c0.097,0.098,0.097,0.256,0,0.354L3.47,9.971z M7,11.751h2.125c0.414,0,0.75-0.336,0.75-0.75s-0.336-0.75-0.75-0.75H7 c-0.414,0-0.75,0.336-0.75,0.75S6.586,11.751,7,11.751z M18.25,16.5c0,0.276-0.224,0.5-0.5,0.5s-0.5-0.224-0.5-0.5v-5.226 c0-0.174-0.091-0.335-0.239-0.426c-1.282-0.702-2.716-1.08-4.177-1.1c-0.662-0.029-1.223,0.484-1.252,1.146 c-0.001,0.018-0.001,0.036-0.001,0.054v7.279c0,0.646,0.511,1.176,1.156,1.2c1.647-0.011,3.246,0.552,4.523,1.593 c0.14,0.14,0.33,0.219,0.528,0.218c0.198,0.001,0.388-0.076,0.529-0.215c1.277-1.044,2.878-1.61,4.527-1.6 c0.641-0.023,1.15-0.547,1.156-1.188v-7.279c-0.001-0.327-0.134-0.64-0.369-0.867c-0.236-0.231-0.557-0.353-0.886-0.337 c-1.496,0.016-2.963,0.411-4.265,1.148c-0.143,0.092-0.23,0.251-0.23,0.421V16.5z"
																	stroke="none"
																	fill="currentColor"
																	stroke-width="0"
																	stroke-linecap="round"
																	stroke-linejoin="round"></path>
															</g>
														</svg>
													</span>
													<span className="sidebar-menu-text">Scan QR</span>
												</a>
											</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>
					{/* <!-- // END drawer-layout --> */}
				</div>
				{/* <!-- // END header-layout__content --> */}
			</div>
			{/* <!-- // END header-layout --> */}
		</div>
	);
};

export default Membership;
