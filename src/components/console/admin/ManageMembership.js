import React, { useState } from "react";
import '../assets/css/app.scoped.css';
import { Modal } from "react-bootstrap";

const ManageMembership = () => {
	const [isOpen, setIsOpen] = useState(false);
	const showModal = ()=>{
		setIsOpen(true);
	}
	const hideModal = ()=>{
		setIsOpen(false);
	}
	
	return (
		<React.Fragment>
			<div className="mdk-drawer-layout__content page" style={{paddingTop:'60px'}}>
				<div className="container-fluid page__heading-container">
					<div className="page__heading d-flex align-items-center justify-content-between">
						<h1 className="m-0">Member Ship</h1>
						<a href="# " className="btn btn-primary ml-3">
							{" "}
							<button
								type="button"
								className="btn btn-primary"
								onClick={showModal}>
								Add
							</button>
						</a>
					</div>
				</div>

				<div className="container-fluid page__container">
					<div className="row">
						<div className="col-md-3">
							<div className="card card__course">
								<div className="card-header card-header-large card-header-dark bg-dark d-flex justify-content-center">
									<a
										className="card-header__title  justify-content-center align-self-center d-flex flex-column"
										href="student-course.html">
										<span>
											<img
												src="/assets//images/logos/react.svg"
												className="mb-1"
												style={{ width: "4px" }}
												alt="logo"
											/>
										</span>
										<span className="course__title">Basic</span>
										<span className="course__subtitle">Membership</span>
									</a>
								</div>
								<div className="p-3">
									<div className="mb-2">
										<span className="mr-2">
											<a href="# " className="rating-link active">
												<i className="material-icons icon-16pt">star</i>
											</a>
											<a href="# " className="rating-link active">
												<i className="material-icons icon-16pt">star</i>
											</a>
											<a href="# " className="rating-link active">
												<i className="material-icons icon-16pt">star</i>
											</a>
											<a href="# " className="rating-link active">
												<i className="material-icons icon-16pt">star</i>
											</a>
											<a href="# " className="rating-link active">
												<i className="material-icons icon-16pt">
													star_half
												</i>
											</a>
										</span>
										<strong>4.7</strong>
										<br />
										<small className="text-muted">(391 ratings)</small>
									</div>
									<div className="d-flex align-items-center">
										<button type="button" className="btn btn-success">
											Edit
										</button>
										<a href="# " className="btn btn-danger ml-auto">
											<button type="button" className="btn btn-danger">
												Remove
											</button>
										</a>
									</div>
								</div>
							</div>
						</div>

						<div className="col-md-3">
							<div className="card card__course">
								<div className="card-header card-header-large card-header-dark bg-dark d-flex justify-content-center">
									<a
										className="card-header__title  justify-content-center align-self-center d-flex flex-column"
										href="student-course.html">
										<span>
											<img
												src="/assets//images/logos/react.svg"
												className="mb-1"
												style={{ width: "4px" }}
												alt="logo"
											/>
										</span>
										<span className="course__title">Basic</span>
										<span className="course__subtitle">Membership</span>
									</a>
								</div>
								<div className="p-3">
									<div className="mb-2">
										<span className="mr-2">
											<a href="# " className="rating-link active">
												<i className="material-icons icon-16pt">star</i>
											</a>
											<a href="# " className="rating-link active">
												<i className="material-icons icon-16pt">star</i>
											</a>
											<a href="# " className="rating-link active">
												<i className="material-icons icon-16pt">star</i>
											</a>
											<a href="# " className="rating-link active">
												<i className="material-icons icon-16pt">star</i>
											</a>
											<a href="# " className="rating-link active">
												<i className="material-icons icon-16pt">
													star_half
												</i>
											</a>
										</span>
										<strong>4.7</strong>
										<br />
										<small className="text-muted">(391 ratings)</small>
									</div>
									<div className="d-flex align-items-center">
										<button type="button" className="btn btn-success">
											Edit
										</button>
										<a href="# " className="btn btn-danger ml-auto">
											<button type="button" className="btn btn-danger">
												Remove
											</button>
										</a>
									</div>
								</div>
							</div>
						</div>

						<div className="col-md-3">
							<div className="card card__course">
								<div className="card-header card-header-large card-header-dark bg-dark d-flex justify-content-center">
									<a
										className="card-header__title  justify-content-center align-self-center d-flex flex-column"
										href="student-course.html">
										<span>
											<img
												src="/assets//images/logos/react.svg"
												className="mb-1"
												style={{ width: "4px" }}
												alt="logo"
											/>
										</span>
										<span className="course__title">Basic</span>
										<span className="course__subtitle">Membership</span>
									</a>
								</div>
								<div className="p-3">
									<div className="mb-2">
										<span className="mr-2">
											<a href="# " className="rating-link active">
												<i className="material-icons icon-16pt">star</i>
											</a>
											<a href="# " className="rating-link active">
												<i className="material-icons icon-16pt">star</i>
											</a>
											<a href="# " className="rating-link active">
												<i className="material-icons icon-16pt">star</i>
											</a>
											<a href="# " className="rating-link active">
												<i className="material-icons icon-16pt">star</i>
											</a>
											<a href="# " className="rating-link active">
												<i className="material-icons icon-16pt">
													star_half
												</i>
											</a>
										</span>
										<strong>4.7</strong>
										<br />
										<small className="text-muted">(391 ratings)</small>
									</div>
									<div className="d-flex align-items-center">
										<button type="button" className="btn btn-success">
											Edit
										</button>
										<a href="# " className="btn btn-danger ml-auto">
											<button type="button" className="btn btn-danger">
												Remove
											</button>
										</a>
									</div>
								</div>
							</div>
						</div>
						<div className="col-md-3">
							<div className="card card__course">
								<div className="card-header card-header-large card-header-dark bg-dark d-flex justify-content-center">
									<a
										className="card-header__title  justify-content-center align-self-center d-flex flex-column"
										href="student-course.html">
										<span>
											<img
												src="/assets//images/logos/react.svg"
												className="mb-1"
												style={{ width: "4px" }}
												alt="logo"
											/>
										</span>
										<span className="course__title">Basic</span>
										<span className="course__subtitle">Membership</span>
									</a>
								</div>
								<div className="p-3">
									<div className="mb-2">
										<span className="mr-2">
											<a href="# " className="rating-link active">
												<i className="material-icons icon-16pt">star</i>
											</a>
											<a href="# " className="rating-link active">
												<i className="material-icons icon-16pt">star</i>
											</a>
											<a href="# " className="rating-link active">
												<i className="material-icons icon-16pt">star</i>
											</a>
											<a href="# " className="rating-link active">
												<i className="material-icons icon-16pt">star</i>
											</a>
											<a href="# " className="rating-link active">
												<i className="material-icons icon-16pt">
													star_half
												</i>
											</a>
										</span>
										<strong>4.7</strong>
										<br />
										<small className="text-muted">(391 ratings)</small>
									</div>
									<div className="d-flex align-items-center">
										<button type="button" className="btn btn-success">
											Edit
										</button>
										<a href="# " className="btn btn-danger ml-auto">
											<button type="button" className="btn btn-danger">
												Remove
											</button>
										</a>
									</div>
								</div>
							</div>
						</div>

						<div className="col-md-3">
							<div className="card card__course">
								<div className="card-header card-header-large card-header-dark bg-dark d-flex justify-content-center">
									<a
										className="card-header__title  justify-content-center align-self-center d-flex flex-column"
										href="student-course.html">
										<span>
											<img
												src="/assets//images/logos/react.svg"
												className="mb-1"
												style={{ width: "4px" }}
												alt="logo"
											/>
										</span>
										<span className="course__title">Basic</span>
										<span className="course__subtitle">Membership</span>
									</a>
								</div>
								<div className="p-3">
									<div className="mb-2">
										<span className="mr-2">
											<a href="# " className="rating-link active">
												<i className="material-icons icon-16pt">star</i>
											</a>
											<a href="# " className="rating-link active">
												<i className="material-icons icon-16pt">star</i>
											</a>
											<a href="# " className="rating-link active">
												<i className="material-icons icon-16pt">star</i>
											</a>
											<a href="# " className="rating-link active">
												<i className="material-icons icon-16pt">star</i>
											</a>
											<a href="# " className="rating-link active">
												<i className="material-icons icon-16pt">
													star_half
												</i>
											</a>
										</span>
										<strong>4.7</strong>
										<br />
										<small className="text-muted">(391 ratings)</small>
									</div>
									<div className="d-flex align-items-center">
										<button type="button" className="btn btn-success">
											Edit
										</button>
										<a href="# " className="btn btn-danger ml-auto">
											<button type="button" className="btn btn-danger">
												Remove
											</button>
										</a>
									</div>
								</div>
							</div>
						</div>

						<div className="col-md-3">
							<div className="card card__course">
								<div className="card-header card-header-large card-header-dark bg-dark d-flex justify-content-center">
									<a
										className="card-header__title  justify-content-center align-self-center d-flex flex-column"
										href="student-course.html">
										<span>
											<img
												src="/assets//images/logos/react.svg"
												className="mb-1"
												style={{ width: "4px" }}
												alt="logo"
											/>
										</span>
										<span className="course__title">Basic</span>
										<span className="course__subtitle">Membership</span>
									</a>
								</div>
								<div className="p-3">
									<div className="mb-2">
										<span className="mr-2">
											<a href="# " className="rating-link active">
												<i className="material-icons icon-16pt">star</i>
											</a>
											<a href="# " className="rating-link active">
												<i className="material-icons icon-16pt">star</i>
											</a>
											<a href="# " className="rating-link active">
												<i className="material-icons icon-16pt">star</i>
											</a>
											<a href="# " className="rating-link active">
												<i className="material-icons icon-16pt">star</i>
											</a>
											<a href="# " className="rating-link active">
												<i className="material-icons icon-16pt">
													star_half
												</i>
											</a>
										</span>
										<strong>4.7</strong>
										<br />
										<small className="text-muted">(391 ratings)</small>
									</div>
									<div className="d-flex align-items-center">
										<button type="button" className="btn btn-success">
											Edit
										</button>
										<a href="# " className="btn btn-danger ml-auto">
											<button type="button" className="btn btn-danger">
												Remove
											</button>
										</a>
									</div>
								</div>
							</div>
						</div>
						<div className="col-md-3">
							<div className="card card__course">
								<div className="card-header card-header-large card-header-dark bg-dark d-flex justify-content-center">
									<a
										className="card-header__title  justify-content-center align-self-center d-flex flex-column"
										href="student-course.html">
										<span>
											<img
												src="/assets//images/logos/react.svg"
												className="mb-1"
												style={{ width: "4px" }}
												alt="logo"
											/>
										</span>
										<span className="course__title">Basic</span>
										<span className="course__subtitle">Membership</span>
									</a>
								</div>
								<div className="p-3">
									<div className="mb-2">
										<span className="mr-2">
											<a href="# " className="rating-link active">
												<i className="material-icons icon-16pt">star</i>
											</a>
											<a href="# " className="rating-link active">
												<i className="material-icons icon-16pt">star</i>
											</a>
											<a href="# " className="rating-link active">
												<i className="material-icons icon-16pt">star</i>
											</a>
											<a href="# " className="rating-link active">
												<i className="material-icons icon-16pt">star</i>
											</a>
											<a href="# " className="rating-link active">
												<i className="material-icons icon-16pt">
													star_half
												</i>
											</a>
										</span>
										<strong>4.7</strong>
										<br />
										<small className="text-muted">(391 ratings)</small>
									</div>
									<div className="d-flex align-items-center">
										<button type="button" className="btn btn-success">
											Edit
										</button>
										<a href="# " className="btn btn-danger ml-auto">
											<button type="button" className="btn btn-danger">
												Remove
											</button>
										</a>
									</div>
								</div>
							</div>
						</div>
						<div className="col-md-3">
							<div className="card card__course">
								<div className="card-header card-header-large card-header-dark bg-dark d-flex justify-content-center">
									<a
										className="card-header__title  justify-content-center align-self-center d-flex flex-column"
										href="student-course.html">
										<span>
											<img
												src="/assets//images/logos/react.svg"
												className="mb-1"
												style={{ width: "4px" }}
												alt="logo"
											/>
										</span>
										<span className="course__title">Basic</span>
										<span className="course__subtitle">Membership</span>
									</a>
								</div>
								<div className="p-3">
									<div className="mb-2">
										<span className="mr-2">
											<a href="# " className="rating-link active">
												<i className="material-icons icon-16pt">star</i>
											</a>
											<a href="# " className="rating-link active">
												<i className="material-icons icon-16pt">star</i>
											</a>
											<a href="# " className="rating-link active">
												<i className="material-icons icon-16pt">star</i>
											</a>
											<a href="# " className="rating-link active">
												<i className="material-icons icon-16pt">star</i>
											</a>
											<a href="# " className="rating-link active">
												<i className="material-icons icon-16pt">
													star_half
												</i>
											</a>
										</span>
										<strong>4.7</strong>
										<br />
										<small className="text-muted">(391 ratings)</small>
									</div>
									<div className="d-flex align-items-center">
										<button type="button" className="btn btn-success">
											Edit
										</button>
										<a href="# " className="btn btn-danger ml-auto">
											<button type="button" className="btn btn-danger">
												Remove
											</button>
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* <!-- membership Modal --> */}
			<Modal
				id="modal-signup"
				className="modal fade"
				show={isOpen}
				centered
				onHide={hideModal}>
					<div className="modal-content">
						<div className="modal-body">
							<div className="px-3">
								<div className="d-flex justify-content-center mt-2 mb-4 navbar-light">
									<a
										href="manage_membership.html"
										className="navbar-brand"
										style={{ minWidth: 0 }}>
										{/* <!-- LOGO --> */}

										<span className="ml-2">Membership</span>
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
										<label htmlFor="username">price:</label>
										<input
											className="form-control"
											type="text"
											id="username"
											required=""
											placeholder="John Doe"
										/>
									</div>
									<div className="form-group">
										<label htmlFor="username">Duration:</label>
										<input
											className="form-control"
											type="text"
											id="username"
											required=""
											placeholder="John Doe"
										/>
									</div>
									<div className="form-group">
										<label htmlFor="username">Description:</label>
										<input
											className="form-control"
											type="text"
											id="username"
											required=""
											placeholder="John Doe"
										/>
									</div>

									<div className="form-group text-center">
										<button className="btn btn-primary" type="submit">
											Create{" "}
										</button>
									</div>
								</form>
							</div>
						</div>
					</div>
			</Modal>
		</React.Fragment>
	);
};

export default ManageMembership;
