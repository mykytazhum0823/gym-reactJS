import React, { useState } from 'react';
import { FormControl, FormGroup, FormLabel, Dropdown, Form, Table } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';
import "../assets/css/app.scoped.css";
import './admin.scoped.scss';
import QRCode from 'react-qr-code';

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
		  <ul className="list-unstyled">
			{React.Children.toArray(children).filter(
			  (child) =>
				!value || child.props.children.toLowerCase().startsWith(value),
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
  
	  return (
		<div
		  ref={ref}
		  style={style}
		  className={className}
		  aria-labelledby={labeledBy}
		>
		  <ul className="list-unstyled">
			{React.Children.toArray(children).filter(
			  (child) =>
				!value || child.props.children.toLowerCase().startsWith(value),
			)}
		  </ul>
		</div>
	  );
	},
  );


const EditGym = (props)=>{
	const {gname, gowner, gmembership, gtrainers, gclasses,gqrcode} = useLocation();
	const [name, setName] = useState(gname);
	const [owner, setOwner] = useState(gowner);
	const [membership, setMembership] = useState(gmembership);
	const [trainers, setTrainers] = useState(gtrainers);
	const [classes, setClasses] = useState(gclasses);
	const [qrcode, setQrCode] = useState(gqrcode);

	const navigate = useNavigate();

    return(
    <div className="mdk-drawer-layout__content page" style={{paddingTop:'130px'}}>
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
						<Form className='w-100'>
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
									Custom toggle
									</Dropdown.Toggle>

									<Dropdown.Menu as={CustomMenu}>
									<Dropdown.Item eventKey="1">Red</Dropdown.Item>
									<Dropdown.Item eventKey="2">Blue</Dropdown.Item>
									<Dropdown.Item eventKey="3" active>
										Orange
									</Dropdown.Item>
									<Dropdown.Item eventKey="1">Red-Orange</Dropdown.Item>
									</Dropdown.Menu>
								</Dropdown>
							</FormGroup>
							<FormGroup>
								<FormLabel>Gym Membership</FormLabel>
								<Dropdown>
									<Dropdown.Toggle as={CustomDropDown}>
										Custom toggle
									</Dropdown.Toggle>

									<Dropdown.Menu as={CustomDropdownMenu}>
									<Dropdown.Item eventKey="1">Red</Dropdown.Item>
									<Dropdown.Item eventKey="2">Blue</Dropdown.Item>
									<Dropdown.Item eventKey="3" active>
										Orange
									</Dropdown.Item>
									<Dropdown.Item eventKey="1">Red-Orange</Dropdown.Item>
									</Dropdown.Menu>
								</Dropdown>
							</FormGroup>
						</Form>
					</div>
				</div>
				<div className="col-lg-4 col-md-4 card-group-row__col">
					<div className="card card-group-row__card card-body card-body-x-lg flex-col align-items-center">
						<p className="w-100"> QR Code </p>
						<div className='qrcode-panel'>
							<QRCode value="test" size={90} className="ml-3"/>
						</div>
					</div>
				</div>
			</div>
			<div className="row card-group-row">
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
			</div>
		</div>
	</div>
    )
}

export default EditGym;