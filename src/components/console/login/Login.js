import React, {useContext, useState} from "react";
import styled from "styled-components";
import "./login.scoped.css";
import '../assets/css/app.scoped.css';
import UserContext from "../../../context/UserContext";

const Path = styled.path`
	fill: ${({ fill }) => fill || 'none'};
	d: ${({ d }) => d || 'none'};
  `;


const Login = () => {

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const {user, setUser}  = useContext(UserContext);



	return (
		<div className="layout-login-centered-boxed container-v1">
			<div className="layout-login-centered-boxed__form container-v2">
				<div className="d-flex flex-column justify-content-center align-items-center mt-2 mb-4 navbar-light">
					<a  className="text-center text-light-gray mb-4">
						<h2>Vigory</h2>
					</a>
				</div>

				<div className="card card-body box">
					<a href="#" className="btn btn-light btn-block">
						<span className="mr-2">
							<svg
								version="1.1"
								xmlns="http://www.w3.org/2000/svg"
								width="18px"
								height="18px"
								viewBox="0 0 48 48"
								className="abcRioButtonSvg">
								<g>
									<Path
										fill="#EA4335"
										d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"></Path>
									<Path
										fill="#4285F4"
										d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"></Path>
									<Path
										fill="#FBBC05"
										d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"></Path>
									<Path
										fill="#34A853"
										d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"></Path>
									<Path fill="none" d="M0 0h48v48H0z"></Path>
								</g>
							</svg>
						</span>
						Continue with Google
					</a>

					<div className="page-separator">
						<div className="page-separator__text">or</div>
					</div>

					<form action="https://lema.frontted.com/index.html">
						<div className="form-group">
							<label className="text-label" htmlFor="email_2">
								Email Address:
							</label>
							<div className="input-group input-group-merge">
								<div className="input-group-prepend">
									<div className="input-group-text">
										<span className="far fa-envelope"></span>
									</div>
								</div>
								<input
									id="email_2"
									type="email"
									required
									className="form-control form-control-prepended"
									placeholder="john@doe.com"
									value={email}
									onChange={(e)=>{
										setEmail(e.target.value)
									}}
								/>
							</div>
						</div>
						<div className="form-group">
							<label className="text-label" htmlFor="password_2">
								Password:
							</label>
							<div className="input-group input-group-merge">
								<div className="input-group-prepend">
									<div className="input-group-text">
										<span className="fa fa-key"></span>
									</div>
								</div>
								<input
									id="password_2"
									type="password"
									required
									className="form-control form-control-prepended"
									placeholder="Enter your password"
									value={password}
									onChange={(e) =>{
										setPassword(e.target.value);
									}}
								/>
							</div>
						</div>
						<div className="form-group mb-1">
							<button className="btn btn-block btn-primary" type="submit" >
								Login
							</button>
						</div>
						<div className="form-group text-center">
							<div className="custom-control custom-checkbox">
								<input
									type="checkbox"
									className="custom-control-input"
									defaultChecked
									id="remember"
								/>
								<label className="custom-control-label" htmlFor="remember">
									Remember me for 30 days
								</label>
							</div>
						</div>
						<div className="form-group text-center mb-0">
							<a href="#">Forgot password?</a> <br />
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Login;
