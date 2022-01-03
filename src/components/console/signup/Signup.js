import React from "react";

const Signup = () => {
	return (
		<div className="layout-login-centered-box">
			<div class="layout-login-centered-boxed__form">
				<div class="d-flex flex-column justify-content-center align-items-center mt-2 mb-4 navbar-light">
					<a href="index-2.html" class="text-center text-light-gray mb-4">
						<h2>Vigory</h2>
					</a>
				</div>
				<div class="card card-body">
					<a href="#" class="btn btn-light btn-block">
						<span class="mr-2">
							<svg
								version="1.1"
								xmlns="http://www.w3.org/2000/svg"
								width="18px"
								height="18px"
								viewBox="0 0 48 48"
								class="abcRioButtonSvg">
								<g>
									<path
										fill="#EA4335"
										d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"></path>
									<path
										fill="#4285F4"
										d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"></path>
									<path
										fill="#FBBC05"
										d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"></path>
									<path
										fill="#34A853"
										d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"></path>
									<path fill="none" d="M0 0h48v48H0z"></path>
								</g>
							</svg>
						</span>
						Continue with Google
					</a>

					<div class="page-separator">
						<div class="page-separator__text">or</div>
					</div>

					<form action="https://lema.frontted.com/index.html" novalidate>
						<div class="form-group">
							<label class="text-label" for="name_2">
								Name:
							</label>
							<div class="input-group input-group-merge">
								<input
									id="name_2"
									type="text"
									required=""
									class="form-control form-control-prepended"
									placeholder="John Doe"
								/>
								<div class="input-group-prepend">
									<div class="input-group-text">
										<span class="far fa-user"></span>
									</div>
								</div>
							</div>
						</div>
						<div class="form-group">
							<label class="text-label" for="email_2">
								Email Address:
							</label>
							<div class="input-group input-group-merge">
								<input
									id="email_2"
									type="email"
									required=""
									class="form-control form-control-prepended"
									placeholder="john@doe.com"
								/>
								<div class="input-group-prepend">
									<div class="input-group-text">
										<span class="far fa-envelope"></span>
									</div>
								</div>
							</div>
						</div>
						<div class="form-group">
							<label class="text-label" for="password_2">
								Password:
							</label>
							<div class="input-group input-group-merge">
								<input
									id="password_2"
									type="password"
									required=""
									class="form-control form-control-prepended"
									placeholder="Enter your password"
								/>
								<div class="input-group-prepend">
									<div class="input-group-text">
										<span class="material-icons">lock</span>
									</div>
								</div>
							</div>
						</div>
						<div class="form-group mb-2 text-center">
							<div class="custom-control custom-checkbox">
								<input
									type="checkbox"
									checked=""
									class="custom-control-input"
									id="terms"
								/>
								<label class="custom-control-label" for="terms">
									I accept <a href="#">Terms and Conditions</a>
								</label>
							</div>
						</div>
						<div class="form-group text-center">
							<button
								class="btn btn-success btn-lg btn-block mb-3"
								type="submit">
								Create Account
							</button>
						</div>
						<div class="text-center">
							<span>Have an account?</span>{" "}
							<a class="text-body text-underline" href="login.html">
								{" "}
								Login
							</a>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Signup;
