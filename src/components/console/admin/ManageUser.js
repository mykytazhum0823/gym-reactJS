import React, { useState, useEffect } from "react";
import "../assets/css/app.scoped.css";
import {Modal, Form} from 'react-bootstrap';
import { getUsers } from "../../../fiebaseImp/js/user";
import UserItem from "./items/UserItem";

const ManageUser = () => {
	const userType = ['','trainer', '', 'gym owner', 'admin', 'customer'];
	const [isOpen, setIsOpen] = useState(false);
	const [users, setUsers] = useState([]);
	const [isEdit, setIsEdit] = useState(false);

	const [username, setUsername] = useState('');
	const [mobile, setMobile] = useState('');
	const [type, setType] = useState(0);
	const [membership, setMembership] = useState('');

	const showModal = ()=>{
		setIsOpen(true);
	}
	const hideModal = () =>{
		setIsOpen(false);
	}

	const getUsersInfo = ()=>{
		getUsers()
		.then((datas)=>{
			let temp_users  =[];
			datas.forEach((data)=>{
				let temp = {...data.data(), docId:data.id};
				temp_users.push(temp);
			});
			setUsers(temp_users);
		})
	}
	const handleAddUserBtn = ()=>{
		showModal();
		setIsEdit(false);
	}
	const addUser = ()=>{

	}
	const changeUser = ()=>{

	}
	
	useEffect(()=>{
		getUsersInfo();
	},[]);
	
	const minHeight = window.innerHeight - 150;
	return (
		<React.Fragment>
			<div className="mdk-drawer-layout__content page" style={{paddingTop:'130px', minHeight:minHeight}}>
				<div className="container-fluid page__heading-container">
					<div className="page__heading d-flex align-items-center justify-content-between">
						<button
							type="button"
							className="btn btn-primary"
							
							onClick={handleAddUserBtn}>
							Add User
						</button>
					</div>
				</div>

				<div className="container-fluid page__container">
					<div className="card card-form">
						<div className="row no-gutters">
							<div className="col-lg-12 card-form__body">
								<div
									className="table-responsive border-bottom"
									data-toggle="lists"
									data-lists-values='["js-lists-values-employee-name"]'>
									<div className="search-form search-form--light m-3">
										<input
											type="text"
											className="form-control search"
											placeholder="Search"
										/>
										<button className="btn" type="button">
											<i className="material-icons">search</i>
										</button>
									</div>

									<table className="table mb-0 thead-border-top-0">
										<thead>
											<tr>
												<th>Username</th>
												<th style={{ width: "50px" }}>Mobile</th>
												<th style={{ width: "50px" }}>Type</th>
												<th style={{ width: "50px" }}>Membership</th>
												<th style={{ width: "200px" }}>Action</th>
											</tr>
										</thead>
										<tbody className="list" id="staff02">
											{users.map((item, index)=>(
												<UserItem username={item.username} mobile={item.mobile}
													type={item.type} membership={item.membership} key={index} showEdit={showEdit(index)}/> 
											))}
										</tbody>
									</table>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* <!-- // END header-layout --> */}

			{/* <!-- add user Modal --> */}
			<Modal
            show={isOpen}
            onHide={hideModal}
            centered
            className="modal fade">
            <div className="modal-content">
                    <div className="modal-body">
                        <div className="px-3">
                            <div className="d-flex justify-content-center mt-2 mb-4 navbar-light">
                                <a
                                    href="manage user.html"
                                    className="navbar-brand"
                                    style={{ minWidth: 0 }}>
                                    <span className="ml-2">{isEdit?'Edit User':'Add User'}</span>
                                </a>
                            </div>

                            <Form onSubmit={isEdit?changeUser:addUser}>
                                <div className="form-group">
                                    <label htmlFor="username">User Name:</label>
                                    <input
                                        className="form-control"
                                        type="text"
                                        required=""
                                        placeholder=""
                                        value={username}
                                        onChange={(e)=>{
                                            setUsername(e.target.value);
                                        }}
                                        
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="username">Mobile:</label>
                                    <input
                                        className="form-control"
                                        type="text"
                                        required=""
                                        placeholder=""
                                        value={mobile}
                                        onChange={(e)=>{
                                            setMobile(e.target.value);
                                        }}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="username">Type:</label>
                                    <input
                                        className="form-control"
                                        type="text"
                                        required=""
                                        placeholder=""
                                        value={userType[type]}
                                       
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="username">Membership:</label>
                                    <input
                                        className="form-control"
                                        type="text"
                                        required=""
                                        placeholder=""
                                        value={membership}
                                    />
                                </div>
                                
                                <div className="form-group text-center">
                                    <button className="btn btn-primary" type='submit'>
                                        Change
                                    </button>
                                </div>
                            </Form>
                        </div>
                    </div>
                </div>
        </Modal>
		</React.Fragment>
	);
};

export default ManageUser;
