import React from "react";
import '../assets/css/app.scoped.css';
import { Table } from "react-bootstrap";

const Membership = () => {
	const minHeight = window.innerHeight - 150;

	return (
	<div className="mdk-drawer-layout__content page" style={{paddingTop:'130px', minHeight:minHeight}}>
		<div className="container-fluid page__heading-container">
			<div className="page__heading d-flex flex-column flex-md-row align-items-center justify-content-center justify-content-lg-between text-center text-lg-left">
				<h1 className="m-lg-0">Validate membership</h1>
				<a href="# " className="btn btn-primary ml-lg-3">
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
									src="/assets/images/256_jeremy-banks-798787-unsplash.jpg"
									width="60px"
									alt=""
								/>
							</div>

							<strong>Membership Name</strong>

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
							<Table className="table mb-0">
								<thead>
									<tr>
										<th>Invoice</th>
										<th className="text-center">Amount</th>
										<th className="text-center">Status</th>
										<th className="text-center" style={{width:'140px'}}>
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
							</Table>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	);
};

export default Membership;
