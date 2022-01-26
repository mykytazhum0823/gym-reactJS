import React from 'react';
import { wrapDisplayName } from 'recompose';
import "../../assets/css/app.scoped.css";
import { useNavigate } from 'react-router-dom';
import QRCode from 'react-qr-code';

const GymItem = (props)=>{
    const name = props.name;
    const navigate = useNavigate();

    const handleEdit = ()=>{
        navigate('/console/admin/editgym', 
        {state:{gqrcode:props.qrcode, gname:name, gowner:props.owner, gmembership:props.membership, 
        gtrainers:props.trainers, gclasses:props.classes}});
    }
    return(
        <div className="col-md-4 col-lg-3">
            <div className="card">
                <a  className="card-img-top" style={{textAlign:'center'}}>
                     <QRCode value={props.qrcode} size='90'/>
                </a>

                <div className="p-3 text-center border-bottom">
                    <div className="bold mb-2">
                        <a className="text-body">
                            <span className="course__title">
                                {" "}
                                {name}
                                {" "}
                            </span>
                        </a>
                    </div>
                </div>
                <div className="p-3 text-center">
                    <button type="button" className="btn btn-primary mr-3" onClick={handleEdit}>
                        Edit
                    </button>
                    <button type="button" className="btn btn-danger">
                        Deactive
                    </button>
                </div>
            </div>
        </div>
    );
}

export default GymItem;