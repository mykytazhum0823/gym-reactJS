import React, { useState, useEffect } from "react";
import "../assets/css/app.scoped.css";
import {Modal, Form, Alert, Button} from 'react-bootstrap';
import { getUsers, changeUser, saveNewUser } from "../../../fiebaseImp/js/user";
import { getMemberships} from "../../../fiebaseImp/js/membership";
import UserItem from "./items/UserItem";
import { useLocation } from "react-router-dom";

const ManageUser = () => {
	const userType = ['','trainer', '', 'gym owner', 'admin', 'customer'];
	const [isOpen, setIsOpen] = useState(false);
	const [users, setUsers] = useState([]);
	const [memberships, setMemberships] = useState([]);
	const [isEdit, setIsEdit] = useState(false);

	const [username, setUsername] = useState('');
	const [mobile, setMobile] = useState('');
	const [type, setType] = useState(0);
	const [membership, setMembership] = useState('');
	const [userIndex, setUserIndex] = useState('');
	const [saveError, setSaveError] = useState('');
	const [tableIndex, setTableIndex] = useState(0);

	const [search, setSearch] = useState('');
	const [searchResult, setSearchResult] = useState([]);

	const {path} = useLocation();

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
			setSearchResult(temp_users);
		})
	}
	const getMembershipsInfo = ()=>{
		let temp_memberships = [];
		getMemberships()
		.then((datas)=>{
			datas.forEach((data)=>{
				temp_memberships.push({name:data.data().name, index:data.id});
			})
			setMemberships(temp_memberships);
		})
		.then(()=>{
			getUsers()
			.then((datas)=>{
				let temp_users  =[];
				datas.forEach((data)=>{
					let temp = {...data.data(), docId:data.id};
					let memName = '';
					if(temp.membership !== ''){
						temp_memberships.forEach((item)=>{
						if(item.index === temp.membership)
						{
							memName = item.name;
						}
					})
					}
					temp = {...temp, membership: memName};
					temp_users.push(temp);
				});
				setUsers(temp_users);
				setSearchResult(temp_users);
			})
		})
	}
	const handleAddUserBtn = ()=>{
		setIsEdit(false);
		emptyValues();
		showModal();
	}
	const emptyValues = ()=>{
		setUsername('');
		setMobile('');
		setType('');
		setMembership('');
		setUserIndex('');
	}

	const showEdit = (index) =>{
		setIsEdit(true);
		setSaveError('');
		let user = users[index];
		setTableIndex(index);
		setUsername(user.username);
		setMobile(user.mobile);
		setType(user.type);
		setMembership(user.membership);
		setUserIndex(user.docId);
		showModal();
	}
	const addUser = (e)=>{
		e.preventDefault();
		saveNewUser(username, type, mobile, membership)
		.then((data)=>{
			if(data.error === '')
			{
				let temp = users;
				let memName = '';
				memberships.forEach((item)=>{
					if(item.index == membership)
					{
						memName = item.name;
					}
				});
				let newItem = {docId:data.success, username:username, type:type,mobile:mobile, membership:memName};
				temp.push(newItem);
				setUsers([...temp]);
				setSearchResult([...temp]);
				hideModal();
			}
			else{
				setSaveError(data.error);
			}
		})
	}
	const editUser = (e)=>{
		e.preventDefault();
		changeUser(userIndex, username, type, mobile, membership)
		.then((data)=>{
			if(data.success === 'success')
			{
				hideModal();
				let temp = users;
				let memName = '';
				memberships.forEach((item)=>{
					if(item.index == membership)
					{
						memName = item.name;
					}
				});
				temp[tableIndex] = {docId:userIndex, username:username, type:type,mobile:mobile, membership:memName};
				setUsers([...temp]);
				setSearchResult([...temp]);
				setIsEdit(false);
			}
			else{
				setSaveError(data.error);
			}
		})
	}

	const searchUsers = ()=>{
		let temp = [];
		users.map((item, index)=>{
			if(item.username.includes(search))
			{
				temp.push(item);
			}
		})
		setSearchResult([...temp]);
	}
	
	useEffect(()=>{
		getMembershipsInfo();
		// getUsersInfo();
	},[path]);

	const isValid = !isEdit &&  (username === '' ||
					mobile === ''||
					type === '' || type === '-1'||
					membership === '' || membership === '-1');
	
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
											value={search}
											onChange={e=>{setSearch(e.target.value)}}
										/>
										<button className="btn" type="button" onClick={searchUsers}>
											<i className="material-icons">search</i>
										</button>
									</div>

									<table className="table mb-0 thead-border-top-0">
										<thead>
											<tr>
												<th>Username</th>
												<th style={{ width: "100px" }}>Mobile</th>
												<th style={{ width: "80px" }}>Type</th>
												<th style={{ width: "80px" }}>Membership</th>
												<th style={{ width: "200px" }}>Action</th>
											</tr>
										</thead>
										<tbody className="list" id="staff02">
											{searchResult.map((item, index)=>(
												<UserItem username={item.username} mobile={item.mobile}
													type={item.type} membership={item.membership} key={index} userId={index} showEdit={showEdit}/> 
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
								<h3 onClick={hideModal} className="modal-close">
									x
								</h3>
                            </div>

                            <Form onSubmit={isEdit?editUser:addUser}>
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
                                <Form.Group className="mb-3">
									<Form.Label>Type</Form.Label>
									<Form.Select 
									onChange={(e)=>{setType(e.target.value)}}
									value={type}>
										<option value="-1"></option>
										<option value="1">Traniner</option>
										<option value="3">Gym Owner</option>
										<option value="4">Admin</option>
										<option value="5">Customer</option>
									</Form.Select>
								</Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label>Membership</Form.Label>
                                    <Form.Select 
									onChange={(e)=>{setMembership(e.target.value)}}
									value={membership}>
										<option key='-1' value='-1'></option>
										{memberships.map((item, index)=>
											<option value={item.index} key={index}>{item.name}</option>
										)}
									</Form.Select>
                                </Form.Group>
                                {saveError !== '' && <Alert variant='danger'>{saveError}</Alert> }
                                <div className="form-group text-center">
                                    <Button className="btn btn-primary" type='submit' disabled={isValid}>
                                        {isEdit?'Change':'Add' }
                                    </Button>
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
