import React from "react";
import '../assets/css/app.scoped.css';
const AdminReporting = () => {
	return (
		<>
			<div className="mdk-drawer-layout__content page" style={{paddingTop:'60px'}}>
				<div className="container-fluid page__heading-container">
					<div className="page__heading d-flex flex-column flex-md-row align-items-center justify-content-center justify-content-lg-between text-center text-lg-left">
						<h1 className="m-lg-0">Report Information</h1>
						<a href="# " className="btn btn-primary ml-lg-3">
							Download Report
						</a>
					</div>
				</div>

				<div className="container-fluid page__container">
					<div className="card card-form">
						<div className="row no-gutters">
							<div className="col-lg-12 card-form__body">
								<div className="table-responsive">
									<table className="table mb-0">
										<thead>
											<tr>
												<th>Report ID</th>
												<th className="text-center">Report Sub</th>
												<th className="text-center">Description</th>
												<th
													className="text-center"
													style={{ width: "140px" }}>
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
												<td className="text-center">
													Lorem ipsum dolor sit
												</td>
												<td className="text-center">
													<div className="badge badge-soft-warning">
														Lorem ipsum dolor sit Lorem ipsum dolor sit
													</div>
												</td>
												<td>
													<div className="d-flex align-items-center text-muted small">
														<i className="material-icons icon-16pt mr-1">
															today
														</i>
														25 May 2021
													</div>
												</td>
											</tr>

											<tr>
												<td>
													<a href="invoice.html">
														#<span>12199</span>
													</a>
												</td>
												<td className="text-center">
													Lorem ipsum dolor sit
												</td>
												<td className="text-center">
													<div className="badge badge-soft-warning">
														Lorem ipsum dolor sit Lorem ipsum dolor sit
													</div>
												</td>
												<td>
													<div className="d-flex align-items-center text-muted small">
														<i className="material-icons icon-16pt mr-1">
															today
														</i>
														25 May 2021
													</div>
												</td>
											</tr>

											<tr>
												<td>
													<a href="invoice.html">
														#<span>12199</span>
													</a>
												</td>
												<td className="text-center">
													Lorem ipsum dolor sit
												</td>
												<td className="text-center">
													<div className="badge badge-soft-warning">
														Lorem ipsum dolor sit Lorem ipsum dolor sit
													</div>
												</td>
												<td>
													<div className="d-flex align-items-center text-muted small">
														<i className="material-icons icon-16pt mr-1">
															today
														</i>
														25 May 2021
													</div>
												</td>
											</tr>
											<tr>
												<td>
													<a href="invoice.html">
														#<span>12199</span>
													</a>
												</td>
												<td className="text-center">
													Lorem ipsum dolor sit
												</td>
												<td className="text-center">
													<div className="badge badge-soft-warning">
														Lorem ipsum dolor sit Lorem ipsum dolor sit
													</div>
												</td>
												<td>
													<div className="d-flex align-items-center text-muted small">
														<i className="material-icons icon-16pt mr-1">
															today
														</i>
														25 May 2021
													</div>
												</td>
											</tr>
											<tr>
												<td>
													<a href="invoice.html">
														#<span>12199</span>
													</a>
												</td>
												<td className="text-center">
													Lorem ipsum dolor sit
												</td>
												<td className="text-center">
													<div className="badge badge-soft-warning">
														Lorem ipsum dolor sit Lorem ipsum dolor sit
													</div>
												</td>
												<td>
													<div className="d-flex align-items-center text-muted small">
														<i className="material-icons icon-16pt mr-1">
															today
														</i>
														25 May 2021
													</div>
												</td>
											</tr>
											<tr>
												<td>
													<a href="invoice.html">
														#<span>12199</span>
													</a>
												</td>
												<td className="text-center">
													Lorem ipsum dolor sit
												</td>
												<td className="text-center">
													<div className="badge badge-soft-warning">
														Lorem ipsum dolor sit Lorem ipsum dolor sit
													</div>
												</td>
												<td>
													<div className="d-flex align-items-center text-muted small">
														<i className="material-icons icon-16pt mr-1">
															today
														</i>
														25 May 2021
													</div>
												</td>
											</tr>
											<tr>
												<td>
													<a href="invoice.html">
														#<span>12199</span>
													</a>
												</td>
												<td className="text-center">
													Lorem ipsum dolor sit
												</td>
												<td className="text-center">
													<div className="badge badge-soft-warning">
														Lorem ipsum dolor sit Lorem ipsum dolor sit
													</div>
												</td>
												<td>
													<div className="d-flex align-items-center text-muted small">
														<i className="material-icons icon-16pt mr-1">
															today
														</i>
														25 May 2021
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

			<div
				className="mdk-drawer js-mdk-drawer"
				id="events-drawer"
				data-align="end">
				<div className="mdk-drawer__content">
					<div
						className="sidebar sidebar-light sidebar-left"
						data-perfect-scrollbar>
						<small className="text-dark-gray px-3 py-1">
							<strong>Thursday, 28 Feb</strong>
						</small>

						<div className="list-group list-group-flush">
							<div className="list-group-item bg-light">
								<div className="row">
									<div className="col-auto d-flex flex-column">
										<small>12:30 PM</small>
										<small className="text-dark-gray">2 hrs</small>
									</div>
									<div className="col">
										<div className="d-flex flex-column flex">
											<a href="# " className="text-body">
												<strong className="text-15pt">
													Marketing Team Meeting
												</strong>
											</a>

											<small className="text-muted d-flex align-items-center">
												<i className="material-icons icon-16pt mr-1">
													location_on
												</i>{" "}
												16845 Hicks Road
											</small>
										</div>
										<div className="avatar-group mt-2">
											<div className="avatar avatar-xs">
												<img
													src="adminAssets/images/256_joao-silas-636453-unsplash.jpg"
													alt="Avatar"
													className="avatar-img rounded-circle"
												/>
											</div>

											<div className="avatar avatar-xs">
												<img
													src="adminAssets/images/256_jeremy-banks-798787-unsplash.jpg"
													alt="Avatar"
													className="avatar-img rounded-circle"
												/>
											</div>

											<div className="avatar avatar-xs">
												<img
													src="adminAssets/images/256_daniel-gaffey-1060698-unsplash.jpg"
													alt="Avatar"
													className="avatar-img rounded-circle"
												/>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>

						<small className="text-dark-gray px-3 py-1">
							<strong>Wednesday, 27 Feb</strong>
						</small>

						<div className="list-group list-group-flush">
							<div className="list-group-item bg-light">
								<div className="row">
									<div className="col-auto d-flex flex-column">
										<small>07:48 PM</small>
										<small className="text-dark-gray">30 min</small>
									</div>
									<div className="col">
										<div className="d-flex flex-column flex">
											<a href="# " className="text-body">
												<strong className="text-15pt">Call Alex</strong>
											</a>

											<small className="text-muted d-flex align-items-center">
												<i className="material-icons icon-16pt mr-1">phone</i>{" "}
												202-555-0131
											</small>
										</div>
									</div>
								</div>
							</div>
						</div>

						<small className="text-dark-gray px-3 py-1">
							<strong>Tuesday, 26 Feb</strong>
						</small>

						<div className="list-group list-group-flush">
							<div className="list-group-item bg-light">
								<div className="row">
									<div className="col-auto d-flex flex-column">
										<small>03:13 PM</small>
										<small className="text-dark-gray">2 hrs</small>
									</div>
									<div className="col">
										<div className="d-flex flex-column flex">
											<a href="# " className="text-body">
												<strong className="text-15pt">
													Design Team Meeting
												</strong>
											</a>

											<small className="text-muted d-flex align-items-center">
												<i className="material-icons icon-16pt mr-1">
													location_on
												</i>{" "}
												16845 Hicks Road
											</small>
										</div>
										<div className="avatar-group mt-2">
											<div className="avatar avatar-xs">
												<img
													src="adminAssets/images/256_rsz_1andy-lee-642320-unsplash.jpg"
													alt="Avatar"
													className="avatar-img rounded-circle"
												/>
											</div>

											<div className="avatar avatar-xs">
												<img
													src="adminAssets/images/256_michael-dam-258165-unsplash.jpg"
													alt="Avatar"
													className="avatar-img rounded-circle"
												/>
											</div>

											<div className="avatar avatar-xs">
												<img
													src="adminAssets/images/256_luke-porter-261779-unsplash.jpg"
													alt="Avatar"
													className="avatar-img rounded-circle"
												/>
											</div>

											<div className="avatar avatar-xs">
												<img
													src="adminAssets/images/stories/256_rsz_clem-onojeghuo-193397-unsplash.jpg"
													alt="Avatar"
													className="avatar-img rounded-circle"
												/>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>

						<small className="text-dark-gray px-3 py-1">
							<strong>Monday, 25 Feb</strong>
						</small>

						<div className="list-group list-group-flush">
							<div className="list-group-item bg-light">
								<div className="row">
									<div className="col-auto d-flex flex-column">
										<small>12:30 PM</small>
										<small className="text-dark-gray">2 hrs</small>
									</div>
									<div className="col d-flex">
										<div className="d-flex flex-column flex">
											<a href="# " className="text-body">
												<strong className="text-15pt">Call Wendy</strong>
											</a>

											<small className="text-muted d-flex align-items-center">
												<i className="material-icons icon-16pt mr-1">phone</i>{" "}
												202-555-0131
											</small>
										</div>

										<div className="avatar avatar-xs">
											<img
												src="adminAssets/images/256_michael-dam-258165-unsplash.jpg"
												alt="Avatar"
												className="avatar-img rounded-circle"
											/>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default AdminReporting;
