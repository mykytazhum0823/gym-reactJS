import React, { useEffect, useState } from "react";
import styled from 'styled-components'
import "./header.css";
import '../../assets/css/style.scoped.css';
import {Link} from "react-router-dom";
import LoginModal from '../modal/login.modal';
import SignupModal from "../modal/signup.modal";
import { useNavigate } from "react-router-dom";
import { logOut } from "../../../../fiebaseImp/js/user";


const Header = (props) => {
    const [loginShow, setLoginShow] = useState(false);
    const [signupShow, setSignupShow] = useState(false);
    const [isHome, setIsHome] = useState(false);
    const navigate = useNavigate();

    useEffect(()=>{
        setIsHome(props.isHome);
    }, [props])

    const closeLogin = ()=>{
        setLoginShow(false);
    }
    const closeSignup = ()=>{
        setSignupShow(false);
    }
    const signOut = ()=>{
        logOut();
        navigate("/");
    }

	return (
		<React.Fragment>
		<header className="header-wrap v1 sticky">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-1 col-md-4  col-5 mpx-0">
                        <div className="logo v1">
                            <a href="index-2.html"><img  alt="Image" className="logoImg"/>
                                <span>Vigory</span></a>
                        </div>
                    </div>
                    <div className="col-lg-11 col-md-8 col-7">
                        <div className="header-top">
                            <div className="row align-items-center">
                                <div className="col-lg-5  md-none">
                                    <p className="mb-0">New Membership Deals Going On! Join Now For $0 Initiation. </p>
                                </div>
                                <div className="col-lg-7">
                                    <div className="header-top-right">
                                        <div className="close-header-top">
                                            <button type="button"><i className="las la-times"></i></button>
                                        </div>
                                        <div className="header-top-contact">
                                            <p><i className="flaticon-placeholder"></i>Address: 123 Western Road, LA.</p>
                                            <a href="tel:2132008224"><i className="flaticon-phone-call"></i>213-200-8224</a>
                                        </div>
                                        <div className="lang_selctor">
                                            <i className="las la-globe"></i>
                                            <select>
                                                <option value="1">English</option>
                                                <option value="2">French</option>
                                                <option value="3">Arabic</option>
                                            </select>
                                        </div>
                                        <div className="header_btn xl-none">
                                            <a href="# " className="btn v1">Make A Visit</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="header-bottom">
                            <div className="row align-items-center">
                                <div className="col-lg-9 col-md-2 col-3 order-lg-1 order-md-2 order-2">
                                    <nav id="menu" className="main-menu  text-center">
                                        <ul>
                                            <li className="has-child">
                                                <Link to="/" className="active">
                                                    Home
                                                </Link>
                                            </li>
                                            <li className="has-child">
                                                <Link to="/console/admin" className="active">
                                                    Admin
                                                </Link>
                                            </li>
                                            { isHome &&
                                            <React.Fragment>
											<li className="has-child">
                                                <a onClick={(e)=>{e.preventDefault();
                                                     setLoginShow(true);
                                                     }}>
                                                    Login
                                                </a>
                                            </li>
                                            <li className="has-child">
                                                <a onClick={(e)=>{e.preventDefault();
                                                     setSignupShow(true);
                                                     }}>
                                                    SignUp
                                                </a>
                                            </li>
                                            </React.Fragment>
                                            }
                                            {
                                                !isHome && 
                                                <li className="has-child">
                                                    <a onClick={(e)=>{
                                                        e.preventDefault();
                                                        signOut();
                                                        }}>
                                                        LogOut
                                                    </a>
                                                </li>
                                            }
                                    
                                        </ul>
                                    </nav>
                                    <div className="mobile-menu">
                                        <a href='#menu'><i className="las la-bars"></i></a>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-10 col-9 order-lg-2 order-md-1 order-1">
                                    <div className="header-bottom-right">
                                        <div className="mobile-top-bar xl-none">
                                            <i className="las la-sliders-h"></i>
                                        </div>

                                        <div className="header-btn md-none">
                                            <Link to="/contact" className="btn v1">
                                                Contact Us
                                            </Link>
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
        <LoginModal show={loginShow} handleCloseLogin={closeLogin}/>
        <SignupModal show={signupShow} handleCloseSignup={closeSignup}/>
		</React.Fragment>
	);
};

export default Header;
