import React, { useState } from 'react';
import { FormControl, FormGroup, FormLabel, Dropdown, Form, Table, Button, Alert} from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';
import DatePicker from "react-datepicker";
import DateTimePicker from "react-datetime-picker";
import moment from 'moment';
import "../assets/css/app.scoped.css";
import "react-datepicker/dist/react-datepicker.css";
import { updateClass } from '../../../fiebaseImp/js/class';
import styled from "styled-components";

const Styles = styled('div')`
	.react-datetime-picker__wrapper{
		border: 0px !important;
	}
`;


const EditClass = (props)=>{
	const {state} = useLocation();
	const {cdocId, cname, cbegins, cends, cduration, ccustomers,ctrainers, ccapacity} = state;

	const [name, setName] = useState(cname);
	const [start, setStart] = useState( cbegins !== ''? new Date(cbegins.seconds * 1000): '');
	const [end, setEnd] = useState(cends !== ''? new Date(cends.seconds * 1000): '');
	const [duration, setDuration] = useState(cduration);
	const [customers, setCustomers] = useState(ccustomers);
	const [trainers, setTrainers] = useState(ctrainers);
	const [capacity, setCapacity] = useState(ccapacity);

	const [error, setError] = useState('');

	const navigate = useNavigate();
	const minHeight = window.innerHeight - 150;

	const handleStart = (value)=>{
		setStart(value);
	}
	const handleEnd = (value)=>{
		setEnd(value);
	}

	const handleSubmit = (e)=>{
		e.preventDefault();
		updateClass(cdocId, name, duration, start, end, capacity)
		.then((data)=>{
			if(data.success === 'success')
			{
				navigate(-1);
				setError('');
			}
			else{
				setError(data.error);
			}
		})
	}

    return(
    <div className="mdk-drawer-layout__content page" style={{paddingTop:'130px', minHeight:minHeight}}>
		<div className="container-fluid page__heading-container">
			<div className="page__heading d-flex flex-column flex-md-row align-items-center justify-content-center justify-content-lg-between text-center text-lg-left">
				<h1 className="m-lg-0">Edit Class</h1>
				<a className="btn btn-success ml-lg-3" onClick={()=>navigate(-1)}>
					Go Back{" "}
					<i className="material-icons">arrow_forward</i>
				</a>
			</div>
		</div>

		<div className="container-fluid page__container">
			<div className="row card-group-row">
				<div className="col-lg-12 col-md-12 card-group-row__col">
					<div className="card card-group-row__card card-body card-body-x-lg flex-row align-items-center">
						<Styles>
						<Form onSubmit={handleSubmit}>
							<FormGroup className="mb-3">
								<FormLabel> Class Name:</FormLabel>
								<FormControl
									type="text"
									value={name}
									onChange={(e)=>{setName(e.target.value)}}
									placeholder='Enter Name'
									/>
							</FormGroup>
							<FormGroup className="mb-3">
								<FormLabel> Start Time:</FormLabel>
								<DateTimePicker 
								value={start}
								defaultValue=''
								onChange={handleStart}
								
								placeholderText="select start time"
								className="form-control"></DateTimePicker>
							</FormGroup>
							<FormGroup>
								<FormLabel>End Time:</FormLabel>
								<DateTimePicker 
								value={end}
								defaultValue=''
								onChange={handleEnd}
								placeholderText="select end time"
								className="form-control"></DateTimePicker>
							</FormGroup>
                            <FormGroup>
								<FormLabel>Duration:</FormLabel>
								<FormControl
									type="text"
									value={duration}
									onChange={(e)=>{setDuration(e.target.value)}}
									placeholder='Enter Duration'
									/>
							</FormGroup>
							<FormGroup>
								<FormLabel>Capacity:</FormLabel>
								<FormControl
									type="text"
									value={capacity}
									onChange={(e)=>{setCapacity(e.target.value)}}
									placeholder='Enter Capacity'
									/>
							</FormGroup>
							{(error !== '') && <Alert variant='danger'>{error}</Alert>}
							<div className="form-group text-center">
								<Button className="mt-3" type='submit'> Save </Button>
							</div>
						</Form>
						</Styles>
					</div>
				</div>
			</div>
			{/* <div className="row card-group-row">
				<div className="col-lg-6 col-md-6 card-group-row__col">
					<div className="card card-group-row__card card-body card-body-x-lg flex-row align-items-center">
						<Form className="w-100">
							<FormLabel>Customers</FormLabel>
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
                            <Dropdown>
                                <Dropdown.Toggle variant="success" id="dropdown-basic">
                                    Add trainer
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
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

export default EditClass;