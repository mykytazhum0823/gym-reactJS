import React from 'react';
import { useNavigate } from 'react-router-dom';

const ClassItem = (props)=>{
    const navigate = useNavigate();
    const handleEdit = ()=>{
        navigate('/console/gym/editclass', 
        {state:{cdocId:props.id, cname:props.name,  cduration:props.duration, cbegins:props.begins,
        cends: props.ends, ccapacity:props.capacity, ctrainers:props.trainers, ccustomers:props.customers}});
        
    }
    const formatDate = (date)=>{
        var d = new Date(date),
            month = '' + (d.getMonth() + 1),
            day = '' + d.getDate(),
            year = d.getFullYear(),
            hours = '' + d.getHours(),
            mins = ''+ d.getMinutes();
    
        if (month.length < 2) 
            month = '0' + month;
        if (day.length < 2) 
            day = '0' + day;
        if(hours.length < 2)
            hours = '0' + hours;
        if(mins.length < 2)
            mins = '0' + mins;
    
        return [year, month, day].join('-') + ' ' + [hours, mins].join(':');
    }
     
    const begins =formatDate(props.begins.seconds *1000);
    const ends = formatDate(props.ends.seconds *1000);

    return(
        <div className="col-md-6 col-lg-4">
        <div className="card card__course card__course__animate">
            {/* <a href="# " className="card-img-top">
                <img
                    src="/assets//images/course_lms.jpg"
                    style={{ width: "100%" }}
                    alt="Card cap"
                />
            </a> */}

            <div className="p-3 text-center border-bottom">
                <div className="bold mb-2">
                    <a style={{textDecoration:'none'}} className="text-body">
                        <span style={{fontSize:'20px', fontWeight:'bold'}} className="course__title"> {props.name} </span>
                    </a>
                </div>
                <div className="d-flex justify-content-around">
                    <div className="mb-2 text-muted d-flex align-items-center align-self-center">
                        <small className="mr-3 d-flex align-items-center">
                            <svg
                                version="1.1"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                viewBox="0 0 40 40"
                                width="18"
                                height="18">
                                <g transform="matrix(1.6666666666666667,0,0,1.6666666666666667,0,0)">
                                    <path
                                        d="M12.619,8.412c-0.001-0.41-0.333-0.742-0.743-0.742H5.938c-0.41,0.015-0.73,0.36-0.715,0.77 c0.014,0.389,0.326,0.701,0.715,0.715h5.938C12.286,9.155,12.619,8.822,12.619,8.412L12.619,8.412z M9.586,19 c-0.02-0.115-0.119-0.199-0.236-0.2H3.464c-0.276,0-0.5-0.224-0.5-0.5V5.443c0.003-0.274,0.226-0.495,0.5-0.495h10.887 c0.272,0.003,0.491,0.223,0.494,0.495v4.039c-0.002,0.135,0.106,0.245,0.241,0.247c0.018,0,0.037-0.002,0.054-0.005 c0.807-0.152,1.623-0.249,2.443-0.29c0.131-0.007,0.232-0.116,0.231-0.247V3.464c0.001-0.82-0.663-1.484-1.483-1.485 c0,0-0.001,0-0.001,0h-3.957c-0.085,0-0.163-0.046-0.205-0.119C11.103,0.059,8.78-0.537,6.979,0.528 C6.43,0.853,5.972,1.311,5.647,1.86c-0.042,0.073-0.12,0.118-0.205,0.119H1.485C0.665,1.979,0,2.644,0,3.464c0,0,0,0,0,0v16.825 c0.001,0.82,0.665,1.484,1.485,1.484h8.847c0.135,0,0.244-0.109,0.244-0.244c0-0.046-0.013-0.092-0.038-0.131 C10.091,20.657,9.769,19.846,9.586,19z M11.035,12.523c0.286-0.376,0.604-0.726,0.951-1.046c0.085-0.079,0.028-0.343-0.11-0.343 H5.938c-0.41,0.015-0.73,0.36-0.715,0.77c0.014,0.389,0.326,0.701,0.715,0.715h4.907C10.92,12.619,10.99,12.583,11.035,12.523z M5.938,14.6c-0.41,0-0.742,0.331-0.743,0.741c0,0.41,0.331,0.742,0.741,0.743c0,0,0.001,0,0.001,0h3.37 c0.117,0,0.216-0.085,0.235-0.2c0.061-0.337,0.145-0.669,0.251-0.995c0.032-0.1,0.055-0.29-0.129-0.29L5.938,14.6z M17.32,10.639 c-3.69-0.001-6.681,2.99-6.682,6.68s2.99,6.681,6.68,6.682c3.69,0.001,6.681-2.99,6.682-6.68c0,0,0-0.001,0-0.001 C23.996,13.632,21.008,10.643,17.32,10.639z M17.32,22.021c-2.596,0-4.7-2.104-4.7-4.7s2.104-4.7,4.7-4.7s4.7,2.104,4.7,4.7 C22.017,19.915,19.914,22.018,17.32,22.021z M19.3,16.33h-0.742c-0.137,0-0.248-0.111-0.248-0.248v-1.237 c-0.017-0.546-0.474-0.975-1.021-0.958c-0.522,0.017-0.941,0.436-0.958,0.958v2.475c0,0.546,0.443,0.989,0.989,0.989 c0,0,0.001,0,0.001,0H19.3c0.546,0.017,1.004-0.412,1.021-0.958s-0.412-1.004-0.958-1.021C19.342,16.329,19.321,16.329,19.3,16.33z"
                                        stroke="none"
                                        fill="currentColor"
                                        strokeWidth="0"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"></path>
                                </g>
                            </svg>
                            <div>
                            <p className="ml-2" style={{marginLeft:'6px',marginBottom:'4px'}}>{begins}</p>
                            <p className="ml-2" style={{marginLeft:'6px', marginBottom:'4px'}}>{ends}</p>
                            </div>
                        </small>
                    </div>
                </div>
            </div>
            <div className="p-3 text-center">
                <button type="button" className="btn btn-primary mr-2" style={{marginRight:'5px'}} onClick={handleEdit}>
                    Edit
                </button>
                <button type="button" className="btn btn-danger ml-2">
                    Deactive
                </button>
            </div>
        </div>
    </div>
    );
}

export default ClassItem;