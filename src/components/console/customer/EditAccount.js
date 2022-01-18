import React from 'react';
import '../assets/css/app.scoped.css';

const EditAccount = () => {
	const minHeight = window.innerHeight - 150;
	return (
	<div className="mdk-drawer-layout__content page" style={{paddingTop:'130px', minHeight:minHeight}}>
		<div className="container-fluid page__heading-container">
			<div className="page__heading d-flex align-items-center justify-content-between">
				<h1 className="m-0">Edit Account</h1>
			</div>
		</div>

		<div className="container-fluid page__container">
			<div className="card card-form">
				<div className="row no-gutters">
					<div className="col-lg-4 card-body">
						<p>
							<strong className="headings-color">
								Basic Information
							</strong>
						</p>
						<p className="text-muted mb-0">
							Edit your account details and settings.
						</p>
					</div>
					<div className="col-lg-8 card-form__body card-body">
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
							<label htmlFor="desc">Bio / Description</label>
							<textarea
								id="desc"
								rows="4"
								className="form-control"
								placeholder="Bio / description ..."></textarea>
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
						<div className="form-group">
							<label htmlFor="subscribe">Subscribe to newsletter</label>
							<br />
							<div className="custom-control custom-checkbox-toggle custom-control-inline mr-1">
								<input
									defaultChecked=""
									type="checkbox"
									id="subscribe"
									className="custom-control-input"
								/>
								<label
									className="custom-control-label"
									htmlFor="subscribe">
									Yes
								</label>
							</div>
							<label htmlFor="subscribe" className="mb-0">
								Yes
							</label>
						</div>
					</div>
				</div>
			</div>

			<div className="card card-form">
				<div className="row no-gutters">
					<div className="col-lg-4 card-body">
						<p>
							<strong className="headings-color">
								Update Your Password
							</strong>
						</p>
						<p className="text-muted mb-0">Change your password.</p>
					</div>
					<div className="col-lg-8 card-form__body card-body">
						<div className="row">
							<div className="col-md-6">
								<div className="form-group">
									<label htmlFor="opass">Old Password</label>
									<input
										id="opass"
										type="password"
										className="form-control"
										placeholder="Old password"
										defaultValue="****"
									/>
								</div>
								<div className="form-group">
									<label htmlFor="npass">New Password</label>
									<input
										id="npass"
										type="password"
										className="form-control is-invalid"
									/>
									<small className="invalid-feedback">
										The new password must not be empty.
									</small>
								</div>
								<div className="form-group">
									<label htmlFor="cpass">Confirm Password</label>
									<input
										id="cpass"
										type="password"
										className="form-control"
										placeholder="Confirm password"
									/>
								</div>
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
								Profile Settings
							</strong>
						</p>
						<p className="text-muted mb-0">
							Update your public profile with relevant and meaningful
							information.
						</p>
					</div>
					<div className="col-lg-8 card-form__body card-body">
						<div className="form-group">
							<label>Avatar</label>
							<div
								className="dz-clickable media align-items-center"
								data-toggle="dropzone"
								data-dropzone-url="http://"
								data-dropzone-clickable=".dz-clickable"
								data-dropzone-files='["assets/images/account-add-photo.svg"]'>
								<div className="dz-preview dz-file-preview dz-clickable mr-3">
									<div className="avatar avatar-lg">
										<img
											src="/assets/images/account-add-photo.svg"
											className="avatar-img rounded"
											alt="..."
											data-dz-thumbnail
										/>
									</div>
								</div>
								<div className="media-body">
									<button className="btn btn-sm btn-primary dz-clickable">
										Choose photo
									</button>
								</div>
							</div>
						</div>
						<div className="form-group">
							<label htmlFor="desc2">Description</label>
							<textarea
								id="desc2"
								rows="4"
								className="form-control"
								placeholder="Description ..."></textarea>
						</div>
						<div className="form-group">
							<label htmlFor="social1">Social links</label>
							<div className="row">
								<div className="col-md-6">
									<div className="input-group input-group-merge mb-2">
										<input
											id="social1"
											type="text"
											className="form-control form-control-prepended"
											placeholder="Facebook"
										/>
										<div className="input-group-prepend">
											<div className="input-group-text">
												<span className="fab fa-facebook text-facebook"></span>
											</div>
										</div>
									</div>
									<div className="input-group input-group-merge mb-2">
										<input
											id="social2"
											type="text"
											className="form-control form-control-prepended"
											placeholder="Twitter"
										/>
										<div className="input-group-prepend">
											<div className="input-group-text">
												<span className="fab fa-twitter text-twitter"></span>
											</div>
										</div>
									</div>
									<div className="input-group input-group-merge mb-2">
										<input
											id="social3"
											type="text"
											className="form-control form-control-prepended"
											placeholder="Instagram"
										/>
										<div className="input-group-prepend">
											<div className="input-group-text">
												<span className="fab fa-instagram text-instagram"></span>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="form-group">
							<label htmlFor="customCheck1">
								Available for freelance?
							</label>
							<div className="custom-control custom-checkbox">
								<input
									type="checkbox"
									className="custom-control-input"
									id="customCheck1"
									defaultChecked
								/>
								<label
									className="custom-control-label"
									htmlFor="customCheck1">
									Yes, show me as available for freelance!
								</label>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="text-right mb-5">
				<a href="# " className="btn btn-success">
					Save
				</a>
			</div>
		</div>
	</div>
	);
};

export default EditAccount;
