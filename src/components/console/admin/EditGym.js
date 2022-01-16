import React, { useState } from 'react';
import { FormControl, FormGroup, FormLabel, Dropdown } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Styles = styled('div')`
	.mdk-drawer-layout__content{
		position: relative;
		height: 100%;
		transition: transform .2s;
		min-width: 320px;
		z-index: 0;
		order: 1;
		flex: 1 1;
		padding-top:130px;
		padding-bottom:30px;
	}
	.justify-content-lg-between{
		justify-content: space-between !important;
	}
	.align-items-center{
		align-items: center !important;
	}
	.text-lg-left{
		text-align:left !important;
	}
	.align-items-center
	{
		display: flex;
		flex-flow: row wrap;
	}
	.page__heading{
		margin-bottom:30px;
		padding-top: 30px;
		padding-bottom: 30px;
		border-bottom: 1px solid #efefef;
		margin-bottom: 15px;
	}
	.page__container{
		padding-left: 30px;
		padding-right: 30px;
	}
	.container-fluid{
		margin-left: auto;
		margin-right: auto;
	}
	.row{
		display: flex;
		flex-wrap: wrap;
		margin-left: -15px;
		margin-right: -15px;
	}

`;

const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
	<a
	  href=""
	  ref={ref}
	  onClick={(e) => {
		e.preventDefault();
		onClick(e);
	  }}
	>
	  {children}
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
				<div className="col-lg-6 col-md-6 card-group-row__col">
					<div className="card card-group-row__card card-body card-body-x-lg flex-row align-items-center">
						<FormGroup>
							<FormLabel> Gym Name</FormLabel>
							<FormControl
								type="text"
								value={name}
								onClick={(e)=>{setName(e.target.value)}}
								placeholder='Gym Name'
								/>
						</FormGroup>
						<FormGroup>
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
					</div>
				</div>
				<div className="col-lg-6 col-md-6 card-group-row__col">
					<div className="card card-group-row__card card-body card-body-x-lg flex-row align-items-center">
					</div>
				</div>
			</div>
		</div>
	</div>
    )
}

export default EditGym;