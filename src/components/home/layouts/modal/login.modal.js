import React, { useEffect, useState, useContext } from 'react';
import {Modal, Button,FormControl, Form, FormLabel, FormGroup, Alert} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import './login.scoped.css';
import {
    logInWithEmailAndPassword,
    loginwithGoogleAccount,
    loginWithApple,
    loginWithFacebook,
    socialLoginWithPopUp
    } from '../../../../fiebaseImp/js/user';
import UserContext from '../../../../context/UserContext';
import {GoogleAuthProvider, OAuthProvider} from "firebase/auth";

const Styles = styled('div')`
    background: #121212;
    color: white;
    .modal-body{
        padding: 20px 30px 30px;
    }
    .sign-mode{
        width: 50%;
        display: inline-grid;
    }
    .sign-mode h4{
        font-size: 20px;
        font-weight: 500;
        text-transform: uppercase;
    }
    .sign-mode.v1 .content{
        padding: 20px 20px 20px 0px;
        border-right: 1px solid #ced4da;
    }
    .sign-mode.v2{
        padding: 20px 0px 20px 20px;
    }
    .social-btn{
        width:100%;
        padding: 12px;
        border:none;
        border-radius: 4px;
        margin:5px 0;
        font-size:16px;
        line-height: 20px;
        text-decoration: none;
        text-transform: uppercase;
        display:inline-flex;
    }
    .btn{
        width:100%;
        padding: 12px;
        border:none;
        border-radius: 4px;
        margin:5px 0;
        font-size:16px;
        line-height: 20px;
        text-decoration: none;
        text-transform: uppercase;
    }
    .social-btn span{
        width:100%;
        text-align:center;
        cursor:pointer;
    }
    .social-btn svg{
        fill: white;
    }
    .fb {
        background-color: #3B5998;
        color: white;
      }
    .fb:hover, fb:active{
        background-color: #2068fd;
    }
    .twitter {
        background-color: #55ACEE;
        color: white;
      }

    .mobile {
        background-color: #55ACEE;
        color: white;
      }
    .mobile:hover, .mobile:active{
        background-color: #0d8ff1;
    }
    .google {
        background-color: #dd4b39;
        color: white;
      }
    .google{
        background-color: #e5240c;
    }

    .apple{
        background-color:#b96e07;
        color:white;
    }
    .apple:hover, .apple:active{
        background-color:#e58807
    }
    .error{
        font-color:red;
    }
    @media (max-width: 700px){
        .sign-mode{
            width:100%;
        }
        .sign-mode.v1 .content{
            border-right:0px;
            padding-right:0px;
        }
        .sign-mode.v2{
            padding-left: 0px;
        }
    }
`;

