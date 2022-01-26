import React from "react";
import '../assets/css/app.scoped.css';
import { Table } from "react-bootstrap";

const Payout = () => {
	const minHeight = window.innerHeight - 150;

	return (
	<div className="mdk-drawer-layout__content page" style={{paddingTop:'130px', minHeight:minHeight}}>
		<div className="container-fluid page__heading-container">
			<div className="page__heading d-flex align-items-center justify-content-between">
				<h1 className="m-0">Payout</h1>
			</div>
		</div>

		<div className="container-fluid page__container">
			<div className="card card-form">
				<div className="row no-gutters">
					<div className="col-lg-4 card-body">
						<p>
							<strong className="headings-color">Payout Account</strong>
						</p>
						<p className="text-muted mb-0">
							Where we will send you the money.
						</p>
					</div>
					<div className="col-lg-8 card-form__body card-body">
						<div className="form-group d-flex flex-column">
							<img
								alt="PayPal Logo"
								src="/assets/images/logos/paypal.svg"
								width="140"
							/>
							<div>contact@frontted.com</div>
						</div>

						<div className="form-group m-0">
							<a href="# " className="btn btn-success">
								Change
							</a>
						</div>
					</div>
				</div>
			</div>

			<div className="card card-form">
				<div className="row no-gutters">
					<div className="col-lg-4 card-body">
						<p>
							<strong className="headings-color">Account</strong>
						</p>
						<p className="text-muted mb-0">
							Set your account type &amp; details.
						</p>
					</div>
					<div className="col-lg-8 card-form__body card-body">
						<div className="form-group">
							<label htmlFor="fname">Account Type</label>
							<br />
							<div
								className="btn-group btn-group-toggle"
								data-toggle="buttons">
								<label className="btn btn-light active">
									<input
										type="radio"
										name="options"
										id="option1"
										defaultChecked
									/>{" "}
									Individual
								</label>
								<label className="btn btn-light">
									<input type="radio" name="options" id="option2" />{" "}
									Company
								</label>
							</div>
						</div>
						<hr />

						<div className="row">
							<div className="col">
								<div className="form-group">
									<label htmlFor="fname">First name</label>
									<input
										id="fname"
										type="text"
										className="form-control"
										placeholder="First name"
										defaultValue="Adrian"
									/>
								</div>
							</div>
							<div className="col">
								<div className="form-group">
									<label htmlFor="lname">Last name</label>
									<input
										id="lname"
										type="text"
										className="form-control"
										placeholder="Last name"
										defaultValue="Demian"
									/>
								</div>
							</div>
						</div>
						<div className="form-group">
							<label htmlFor="desc">Address</label>
							<textarea
								id="desc"
								rows="4"
								className="form-control"
								placeholder="Enter invoice address"></textarea>
						</div>
						<div className="form-group">
							<label htmlFor="country">Country</label>
							<br />
							<select id="country" className="custom-select w-auto">
								<option defaultValue="usa">United States</option>
								<option defaultValue="usa">Canada</option>
							</select>
							<small className="form-text text-muted">
								The country is not visible to other users.
							</small>
						</div>
						<div className="form-group m-0">
							<a href="# " className="btn btn-outline-primary">
								Update
							</a>
						</div>
					</div>
				</div>
			</div>
			<div className="card card-form">
				<div className="row no-gutters">
					<div className="col-lg-4 card-body">
						<p>
							<strong className="headings-color">Invoices</strong>
						</p>
						<p className="text-muted mb-0">Your past payments</p>
					</div>
					<div className="col-lg-8 card-form__body">
						<div className="table-responsive">
							<Table className="table mb-0">
								<thead>
									<tr>
										<th>Invoice</th>
										<th className="text-center">Amount</th>
										<th className="text-center">Status</th>
										<th className="text-center" style={{width: '140px'}}>
											Date
										</th>
									</tr>
								</thead>
								<tbody className="list">
									<tr>
										<td>
											<a href="fixed-invoice.html">
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
											<a href="fixed-invoice.html">
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
											<a href="fixed-invoice.html">
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
											<a href="fixed-invoice.html">
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
							</Table>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	);
};

export default Payout;
