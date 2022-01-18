import React from "react";
import '../assets/css/app.scoped.css';

const EnrollClass = () => {
	const minHeight = window.innerHeight - 150;

	return (
	<div className="mdk-drawer-layout__content page" style={{paddingTop:'130px', minHeight:minHeight}}>
		<div className="container-fluid page__heading-container">
			<div className="page__heading d-flex align-items-center justify-content-between">
				<h1 className="m-0">ClassName</h1>
				<a href="# " className="btn btn-success ml-3">
					Go to Profile<i className="material-icons">arrow_forward</i>
				</a>
			</div>
		</div>

		<div className="container-fluid page__container">
			<form action="#" className="">
				<div className="d-lg-flex">
					<div className="search-form mb-3 mr-3-lg search-form--light">
						<input
							type="text"
							className="form-control"
							placeholder="Search "
							id="searchSample02"
						/>
						<button className="btn" type="button">
							<i className="material-icons">search</i>
						</button>
					</div>

					<div className="form-inline  mb-3 ml-auto">
						<div className="form-group mr-3">
							<label htmlFor="custom-select" className="form-label mr-1">
								Category
							</label>
							<select
								id="custom-select"
								className="form-control custom-select"
								style={{ width: "200px" }}
								defaultValue={'0'}>
								<option value="0">All categories</option>
								<option value="1">category name</option>
								<option value="2">category name</option>
								<option value="3">category name</option>
							</select>
						</div>
						<div className="form-group">
							<label htmlFor="published01" className="form-label mr-1">
								Status
							</label>
							<select
								id="published01"
								className="form-control custom-select"
								style={{ width: "200px" }}
								defaultValue={0}>
								<option value="0">All</option>
								<option value="1">In Progress</option>
								<option value="3">New Releases</option>
							</select>
						</div>
					</div>
				</div>
			</form>

			<div className="row">
				<div className="col-md-3">
					<div className="card card__course">
						<div className="card-header card-header-large card-header-dark bg-dark d-flex justify-content-center">
							<a
								className="card-header__title  justify-content-center align-self-center d-flex flex-column"
								href="# ">
								<span className="course__title">ClassName </span>
								<span className="course__subtitle">
									className triner name & description
								</span>
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
								<strong className="h4 m-0">$49</strong>
								<a href="# " className="btn btn-primary ml-auto">
									<i className="material-icons">add_shopping_cart</i>
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
								href="# ">
								<span className="course__title">ClassName </span>
								<span className="course__subtitle">
									className triner name & description
								</span>
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
								<strong className="h4 m-0">$49</strong>
								<a href="# " className="btn btn-primary ml-auto">
									<i className="material-icons">add_shopping_cart</i>
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
								href="# ">
								<span className="course__title">ClassName </span>
								<span className="course__subtitle">
									className triner name & description
								</span>
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
								<strong className="h4 m-0">$49</strong>
								<a href="# " className="btn btn-primary ml-auto">
									<i className="material-icons">add_shopping_cart</i>
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
								href="# ">
								<span className="course__title">ClassName </span>
								<span className="course__subtitle">
									className triner name & description
								</span>
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
								<strong className="h4 m-0">$49</strong>
								<a href="# " className="btn btn-primary ml-auto">
									<i className="material-icons">add_shopping_cart</i>
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
								href="# ">
								<span className="course__title">ClassName </span>
								<span className="course__subtitle">
									className triner name & description
								</span>
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
								<strong className="h4 m-0">$49</strong>
								<a href="# " className="btn btn-primary ml-auto">
									<i className="material-icons">add_shopping_cart</i>
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
								href="# ">
								<span className="course__title">ClassName </span>
								<span className="course__subtitle">
									className triner name & description
								</span>
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
								<strong className="h4 m-0">$49</strong>
								<a href="# " className="btn btn-primary ml-auto">
									<i className="material-icons">add_shopping_cart</i>
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
								href="# ">
								<span className="course__title">ClassName </span>
								<span className="course__subtitle">
									className triner name & description
								</span>
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
								<strong className="h4 m-0">$49</strong>
								<a href="# " className="btn btn-primary ml-auto">
									<i className="material-icons">add_shopping_cart</i>
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
			<hr />
			<div className="d-flex flex-row align-items-center mb-3">
				<div className="form-inline">
					View
					<select className="custom-select ml-2" defaultValue={'20'}>
						<option value="20">
							20
						</option>
						<option value="50">50</option>
						<option value="100">100</option>
						<option value="200">200</option>
					</select>
				</div>
				<div className="ml-auto">
					20 <span className="text-muted">of 100</span>{" "}
					<a href="# " className="icon-muted">
						<i className="material-icons float-right">arrow_forward</i>
					</a>
				</div>
			</div>
		</div>
	</div>
	);
};

export default EnrollClass;
