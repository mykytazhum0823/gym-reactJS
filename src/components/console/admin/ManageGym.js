import React, {useEffect, useState} from "react";
import '../assets/css/app.scoped.css';
import './admin.scoped.scss';
import { FormControl, FormGroup, FormLabel, Modal, Form, Button, Alert} from "react-bootstrap";
import { signInWithPhoneNumber } from "firebase/auth";
import QRCode from 'react-qr-code';
import LocationMap from "./items/LocationMap";
import { saveGym, createGymId, deleteGymById, getGyms } from "../../../fiebaseImp/js/gym";
import EditGym from "./EditGym";
import GymItem from "./items/GymItem";

const ManageGym = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [name, setName] = useState('');
	const [qrCode, setQrCode] = useState('');
	const [error, setError] = useState('');
	const [success, setSuccess] = useState('');
	const [gyms, setGyms] = useState([]);
	
	const [lng, setLng] = useState(52);
	const [lat, setLat] = useState(-1.5);

	const showModal = ()=>{
		setIsOpen(true);
	}
	const hideModal = ()=>{
		setIsOpen(false);
		initModal();
	}
	const genreateQRCode = () =>{
		createGymId()
			.then((data)=>{
				setQrCode(data.id);
			})
	}
	const changeName = (e) =>{
		setName(e.target.value);
	}
	const initModal = ()=>{
		if(success === '' && qrCode !== '')
			deleteGymById(qrCode);
		setName('');
		setQrCode('');
		setSuccess('');
		setError('');
	}
	const handleSubmit = (e)=>{
		e.preventDefault();
		saveGym(qrCode, name, lng, lat)
			.then((data)=>{
				if(data.success !=='')
				{
					setSuccess('create a new gym successfully.');
					addNewGym();
				}
				else{
					setError('there is an error, try again.');
				}
			})
	}

	const addNewGym = ()=>{
		let temp = {name:name, lng:lng, lat:lat, qrCode:qrCode};
		gyms.push(temp);
		setGyms(gyms);
	}
	const getAllGyms = ()=>{
		getGyms()
		.then((datas)=>{
			datas.forEach((data)=>{
				let temp = {...data.data(), qrCode:data.id};
				gyms.push(temp);
				setGyms(gyms);
			})
		})
	}

	useEffect(()=>{
		getAllGyms();
	}, []);

	const isValid = name === '' || qrCode === '';
	
	return (
		<React.Fragment>
			<div className="mdk-drawer-layout__content page" style={{paddingTop:'130px'}}>
				<div className="container-fluid page__heading-container">
					<div className="page__heading d-flex align-items-center justify-content-between mb-0">
						<h1 className="m-0">Gym's list</h1>
					</div>
				</div>

				<div className="container-fluid page__container">
					<div className="card">
						<div
							className="bg-soft-light-gray card-header card-header-tabs-basic nav"
							role="tablist">
							<button
								type="button"
								className="btn btn-primary"
								onClick={showModal}>
								Add New GYM's
							</button>
						</div>
					</div>

					<div className="d-flex row pb-4">
						{gyms.map((item, index)=>(
							<GymItem name={item.name} owner={item.owner} membership={item.membership}
								trainers={item.trainers} classes={item.classes} qrcode={item.qrcode}/>
						))}
					</div>
				</div>
			</div>
			
			<Modal
				show={isOpen}
				onHide={hideModal}
				id="modal-signup"
				centered
				className="modal fade">
					<Modal.Body>
						<div className="d-flex justify-content-center mt-2 mb-4 navbar-light">
							<a
								className="navbar-brand"
								style={{ minWwidth: 0 }}>
								<span className="ml-2">Gym's Add</span>
							</a>
						</div>
						<Form onSubmit={handleSubmit}>
							<FormGroup className="mb-3">
								<FormLabel>Name</FormLabel>
								<FormControl
									type="text"
									placeholder="Enter Name"
									name="name"
									value={name}
									onChange = {changeName}
									>
								</FormControl>
							</FormGroup>
							<FormGroup className="mb-3">
								<FormLabel>Location</FormLabel>
								<LocationMap lng={lng} lat={lat} setLng={setLng} 
								setLat={setLat} />
							</FormGroup>
							<FormGroup className="mb-3">
								<div>
									<Button className="primary" onClick={genreateQRCode}> QR Code Generate</Button>
								</div>
								<div class="qrcode mt-2">
									{(qrCode !== '') && <QRCode value={qrCode} size='90' class="ml-3"/>}
								</div>
							</FormGroup>
							{(error !== '') && <Alert variant='danger'>{error}</Alert>}
							{(success !== '') && <Alert variant='success'>{success}</Alert>}
                        	<Button type="submit" disabled={isValid} className='w-100 modal_btn mt-3'>REGISTER</Button>
							<Button  className='w-100 modal_btn mt-3 mb-2 btn-danger' onClick={hideModal}>CANCEL</Button>
                    
						</Form>
					</Modal.Body>
			</Modal>
		</React.Fragment>
	);
};

export default ManageGym;
