import React, { useState, useEffect } from "react";
import "../assets/css/app.scoped.css";
import {Modal, Form, Alert} from 'react-bootstrap';
import { getTrainers, changeUser, saveNewUser } from "../../../fiebaseImp/js/user";
import { useLocation } from "react-router-dom";
import TrainerItem from "./item/TrainerItem";

const ManageTrainer = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [trainers, setTrainers] = useState([]);
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
		getTrainers()
		.then((datas)=>{
			let temp_users  =[];
			datas.forEach((data)=>{
				let temp = {...data.data(), docId:data.id};
				temp_users.push(temp);
			});
			setTrainers(temp_users);
			setSearchResult(temp_users);
		})
	}
	const handleAddTrainer = ()=>{
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
		let user = trainers[index];
		setTableIndex(index);
		setUsername(user.username);
		setMobile(user.mobile);
		setType(user.type);
		setMembership(user.membership);
		setUserIndex(user.docId);
		showModal();
	}
	const addTrainer = (e)=>{
		e.preventDefault();
		saveNewUser(username, 1, mobile, '')
		.then((data)=>{
			if(data.error === '')
			{
				let temp = trainers;
				let newItem = {docId:data.success, username:username, type:1,mobile:mobile, membership:''};
				temp.push(newItem);
				setTrainers([...temp]);
				setSearchResult([...temp]);
				hideModal();
			}
			else{
				setSaveError(data.error);
			}
		})
	}
	const editTrainer = (e)=>{
		e.preventDefault();
		changeUser(userIndex, username, 1, mobile, membership)
		.then((data)=>{
			if(data.success === 'success')
			{
				hideModal();
				let temp = trainers;
				temp[tableIndex] = {docId:userIndex, username:username, type:1,mobile:mobile, membership:membership};
				setTrainers([...temp]);
				setSearchResult([...temp]);
				setIsEdit(false);
			}
			else{
				setSaveError(data.error);
			}
		})
	}

	const searchTrainers = ()=>{
		let temp = [];
		trainers.map((item, index)=>{
			if(item.username.includes(search))
			{
				temp.push(item);
			}
		})
		setSearchResult([...temp]);
	}
	
	useEffect(()=>{
		getUsersInfo();
	},[path]);
	
	const minHeight = window.innerHeight - 150;
	return (
		<React.Fragment>
			<div className="mdk-drawer-layout__content page" style={{paddingTop:'130px', minHeight:minHeight}}>
				<div className="container-fluid page__heading-container">
					<div className="page__heading d-flex align-items-center justify-content-between">
						<button
							type="button"
							className="btn btn-primary"
							
							onClick={handleAddTrainer}>
							Create Trainer
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
										<button className="btn" type="button" onClick={searchTrainers}>
											<i className="material-icons">search</i>
										</button>
									</div>

									<table className="table mb-0 thead-border-top-0">
										<thead>
											<tr>
												<th>Username</th>
												<th style={{ width: "50px" }}>Mobile</th>
												{/* <th style={{ width: "50px" }}>Type</th> */}
												<th style={{ width: "200px" }}>Action</th>
											</tr>
										</thead>
										<tbody className="list" id="staff02">
											{searchResult.map((item, index)=>(
												<TrainerItem username={item.username} mobile={item.mobile}
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
                                    <span className="ml-2">{isEdit?'Edit Trainer':'Create User'}</span>
                                </a>
								<h3 onClick={hideModal} className="modal-close">
									x
								</h3>
                            </div>

                            <Form onSubmit={isEdit?editTrainer:addTrainer}>
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
                                {/* <Form.Group className="mb-3">
									<Form.Label>Type</Form.Label>
									<Form.Select 
									onChange={(e)=>{setType(e.target.value)}}
									value={type}>
										<option value="1">Traniner</option>
										<option value="3">Gym Owner</option>
										<option value="4">Admin</option>
										<option value="5">Customer</option>
									</Form.Select>
								</Form.Group> */}

                                {saveError !== '' && <Alert variant='danger'>{saveError}</Alert> }
                                <div className="form-group text-center">
                                    <button className="btn btn-primary" type='submit'>
                                        {isEdit?'Change':'Add' }
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

export default ManageTrainer;
