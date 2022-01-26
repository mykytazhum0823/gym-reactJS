import React, { createRef, useEffect, useState, useRef } from 'react';
import { FormControl, FormGroup, FormLabel, Dropdown, Form, Table, Button, Alert } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';
import "../assets/css/app.scoped.css";
import './admin.scoped.scss';
import QRCode from 'react-qr-code';
import { getUsers } from '../../../fiebaseImp/js/user';
import { updateGym } from '../../../fiebaseImp/js/gym';
import { getMemberships } from '../../../fiebaseImp/js/membership';
import { exportComponentAsPNG } from 'react-component-export-image';
import { changeUserType } from '../../../fiebaseImp/js/user';


const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
	<a
	  ref={ref}
	  onClick={(e) => {
		e.preventDefault();
		onClick(e);
	  }}
	  className='form-control custom-toggle'
	>
		<span className='mr-4 custom-text' >
			{children}
		</span>
	 	 &#x25bc;
	</a>
));

const CustomMenu = React.forwardRef(
	({ children, style, className, 'aria-labelledby': labeledBy }, ref) => {
	  const [value, setValue] = useState('');
	
	  const list_style = {
		  overflowY:'scroll',
		  maxHeight:'150px'
	  }
	  return (
		<div
		  ref={ref}
		  style={style}
		  className={className}
		  aria-labelledby={labeledBy}
		>
		  <FormControl
			autoFocus
			className="mx-3 my-2 w-auto"
			placeholder="Type to filter..."
			onChange={(e) => setValue(e.target.value)}
			value={value}
		  />
		  <ul className="list-unstyled" style={list_style}>
			{React.Children.toArray(children).filter(
			  (child) =>
				!value || child.props.children.toLowerCase().includes(value),
			)}
		  </ul>
		</div>
	  );
	},
  );

  const CustomDropDown = React.forwardRef(({ children, onClick }, ref) => (
	<a
	  ref={ref}
	  onClick={(e) => {
		e.preventDefault();
		onClick(e);
	  }}
	  className='form-control custom-toggle'
	>
		{children}
	</a>
));

const CustomDropdownMenu = React.forwardRef(
	({ children, style, className, 'aria-labelledby': labeledBy }, ref) => {
	  const [value, setValue] = useState('');
	  const list_style = {
			overflowY:'scroll',
			maxHeight:'150px'
		}
	  return (
		<div
		  ref={ref}
		  style={style}
		  className={className}
		  aria-labelledby={labeledBy}
		>
		  <ul className="list-unstyled" style={list_style}>
			{React.Children.toArray(children).filter(
			  (child) =>
				!value || child.props.children.toLowerCase().startsWith(value),
			)}
		  </ul>
		</div>
	  );
	},
  );

const CustomQRCode = React.forwardRef((props, ref)=>{
	return(
		<div className='qrcode-panel' ref={ref}>
			<QRCode value={props.qrcode?props.qrcode:'qrcode'} size={120} />
		</div>
	);
});


