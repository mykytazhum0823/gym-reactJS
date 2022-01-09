import React, { useState } from "react";
import "../assets/css/app.scoped.css";
import Modal from 'react-bootstrap/Modal';

const ManageUser = () => {
	const [isOpen, setIsOpen] = useState(false);
	const showModal = ()=>{
		setIsOpen(true);
	}
	const hideModal = () =>{
		setIsOpen(false);
	}

	return (
		<>
			<div className="mdk-drawer-layout__content page" style={{paddingTop:'60px'}}>
				<div className="container-fluid page__heading-container">
					<div className="page__heading d-flex align-items-center justify-content-between">
						<button
							type="button"
							className="btn btn-primary"
							
							onClick={showModal}>
							Add User
						</button>
					</div>
				</div>

				<div className="container-fluid page__container">
					<div className="card card-form">
						<div className="row no-gutters">
							<div className="col-lg-12 card-form__body">
								<div
									className="table-responsive border-bottom"
									data-toggle="lists"
									data-lists-values='["js-lists-values-employee-name"]'>
									<div className="search-form search-form--light m-3">
										<input
											type="text"
											className="form-control search"
											placeholder="Search"
										/>
										<button className="btn" type="button" role="button">
											<i className="material-icons">search</i>
										</button>
									</div>

									<table className="table mb-0 thead-border-top-0">
										<thead>
											<tr>
												<th>list</th>

												<th style={{ width: "37px" }}>Status</th>
												<th style={{ width: "120px" }}>Last Activity</th>
												<th style={{ width: "51px" }}>action</th>
											</tr>
										</thead>
										<tbody className="list" id="staff02">
											<tr>
												<td>
													<span className="js-lists-values-employee-name">
														Connie Smith
													</span>
												</td>

												<td>
													<span className="badge badge-success">
														USER
													</span>
												</td>
												<td>
													<small className="text-muted">1 week ago</small>
												</td>
												<td>
													<button
														type="button"
														className="btn btn-danger">
														Deactive
													</button>
												</td>
											</tr>

											<tr>
												<td>
													<span className="js-lists-values-employee-name">
														Connie Smith
													</span>
												</td>

												<td>
													<span className="badge badge-success">
														USER
													</span>
												</td>
												<td>
													<small className="text-muted">1 week ago</small>
												</td>
												<td>
													<button
														type="button"
														className="btn btn-danger">
														Deactive
													</button>
												</td>
											</tr>
											<tr>
												<td>
													<span className="js-lists-values-employee-name">
														Connie Smith
													</span>
												</td>

												<td>
													<span className="badge badge-success">
														USER
													</span>
												</td>
												<td>
													<small className="text-muted">1 week ago</small>
												</td>
												<td>
													<button
														type="button"
														className="btn btn-danger">
														Deactive
													</button>
												</td>
											</tr>
											<tr>
												<td>
													<span className="js-lists-values-employee-name">
														Connie Smith
													</span>
												</td>

												<td>
													<span className="badge badge-success">
														USER
													</span>
												</td>
												<td>
													<small className="text-muted">1 week ago</small>
												</td>
												<td>
													<button
														type="button"
														className="btn btn-danger">
														Deactive
													</button>
												</td>
											</tr>
											<tr>
												<td>
													<span className="js-lists-values-employee-name">
														Connie Smith
													</span>
												</td>

												<td>
													<span className="badge badge-success">
														USER
													</span>
												</td>
												<td>
													<small className="text-muted">1 week ago</small>
												</td>
												<td>
													<button
														type="button"
														className="btn btn-danger">
														Deactive
													</button>
												</td>
											</tr>
											<tr>
												<td>
													<span className="js-lists-values-employee-name">
														Connie Smith
													</span>
												</td>

												<td>
													<span className="badge badge-success">
														USER
													</span>
												</td>
												<td>
													<small className="text-muted">1 week ago</small>
												</td>
												<td>
													<button
														type="button"
														className="btn btn-danger">
														Deactive
													</button>
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
			{/* <!-- // END header-layout --> */}

			{/* <!-- add user Modal --> */}
			<Modal
				show={isOpen}
				onHide={hideModal}
				id="modal-signup"
				centered
				className="modal fade">
				<div className="modal-content">
						<div className="modal-body">
							<div className="px-3">
								<div className="d-flex justify-content-center mt-2 mb-4 navbar-light">
									<a
										href="manage user.html"
										className="navbar-brand"
										style={{ minWidth: 0 }}>
										{/* <!-- LOGO --> */}

										<span className="ml-2">Add user</span>
									</a>
								</div>

								<form action="#">
									<div className="form-group">
										<label htmlFor="username">Name:</label>
										<input
											className="form-control"
											type="text"
											id="username"
											required=""
											placeholder="John Doe"
										/>
									</div>
									<div className="form-group">
										<label htmlFor="email">Email Address:</label>
										<input
											className="form-control"
											type="email"
											id="email"
											required=""
											placeholder="john@doe.com"
										/>
									</div>
									<div className="form-group">
										<label htmlFor="username">COntact:</label>
										<input
											className="form-control"
											type="text"
											id="username"
											required=""
											placeholder="John Doe"
										/>
									</div>
									<div className="form-group">
										<div className="custom-control custom-checkbox">
											<input
												type="checkbox"
												className="custom-control-input"
												id="terms"
											/>
											<label className="custom-control-label" htmlFor="terms">
												I accept <a href="#!">Terms and Conditions</a>
											</label>
										</div>
									</div>
									<div className="form-group text-center">
										<button className="btn btn-primary" type="submit">
											Add Now
										</button>
									</div>
								</form>
							</div>
						</div>
					</div>
			</Modal>
		</>
	);
};

export default ManageUser;
