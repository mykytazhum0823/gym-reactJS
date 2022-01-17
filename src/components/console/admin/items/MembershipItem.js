import React from 'react';
import "../../assets/css/app.scoped.css";

const MembershipItem = (props)=>{
    return(
        <React.Fragment>
            <div className="col-md-3">
                <div className="card card__course">
                    <div className="card-header card-header-large card-header-dark bg-dark d-flex justify-content-center">
                        <a
                            className="card-header__title  justify-content-center align-self-center d-flex flex-column"
                            href="student-course.html">
                            <span>
                                <img
                                    src="/assets//images/logos/react.svg"
                                    className="mb-1"
                                    style={{ width: "4px" }}
                                    alt="logo"
                                />
                            </span>
                            <span className="course__title">{props.name}</span>
                            <span className="course__subtitle">{props.description}</span>
                        </a>
                    </div>
                    <div className="p-3">
                        <div className="mb-2">
                            <span className="mr-2">
                                <a href="# " className="rating-link active">
                                    <i className="material-icons icon-16pt">star</i>
                                </a>
                                <a href="# " className="rating-link active">
                                    <i className="material-icons icon-16pt">star</i>
                                </a>
                                <a href="# " className="rating-link active">
                                    <i className="material-icons icon-16pt">star</i>
                                </a>
                                <a href="# " className="rating-link active">
                                    <i className="material-icons icon-16pt">star</i>
                                </a>
                                <a href="# " className="rating-link active">
                                    <i className="material-icons icon-16pt">
                                        star_half
                                    </i>
                                </a>
                            </span>
                            <strong>{props.price}</strong>
                            <br />
                            {/* <small className="text-muted">(391 ratings)</small> */}
                        </div>
                        <div className="d-flex align-items-center justify-content-center">
                            <button type="button" className="btn btn-success mr-2" onClick={()=>{props.showEdit(props.id)}}>
                                Edit
                            </button>
                            <button type="button" className="btn btn-danger">
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