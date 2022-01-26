import React from 'react';
import "../../assets/css/app.scoped.css";

const MembershipItem = (props)=>{
    return(
        <React.Fragment>
            <div className="col-md-3">
                <div className="card card__course">
                    <div className='pl-3 pr-3 pt-4 text-center'>
                        <h4 className="course__title">{props.name}</h4>
                    </div>
                    <div className='p-3'>
                        <strong className='mb-2'> Description:</strong>
                        {props.description.map((item, index)=>(
                            <p className="mb-1 ml-3" key={index}> - {item.text}</p>
                        ))}
                    </div>
                    <div className="pl-3 pb-3">
                        <div className="mb-3">
                            <strong>Price: {props.price}</strong>
                            <br />
                        </div>
                        <div className="d-flex align-items-center justify-content-center">
                            <button type="button" className="btn btn-success mr-2" onClick={()=>{props.showEdit(props.id)}}>
                                Edit
                            </button>
                            <button type="button" className="btn btn-danger" onClick={()=>{props.delete(props.id)}}>
                                Remove
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default MembershipItem;