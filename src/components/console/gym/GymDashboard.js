import React, { useLayoutEffect } from 'react';
import '../assets/css/app.scoped.css';

const GymDashboard = () => {
	const minHeight = window.innerHeight - 150;
	return (
	<div className="mdk-drawer-layout__content page" style={{paddingTop:'130px', minHeight:minHeight}}>
		<div className="container-fluid page__heading-container">
			<div className="page__heading d-flex flex-column flex-md-row align-items-center justify-content-center justify-content-lg-between text-center text-lg-left">
				<h1 className="m-lg-0">Dashboard</h1>
			</div>
		</div>

		<div className="container-fluid page__container">
			<div className="row card-group-row">
				<div className="col-lg-4 col-md-6 card-group-row__col">
					<div className="card card-group-row__card card-body card-body-x-lg flex-row align-items-center">
						<div className="flex">
							<div className="card-header__title text-muted mb-2">
								Total Coustomer's
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
								Total Classes
							</div>
							<div className="text-amount"> 5</div>
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
							<div className="text-amount"> 5</div>
						</div>

						<div className="avatar">
							<span className="bg-soft-success avatar-title rounded-circle text-center text-success">
								<i className="material-icons icon-40pt">gps_fixed</i>
							</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	);
};

export default GymDashboard;
