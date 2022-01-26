import React, { useEffect, useState } from "react";
import styled from 'styled-components'
import "./header.css";
import '../../assets/css/style.scoped.css';

import {Link} from "react-router-dom";
import LoginModal from '../modal/login.modal';
import SignupModal from "../modal/signup.modal";
import { useNavigate } from "react-router-dom";
import { logOut } from "../../../../fiebaseImp/js/user";
import SidebarModal from "../modal/sidebar.modal";


const Header = (props) => {
    const [loginShow, setLoginShow] = useState(false);
    const [signupShow, setSignupShow] = useState(false);
    const [sidebarShow, setSidebarShow] = useState(false);
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
    const closeSidebar = ()=>{
        setSidebarShow(false);
    }
    const signOut = ()=>{
        logOut();
        localStorage.clear();
        navigate("/");
    }

    const handleMobileSidebar = ()=>{
        setSidebarShow(true);
    }

	return (
		<React.Fragment>
		<header className="header-wrap v1 sticky">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-1 col-md-4  col-5 mpx-0">
                        <div className="logo v1">
                            <a><img  alt="Image" className="logoImg"/>
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
                                <div className="col-lg-10 col-md-4 col-3 order-lg-1 order-md-2 order-2">
                                    <nav id="menu" className="main-menu  text-center">
                                        <ul style={{display:'flex'}}>
                                            <li className="has-child" style={{flexGrow:3}}>
                                                <Link to="/" className="active">
                                                    Home
                                                </Link>
                                                
                                            </li>
                                            { isHome &&
                                            <React.Fragment>
											<li className="has-child login_btn">
                                                <a onClick={(e)=>{e.preventDefault();
                                                    console.log('show');
                                                     setLoginShow(true);
                                                     }}>
                                                    Login
                                                </a>
                                            </li>
                                            <li className="has-child register_btn">
                                                <a onClick={(e)=>{e.preventDefault();
                                                     setSignupShow(true);
                                                     }}>
                                                    Register
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
                                        <a onClick={(e)=>
                                            {
                                                e.preventDefault();
                                                handleMobileSidebar();
                                            }}
                                        >
                                            <i className="las la-bars"></i>
                                        </a>
                                    </div>
                                </div>
                                <div className="col-lg-2 col-md-8 col-9 order-lg-2 order-md-1 order-1">
                                    <div className="header-bottom-right">
                                        <div className="mobile-top-bar xl-none">
                                            <i className="las la-sliders-h"></i>
                                        </div>

                                        <div className="header-btn md-none" style={{marginLeft:'10px'}}>
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
        <LoginModal  show={loginShow} handleCloseLogin={closeLogin}/>
        <SignupModal  show={signupShow} handleCloseSignup={closeSignup}/>
        <SidebarModal show={sidebarShow} handleCloseSidebar={closeSidebar}>
            <ul style={{display:'flex'}}>
                <li className="has-child">
                    <Link to="/" className="active"
                        onClick={()=>{
                            closeSidebar();
                        }}
                    >
                        Home
                    </Link>
                    
                </li>
                { isHome &&
                <React.Fragment>
                <li className="has-child login_btn">
                    <a onClick={(e)=>{
                            e.preventDefault();
                            setLoginShow(true);
                            closeSidebar();
                            }}>
                        Login
                    </a>
                </li>
                <li className="has-child register_btn">
                    <a onClick={(e)=>{
                            e.preventDefault();
                            setSignupShow(true);
                            closeSidebar();
                            }}>
                        Register
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
        </SidebarModal>
		</React.Fragment>
	);
};

export default Header;