const EditGym = (props)=>{
	const {state} = useLocation();
	const {gname, gowner, gmembership, gtrainers, gclasses,gqrcode} = state;
	const [name, setName] = useState(gname);
	const [owner, setOwner] = useState(gowner?gowner : '');
	const [membership, setMembership] = useState(gmembership? gmembership : []);
	const [error, setError] = useState('');
	const [success, setSuccess]  = useState('');

	const [trainers, setTrainers] = useState(gtrainers?gtrainers:[]);
	const [classes, setClasses] = useState(gclasses? gclasses:[]);
	const [qrcode, setQrCode] = useState(gqrcode);

	const navigate = useNavigate();
	const [users, setUsers] = useState([]);
	const [ownerName, setOwnerName] = useState('');
	const [memberships, setMemberships] = useState([]);
	const [membershipName, setMembershipName] = useState('');

	const qrRef = useRef();

	const getUsersInfo = ()=>{
		getUsers()
		.then((datas)=>{
			let temp_users  =[];
			datas.forEach((data)=>{
				let temp = {...data.data(), id:data.id};
				if(gowner === data.id)
				{
					setOwnerName(data.data().username);
				}
				temp_users.push(temp);
			});
			setUsers(temp_users);
		})
	}
	const getMembershipsInfo= ()=>{
		getMemberships()
		.then((datas)=>{
			let temp_memberships = [];
			datas.forEach((data)=>{
				temp_memberships.push({...data.data(), id:data.id});
			})
			setMemberships(temp_memberships);
		})
	}
	const handleSave = ()=>{
		updateGym(qrcode, name, owner, membership, trainers, classes)
		.then((data)=>{
			if(data.success === 'success')
			{
				setError('');
				changeUserType(owner, 3);
				setSuccess('Successfuly updated.');
			}	
			else
			{
				setSuccess('');
				setError(data.error);
			}
		})
	}
	const handleSubmit = (e)=>{
		e.preventDefault();
	}

	useEffect(()=>{
		getUsersInfo();
		getMembershipsInfo();
	}, []);

	const minHeight = window.innerHeight - 150;
    return(
    <div className="mdk-drawer-layout__content page" style={{paddingTop:'130px', minHeight:minHeight}}>
		<div className="container-fluid page__heading-container">
			<div className="page__heading d-flex flex-column flex-md-row align-items-center justify-content-center justify-content-lg-between text-center text-lg-left">
				<h1 className="m-lg-0">Edit Gym</h1>
				<a className="btn btn-success ml-lg-3" onClick={()=>navigate(-1)}>
					Go Back{" "}
					<i className="material-icons">arrow_forward</i>
				</a>
			</div>
		</div>

		<div className="container-fluid page__container">
			<div className="row card-group-row">
				<div className="col-lg-8 col-md-8 card-group-row__col">
					<div className="card card-group-row__card card-body card-body-x-lg flex-row align-items-center">
						<Form className='w-100' onSubmit={handleSubmit}>
							<FormGroup className="mb-3">
								<FormLabel> Gym Name</FormLabel>
								<FormControl
									type="text"
									value={name}
									onClick={(e)=>{setName(e.target.value)}}
									placeholder='Gym Name'
									/>
							</FormGroup>
							<FormGroup className="mb-3">
								<FormLabel> Gym Owner</FormLabel>
								<Dropdown>
									<Dropdown.Toggle as={CustomToggle} id="dropdown-custom-components">
										{ownerName}
									</Dropdown.Toggle>

									<Dropdown.Menu as={CustomMenu} onChange={(e)=>{console.log(e.target.value)}}>
										{users.map((item, index)=>(
											<Dropdown.Item eventKey={index} key={index} 
											onClick={()=>{
												setOwner(item.id); 
												setOwnerName(item.username);
											}}>
												{item.username}
											</Dropdown.Item>
										))}
									</Dropdown.Menu>
								</Dropdown>
							</FormGroup>
							<FormGroup>
								<FormLabel>Gym Membership</FormLabel>
								<Dropdown>
									<Dropdown.Toggle as={CustomDropDown}>
										{membershipName}
									</Dropdown.Toggle>

									<Dropdown.Menu as={CustomDropdownMenu}>
										{memberships.map((item, index)=>(
											<Dropdown.Item eventKey={index} key={index} 
											onClick={()=>{setMembership(item.id); setMembershipName(item.name)}}
											>
												{item.name}
											</Dropdown.Item>
										))}
									</Dropdown.Menu>
								</Dropdown>
							</FormGroup>
							{(success !== '') && <Alert variant='success'>{success}</Alert>}
							{(error !== '') && <Alert variant='danger'>{error}</Alert>}
							<div className="form-group text-center" onClick={handleSave}>
								<Button className="mt-3"> Save </Button>
							</div>
						</Form>
					</div>
				</div>
				<div className="col-lg-4 col-md-4 card-group-row__col">
					<div className="card card-group-row__card card-body card-body-x-lg flex-col align-items-center">
						<p className="w-100"> QR Code </p>
						<CustomQRCode qrcode={qrcode} ref={qrRef}/>
						<div className="form-group text-center">
							<Button className="mt-3" onClick={()=>{
								exportComponentAsPNG(qrRef, {fileName:'QR CODE'});
							}}> Download </Button>
						</div>
					</div>
				</div>
			</div>
			{/* <div className="row card-group-row">
				<div className="col-lg-6 col-md-6 card-group-row__col">
					<div className="card card-group-row__card card-body card-body-x-lg flex-row align-items-center">
						<Form className="w-100">
							<FormLabel>Trainers</FormLabel>
							<Table striped bordered hover responsive size="sm">
								<thead>
									<tr>
									<th>#</th>
									<th>Name</th>
									<th>type</th>
									<th>mobile</th>
									<th>membership</th>
									</tr>
								</thead>
								<tbody>
									<tr>
									<td>1</td>
									<td>Mark</td>
									<td>Otto</td>
									<td>@mdo</td>
									</tr>
									<tr>
									<td>2</td>
									<td>Jacob</td>
									<td>Thornton</td>
									<td>@fat</td>
									</tr>
									<tr>
									<td>3</td>
									<td colSpan={2}>Larry the Bird</td>
									<td>@twitter</td>
									</tr>
								</tbody>
							</Table>	
						</Form>
					</div>
				</div>
				<div className="col-lg-6 col-md-6 card-group-row__col">
					<div className="card card-group-row__card card-body card-body-x-lg flex-row align-items-center">
						<Form className='w-100'>
							<FormLabel>Classes</FormLabel>
							<Table striped bordered hover responsive size="sm">
								<thead>
									<tr>
									<th>#</th>
									<th>customers</th>
									<th>duration</th>
									<th>begins</th>
									<th>ends</th>
									<th>capacity</th>
									</tr>
								</thead>
								<tbody>
									<tr>
									<td>1</td>
									<td>Mark</td>
									<td>Otto</td>
									<td>@mdo</td>
									</tr>
									<tr>
									<td>2</td>
									<td>Jacob</td>
									<td>Thornton</td>
									<td>@fat</td>
									</tr>
									<tr>
									<td>3</td>
									<td colSpan={2}>Larry the Bird</td>
									<td>@twitter</td>
									</tr>
								</tbody>
							</Table>
						</Form>
					</div>
				</div>
			</div> */}
		</div>
	</div>
    )
}

export default EditGym;