import React, { useState } from 'react';
import {Modal, Button, InputGroup, FormControl, Form} from 'react-bootstrap';

const SignupModal = (props)=>{
    const [show, setShow] = useState(props.show);
    const handleClose = ()=>{
        setShow(false);
    }
    const RegisterDataHandler = (e) => {
        e.preventDefault();
        console.log(registerData)
    }
    const registerChangeHandler = (e) => {
        const {name, value} = e.target;
        setRegisterData({
            ...registerData,
            [name]: value
        })
    }

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

                        <InputGroup className="mb-3">
                            <FormControl
                                type="email"
                                placeholder="Enter Email"
                                aria-label="email"
                                name="email"
                                onChange={registerChangeHandler}
                                aria-describedby="basic-addon1"
                            />
                        </InputGroup>
                        <InputGroup className="mb-3">
                            <FormControl
                                type="password"
                                placeholder="Enter Password"
                                aria-label="password"
                                name="password"
                                onChange={registerChangeHandler}
                                aria-describedby="basic-addon1"
                            />
                        </InputGroup>
                        <InputGroup className="mb-3">
                            <FormControl
                                type="password"
                                placeholder="Enter Confirm Password"
                                aria-label="password"
                                name="confirmPassword"
                                onChange={registerChangeHandler}
                                aria-describedby="basic-addon1"
                            />
                        </InputGroup>
                        <Button type="submit" className='w-100 modal_btn'>REGISTER</Button>
                    </Form>
                </Modal.Body>
            </div>
        </Modal>
    );
}

export default SignupModal;