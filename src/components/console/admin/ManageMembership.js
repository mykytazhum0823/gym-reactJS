import React, { useState, useEffect } from "react";
import '../assets/css/app.scoped.css';
import { Modal, Form, FormControl, Button, Alert} from "react-bootstrap";
import { getMemberships, saveMembership, changeMembership, deleteMembership} from "../../../fiebaseImp/js/membership";
import { useLocation } from "react-router-dom";
import MembershipItem from './items/MembershipItem';
import styled from "styled-components";
import './admin.scoped.scss';

const DescriptionStyle = styled('div')`
text-align: center;
padding: 3px 20px;
.delete-icon::after {
    font-family:  var(--bs-font-sans-serif);
    content: "x";
    float: right;
    cursor: pointer;
    }
`;



const DescriptionItem = (props) =>{
	return(
		<DescriptionStyle>
			{props.text}
			<span className="delete-icon" onClick={(e)=>{
				e.preventDefault();
				props.deleteItem(props.id)}}/>
		</DescriptionStyle>
	);
}

const ManageMembership = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [memberships, setMemberships] = useState([]);
	const [saveError, setSaveError] = useState('');
	const {path} = useLocation();
	const [name, setName] = useState('')
	const [price, setPrice] = useState('');
	const [id, setId] = useState('');
	const [tableIndex, setTableIndex] = useState('');
	const [isEdit, setIsEdit] = useState(false);

	const [description,setDescription] = useState([]);
	const [newItem, setNewItem] = useState('');

	const createId = ()=>{
		return (Math.random() * 1000).toFixed(0).toString();
	}
	const deleteDescriptionItem = (id)=>{
		let temp = [];
		description.forEach((item, index)=>{
			if(item.id !== id)
			{
				temp.push(item);
			}
		})
		console.log(temp);
		setDescription([...temp]);
	}
	const addDescriptionItem = (e)=>{
		e.preventDefault();
		let temp = [];
		description.forEach(item=>{
			if(item.text !== newItem)
			{
				temp.push(item);
			}
		});
		temp.push({text: newItem, id: createId()});
		setDescription(temp);
		setNewItem('');
	}
	

	const showModal = ()=>{
		setIsOpen(true);
	}
	const hideModal = ()=>{
		setIsOpen(false);
	}

	const getAllData = ()=>{
		getMemberships()
		.then((datas)=>{
			let temp_memberships = [];
			datas.forEach((data)=>{
				temp_memberships.push({...data.data(), id:data.id});
			})
			setMemberships(temp_memberships);
		})
	}
	useEffect(()=>{
		getAllData();
	},[path])


	const showEdit = (i)=>{
		setSaveError('');
		setIsEdit(true);
		setName(memberships[i].name);
		setDescription(memberships[i].description);
		setPrice(memberships[i].price);
		setId(memberships[i].id);
		setTableIndex(i);
		showModal();
	}

	const removeMembership = (i)=>{
		deleteMembership(memberships[i].id);
		getAllData();
	}
	const showAddModal = ()=>{
		setIsEdit(false);
		setName('');
		setDescription([]);
		setPrice('');
		setSaveError('');
		showModal();
	}
	const createNew = (e)=>{
		e.preventDefault();
		saveMembership(name, description, price)
		.then((data)=>{
			if(data.success !== ''){
				let temp = memberships;
				temp.push({name:name, description:description, price:price, id:data.success});
				setMemberships([...temp]);
				setSaveError('');
				hideModal();
			}
			else{
				setSaveError(data.error);
			}
		})

	} 
	const editMembership = (e)=>{
		e.preventDefault();
		changeMembership(id, name, description, price)
		.then((data)=>{
			if(data.success !== ''){
				let temp = memberships;
				temp[tableIndex] = {name:name, description:description, price:price, id:data.success};
				setMemberships([...temp]);
				setSaveError('');
				hideModal();
			}
			else{
				setSaveError(data.error);
			}
		})

	}
	const minHeight = window.innerHeight - 150;
	
	return (
		<React.Fragment>
			<div className="mdk-drawer-layout__content page" style={{paddingTop:'130px', minHeight:minHeight}}>
				<div className="container-fluid page__heading-container">
					<div className="page__heading d-flex align-items-center justify-content-between">
						<h1 className="m-0">Membership</h1>
						<a className="btn btn-primary ml-3">
							{" "}
							<button
								type="button"
								className="btn btn-primary"
								onClick={showAddModal}>
								Add
							</button>
						</a>
					</div>
				</div>

				<div className="container-fluid page__container">
					<div className="row">
						{memberships.map((item, index)=>(
							<MembershipItem name={item.name} description={item.description} price={item.price}
							key={index} id={index} showEdit={showEdit} delete={removeMembership}/>
						))}
					</div>
				</div>
			</div>

			{/* <!-- membership Modal --> */}
			<Modal
				id="modal-signup"
				className="modal fade"
				show={isOpen}
				centered
				onHide={hideModal}>
					<div className="modal-content">
						<div className="modal-body">
							<div className="px-3">
								<div className="d-flex justify-content-center mt-2 mb-4 navbar-light">
									<a
										href="manage_membership.html"
										className="navbar-brand"
										style={{ minWidth: 0 }}>
										{/* <!-- LOGO --> */}

										<span className="ml-2">{isEdit?'Change Membership':'Add Membership'}</span>
									</a>
									<h3 onClick={hideModal} className="modal-close">
										x
									</h3>
								</div>

								<Form onSubmit={isEdit? editMembership: createNew}>
									<Form.Group className="mb-3">
										<Form.Label>Name:</Form.Label>
										<FormControl
											type="text"
											placeholder=""
											name="name"
											value={name}
											onChange = {(e)=>{setName(e.target.value)}}
											>
										</FormControl>
									</Form.Group>
									<Form.Group className="mb-3">
										<Form.Label>Description:</Form.Label>
										<div className="mb-2" style={{border: '1px solid #efefef'}}>
											{description.map((item, index)=>(
												<DescriptionItem text={item.text} key={index}
													id={item.id} deleteItem={deleteDescriptionItem}/>
											))}
										</div>
										<div style={{display:'flex', flexDirection:'row'}}>
											<FormControl
												type="text"
												placeholder=""
												name="name"
												value={newItem}
												onChange = {(e)=>{setNewItem(e.target.value)}}
												>
											</FormControl>
											<Button onClick={addDescriptionItem}> Add </Button>
										</div>

									</Form.Group>
									<Form.Group className="mb-3">
										<Form.Label>Price:</Form.Label>
										<FormControl
											type="text"
											placeholder=""
											name="name"
											value={price}
											onChange = {(e)=>{setPrice(e.target.value)}}
											>
										</FormControl>
									</Form.Group>
									{saveError !== '' && <Alert variant='danger'>{saveError}</Alert> }
									<Button type="submit" className='w-100 modal_btn mt-3 mb-3'>
										{isEdit? 'Change' : 'Create'}
									</Button>

								</Form>
							</div>
						</div>
					</div>
			</Modal>
		</React.Fragment>
	);
};

export default ManageMembership;
