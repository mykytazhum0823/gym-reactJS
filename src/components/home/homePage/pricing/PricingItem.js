import React from 'react';
import '../../assets/css/style.scoped.css';

const PricingItem = (props)=>{
    return(
        <div className="col-lg-4 col-md-6 m-b30">
        <div className="pricing-table-2">
            <div className="p-table-title">
                <h4 className="wt-title">{props.name}</h4>
            </div>
            <div className="p-table-list">
                <ul>
                {
                    props.description.map((item, index)=>(
                        <li key={index}>{item.text}</li>
                    ))
                }
                </ul>
            </div>
            <div className="p-table-price">
                <span>${props.price}</span>
                <p>Per/month</p>
            </div>
            <div className="p-table-btn">
                <a
                    className="site-button-secondry site-btn-effect">
                    Purchase Now
                </a>
            </div>
        </div>
    </div>
    );
}

export default PricingItem;