import React from "react";
import '../assets/css/app.scoped.css';
import { Table } from "react-bootstrap";
const Reporting = () => {
	const minHeight = window.innerHeight - 150;

	return (
	<div className="mdk-drawer-layout__content page" style={{paddingTop:'130px', minHeight:minHeight}}>
		<div className="container-fluid page__heading-container">
			<div className="page__heading d-flex flex-column flex-md-row align-items-center justify-content-center justify-content-lg-between text-center text-lg-left">
				<h1 className="m-lg-0">Report Visitor</h1>
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
							<Table className="table mb-0">
								<thead>
									<tr>
										<th> ID</th>
										<th className="text-center">Report Sub</th>
										<th className="text-center">Description</th>
										<th className="text-center" style={{width: '140px'}}>
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
							</Table>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	);
};

export default Reporting;
