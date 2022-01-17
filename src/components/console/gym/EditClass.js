import React, { useState } from 'react';
import { FormControl, FormGroup, FormLabel, Dropdown, Form, Table, Button } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';
import "../assets/css/app.scoped.css";

const EditClass = (props)=>{
	const {cname, cbegins, cends, cduration, ccustomers,ctrainers} = useLocation();

	const [name, setName] = useState(cname);
	const [start, setStart] = useState(cbegins);
	const [end, setEnd] = useState(cends);
	const [duration, setDuration] = useState(cduration);
	const [customers, setCustomers] = useState(ccustomers);
	const [trainers, setTrainers] = useState(ctrainers);

	const navigate = useNavigate();

    return(
    <div className="mdk-drawer-layout__content page" style={{paddingTop:'130px'}}>
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
						<Form className='w-60'>
							<FormGroup className="mb-3">
								<FormLabel> Class Name:</FormLabel>
								<FormControl
									type="text"
									value={name}
									onClick={(e)=>{setName(e.target.value)}}
									placeholder='Gym Name'
									/>
							</FormGroup>
							<FormGroup className="mb-3">
								<FormLabel> Start Time:</FormLabel>
								<FormControl
									type="text"
									value={start}
									onClick={(e)=>{setStart(e.target.value)}}
									placeholder='Gym Name'
									/>
							</FormGroup>
							<FormGroup>
								<FormLabel>End Time:</FormLabel>
								<FormControl
									type="text"
									value={end}
									onClick={(e)=>{setEnd(e.target.value)}}
									placeholder='Gym Name'
									/>
							</FormGroup>
                            <FormGroup>
								<FormLabel>Duration:</FormLabel>
								<FormControl
									type="text"
									value={duration}
									onClick={(e)=>{setDuration(e.target.value)}}
									placeholder='Gym Name'
									/>
							</FormGroup>
						</Form>
					</div>
				</div>
			</div>
			<div className="row card-group-row">
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
			</div>
		</div>
	</div>
    )
}

export default EditClass;