const LoginModal  = (props)=>{
    const appleProvider = new OAuthProvider('apple.com');
    appleProvider.addScope('email');
    appleProvider.addScope('name');

    const googleProvider = new GoogleAuthProvider();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [show, setShow] = useState(false);

    const navigate = useNavigate();
    const [token,setToken] = useState('');
    const [profile, setProfile] = useState({});

    const {user, setUser}  = useContext(UserContext);

    useEffect(()=>{
        setShow(props.show);
    }, [props]);

    const handleClose = ()=>{
        setShow(false);
        props.handleCloseLogin();
    }

    const loginDataHandler = (e)=>{
        e.preventDefault();
        logInWithEmailAndPassword(email, password)
        .then((data)=>{
            if(data.error !== ''){
                setError(data.error);
            }
            else{
                setProfile(data.profile);
                setUser(data.profile);
                setToken(data.token);
                localStorage.setItem('isAuthenticated', 'true');
                navigate(`/console/${data.profile.type}`);
            }
        });
    }

    const socialLogin = (provider) => {
        socialLoginWithPopUp(provider).then((data)=>{
            setProfile(data.profile);
            setUser(data.profile);
            setToken(data.token);
            localStorage.setItem('isAuthenticated', 'true');
            navigate(`/console/${data.profile.type}`);
        })
    }


    const validateEmail = (email) =>{
        return email.match(
            /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
    }

    const isValid =
        !validateEmail(email) ||
        password === '';


    return(
        <Modal  show={show} onHide={handleClose} backdrop="static" keyboard={false} centered>
            <Styles>
            <Modal.Header className="modal_header">
                <Modal.Title>Login</Modal.Title>
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <h3 onClick={handleClose} style={{cursor: 'pointer'}}>
                    x
                </h3>
            </Modal.Header>
            <Modal.Body>
                <div className="sign-mode v1">
                    <h5> SIGN IN </h5>
                    <div className="content">
                        <Form onSubmit={loginDataHandler}>

                            <FormGroup className="mb-3">
                                <FormLabel>Email</FormLabel>
                                <FormControl
                                    type={'email'}
                                    placeholder="Enter Email"
                                    name="email"
                                    aria-label="email"
                                    value={email}
                                    onChange={(e)=>{setEmail(e.target.value)}}
                                    aria-describedby="basic-addon1"
                                />
                            </FormGroup>
                            <FormGroup className="mb-3">
                                <FormLabel>Password</FormLabel>
                                <FormControl
                                    type={'password'}
                                    placeholder="Enter Password"
                                    name="password"
                                    aria-label="password"
                                    value={password}
                                    onChange={(e)=>{setPassword(e.target.value)}}
                                    aria-describedby="basic-addon1"
                                />
                            </FormGroup>
                            <Button type="submit" disabled={isValid} className='primary'>LOGIN</Button>
                            {error !== '' && <Alert variant='danger'> {error}</Alert>}
                        </Form>
                    </div>
                </div>
                <div className="sign-mode v2">
                    <h5>Sign in with</h5>
                    <a className="apple social-btn" onClick={() => socialLogin(appleProvider)}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                            <path d="M22 17.607c-.786 2.28-3.139 6.317-5.563 6.361-1.608.031-2.125-.953-3.963-.953-1.837 0-2.412.923-3.932.983-2.572.099-6.542-5.827-6.542-10.995 0-4.747 3.308-7.1 6.198-7.143 1.55-.028 3.014 1.045 3.959 1.045.949 0 2.727-1.29 4.596-1.101.782.033 2.979.315 4.389 2.377-3.741 2.442-3.158 7.549.858 9.426zm-5.222-17.607c-2.826.114-5.132 3.079-4.81 5.531 2.612.203 5.118-2.725 4.81-5.531z"/>
                        </svg>
                        <span>
                            Apple
                        </span>
                    </a>

                    <a className="fb social-btn">
                        <svg width="18" height="18" viewBox="0 0 20 20">
                            <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                        </svg>
                        <span>facebook</span>
                    </a>
                    {/* <a className="twitter social-btn">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                            <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                        </svg>
                        <span>twitter</span>
                    </a> */}


                    <a className="google social-btn" onClick={() => socialLogin(googleProvider)}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                            <path d="M7 11v2.4h3.97c-.16 1.029-1.2 3.02-3.97 3.02-2.39 0-4.34-1.979-4.34-4.42 0-2.44 1.95-4.42 4.34-4.42 1.36 0 2.27.58 2.79 1.08l1.9-1.83c-1.22-1.14-2.8-1.83-4.69-1.83-3.87 0-7 3.13-7 7s3.13 7 7 7c4.04 0 6.721-2.84 6.721-6.84 0-.46-.051-.81-.111-1.16h-6.61zm0 0 17 2h-3v3h-2v-3h-3v-2h3v-3h2v3h3v2z" fillRule="evenodd" clipRule="evenodd"/>
                        </svg>
                        <span>
                            google
                        </span>
                    </a>
                    <a className="mobile social-btn" >
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                            <path d="M17.5 2c.276 0 .5.224.5.5v19c0 .276-.224.5-.5.5h-11c-.276 0-.5-.224-.5-.5v-19c0-.276.224-.5.5-.5h11zm2.5 0c0-1.104-.896-2-2-2h-12c-1.104 0-2 .896-2 2v20c0 1.104.896 2 2 2h12c1.104 0 2-.896 2-2v-20zm-9.5 1h3c.276 0 .5.224.5.501 0 .275-.224.499-.5.499h-3c-.275 0-.5-.224-.5-.499 0-.277.225-.501.5-.501zm1.5 18c-.553 0-1-.448-1-1s.447-1 1-1c.552 0 .999.448.999 1s-.447 1-.999 1zm5-3h-10v-13h10v13z"/>
                        </svg>
                        <span>phone</span>
                    </a>
                </div>
            </Modal.Body>
            </Styles>
        </Modal>
    );
}

export default LoginModal;
