import React, { useEffect, useState } from "react";
import '../assets/css/app.scoped.css';
import { Form, FormControl, FormLabel, Modal, Table, Alert } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import { getClasses, saveClass } from "../../../fiebaseImp/js/class";
import ClassItem from './item/ClassItem';

const ManageClass = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [classes,setClasses] = useState([]);
	const path = useLocation();
	const [error, setError] = useState('');
 
	const [name, setName] = useState('');
	const [duration, setDuration] = useState('');
	const [begins, setBegins] = useState('');
	const [ends, setEnds] = useState('');
	const [capacity, setCapacity] = useState('');

	const showModal = ()=>{
		setIsOpen(true);
	}
	const hideModal = ()=>{
		setIsOpen(false);
	}

	const createClass = (e)=>{
		e.preventDefault();
		saveClass(name, duration, begins, ends, capacity)
		.then((data)=>{
			if(data.success !== '')
			{
				let temp = {id:name, duration:duration, begins:begins, ends:ends, 
				capacity:capacity, docId:data.success};
				let temp_classes = classes;
				temp_classes.push(classes);
				setClasses([...temp_classes]);
				hideModal();
			}
			else{
				setError(data.error);
			}
		})

	}
	const getAllClasses = ()=>{
		getClasses()
		.then((datas)=>{
			let temp_classes = [];
			datas.forEach((data)=>{
				temp_classes.push({...data.data(), docId:data.id});
			})
			setClasses(temp_classes);
		})
	}

	useEffect(()=>{
		getAllClasses();
	}, [path]);

	return (
	<React.Fragment>
		<div className="mdk-drawer-layout__content page" style={{paddingTop:'130px'}}>
			<div className="container-fluid page__heading-container">
				<div className="page__heading d-flex align-items-center justify-content-between mb-0">
					<h1 className="m-0">class list</h1>
				</div>
			</div>

			<div className="container-fluid page__container">
				<div className="card clear-shadow">
					<div
						className="bg-soft-light-gray card-header card-header-tabs-basic nav"
						role="tablist">
						<button
							type="button"
							className="btn btn-primary"
							onClick={showModal}>
							Add New class
						</button>
					</div>
				</div>

				<div className="d-flex justify-content-around pb-4">
					<div className="row">
						{classes.map((item, index)=>(
							<ClassItem id={item.docId} name={item.id} duration={item.duration }
							begins={item.begins} ends={item.ends} capacity={item.capacity}
							gym={item.gym} trainers={item.trainers} customers={item.customers} key={index} /> 
						))}
					</div>
				</div>
			</div>
		</div>
		<Modal id="modal-signup" className="modal fade"
		centered
		show={isOpen}
		onHide={hideModal}>
			<div className="modal-content">
				<div className="modal-body">
					<div className="px-3">
						<div className="d-flex justify-content-center mt-2 mb-4 navbar-light">
							<a href="manage_gym.html" className="navbar-brand" style={{minWidth: '0'}}>
								<span className="ml-2">Add Class </span>
							</a>
						</div>

						<Form onSubmit={createClass}>
							<Form.Group className="mb-3">
								<FormLabel htmlFor="username"> Class Name:</FormLabel>
								<FormControl
									type="text"
									placeholder="Enter Name"
									name="name"
									value={name}
									onChange = {(e)=>{setName(e.target.value)}}
								/>
							</Form.Group>
							<Form.Group className="mb-3">
								<FormLabel htmlFor="username"> Duration:</FormLabel>
								<FormControl
									type="text"
									placeholder="Enter Name"
									name="duration"
									value={duration}
									onChange = {(e)=>{setDuration(e.target.value)}}
								/>
							</Form.Group>
							<Form.Group className="mb-3">
								<FormLabel htmlFor="username"> Start Time:</FormLabel>
								<FormControl
									type="text"
									placeholder="Enter Name"
									name="start"
									value={begins}
									onChange = {(e)=>{setBegins(e.target.value)}}
								/>
							</Form.Group>
							<Form.Group className="mb-3">
								<FormLabel htmlFor="username"> End Time:</FormLabel>
								<FormControl
									type="text"
									placeholder="Enter Name"
									name="end"
									value={ends}
									onChange = {(e)=>{setEnds(e.target.value)}}
								/>
							</Form.Group>
							<Form.Group className="mb-3">
								<FormLabel htmlFor="username"> Capacity:</FormLabel>
								<FormControl
									type="text"
									placeholder="Enter Name"
									name="capacity"
									value={capacity}
									onChange = {(e)=>{setCapacity(e.target.value)}}
								/>
							</Form.Group>
							{(error !== '') && <Alert variant='danger'>{error}</Alert>}
							<div className="form-group text-center">
								<button className="btn btn-primary" type="submit">Create </button>
							</div>
						</Form>
					</div>
				</div>
			</div>  
		</Modal>
	</React.Fragment>
	);
};

export default ManageClass;
