import React, { useEffect, useState } from 'react';
import {Modal, Button, FormControl, Form, FormGroup, FormLabel, FormSelect, Alert} from 'react-bootstrap';
import './signup.scoped.css';
import {signUpWithEmailAndPassword} from '../../../../fiebaseImp/js/user';
import { useNavigate } from 'react-router-dom';

const SignupModal = (props)=>{
    const [show, setShow] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmpwd, setConfirmpwd] = useState('');
    const [mobile, setMobile] = useState('');
    const [type, setType] = useState(0);
    const [membership, setMembership] = useState('');
    const [singupError, setSignupError] = useState('');
    let navigate = useNavigate();

    useEffect(()=>{
        setShow(props.show);
    },[props]);

    const userType = ["admin", "trainer", "customer", "gym"];

    const handleClose = ()=>{
        setShow(false);
        props.handleCloseSignup();
    }
    const RegisterDataHandler = (e) => {
        e.preventDefault();
        signUpWithEmailAndPassword(username, password,type,mobile, membership)
        .then((data)=>{
            if(data.token !== 0)
            {
                console.log('test');
                navigate(`/console/${userType[type]}`);
            }
            else{
                setSignupError(data.error.message);
            }
        });
    }

    const validateEmail = (email) =>{
        return email.match(
            /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
    }

    const isValid = 
        password !== confirmpwd ||
        !validateEmail(username) ||
        username === '' ||
        mobile === '' ||
        membership === '';

    return(
        <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false} >
            <div className="modal_main_div">
                <Modal.Header className="modal_header">
                    <Modal.Title>Register</Modal.Title>
                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                    <h3 onClick={handleClose} style={{cursor: 'pointer'}}>
                        x
                    </h3>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={RegisterDataHandler}>

                        <FormGroup className="mb-3">
                            <FormLabel> Username</FormLabel>
                            <FormControl
                                type="email"
                                placeholder="Enter Email"
                                aria-label="email"
                                name="email"
                                value={username}
                                onChange={(e)=>{
                                    setUsername(e.target.value);
                                }}
                                aria-describedby="basic-addon1"
                            />
                        </FormGroup>
                        <FormGroup className="mb-3">
                            <FormLabel>Password</FormLabel>
                            <FormControl
                                type="password"
                                placeholder="Enter Password"
                                aria-label="password"
                                name="password"
                                value={password}
                                onChange={(e)=>{
                                    setPassword(e.target.value);
                                }}
                                aria-describedby="basic-addon1"
                            />
                        </FormGroup>
                        <FormGroup className="mb-3">
                            <FormLabel>Confirm Password</FormLabel>
                            <FormControl
                                type="password"
                                placeholder="Enter Confirm Password"
                                aria-label="password"
                                name="confirmPassword"
                                value={confirmpwd}
                                onChange={(e)=>{
                                    setConfirmpwd(e.target.value);
                                }}
                                aria-describedby="basic-addon1"
                            />
                        </FormGroup>
                        <FormGroup className="mb-3">
                            <FormLabel>Mobile Number</FormLabel>
                            <FormControl
                                type="text"
                                placeholder="Enter Mobile Number"
                                aria-label="mobile"
                                name="mobild"
                                value={mobile}
                                onChange={(e)=>{
                                    setMobile(e.target.value);
                                }}
                                aria-describedby="basic-addon1"
                            />
                        </FormGroup>
                        <FormGroup className="mb-3">
                            <FormLabel>Type</FormLabel>
                            <FormSelect 
                                value={type}
                                onChange={(e)=>{
                                    setType(e.target.value);
                                }}>
                                    <option defaultValue="0">Admin</option>
                                    <option value="1">Trainer</option>
                                    <option value="2">Customer</option>
                                    <option value="3">gym</option>
                            </FormSelect>
                            
                        </FormGroup>
                        <FormGroup className="mb-3">
                            <FormLabel>Membership</FormLabel>
                            <FormControl
                                type="text"
                                placeholder="Enter Membership"
                                aria-label="membership"
                                name="membership"
                                value={membership}
                                onChange={(e)=>{
                                    setMembership(e.target.value);
                                }}
                                aria-describedby="basic-addon1"
                            />
                        </FormGroup>
                        {(singupError !== '') && <Alert variant='danger'>{singupError}</Alert>}
                        <Button type="submit" disabled={isValid} className='w-100 modal_btn mt-3'>REGISTER</Button>
                    </Form>
                </Modal.Body>
            </div>
        </Modal>
    );
}

export default SignupModal;