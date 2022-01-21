import React, { useEffect, useState } from "react";
import '../../assets/css/style.scoped.css';
import { getMemberships } from "../../../../fiebaseImp/js/membership";
import { useLocation } from "react-router-dom";
import PricingItem from "./PricingItem";

const Pricing = () => {
	const [memberships, setMemberships] = useState([]);
	const {path} = useLocation();

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

	return (
		<div className="section-full p-t120 p-b90 site-bg-gray-light">
			<div className="container">
				{/* // TITLE START */}
				<div className="section-head center wt-small-separator-outer">
					<div className="wt-small-separator site-text-secondry">
						<div className="sep-leaf-left"></div>
						<div>Pricing</div>
					</div>
					<h2>Our Pricing Plan</h2>
				</div>
				{/* //TITLE END */}

				<div className="section-content">
					<div className="pricing-block-outer2">
						<div className="row justify-content-center">
							{
								memberships.map((item, index)=>(
									<PricingItem name={item.name} description={item.description}
										key={index} price={item.price}/>
								))
							}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Pricing;
