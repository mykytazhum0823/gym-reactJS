import React, { useState } from 'react';

const UserItem = (props)=>{
    const userType = ['','trainer', '', 'gym owner', 'admin', 'customer'];
    const [isOpen, setIsOpen] = useState(false);
    const [username, setUsername] = useState(props.username);
    const [mobile, setMobile] = useState(props.mobile);
    const [type, setType] = useState(props.type);
    const [membership, setMembership] = useState(props.membership);  
    const hideModal = ()=>{
        setIsOpen(false);
    } 
    const showModal = ()=>{
        setIsOpen(true);
    }
    const changeUser = ()=>{

    }

    return(
    <React.Fragment>
        <tr>
            <td>
                <span className="js-lists-values-employee-name">
                    {username}
                </span>
            </td>
            <td>
                <span>
                    {mobile}
                </span>
            </td>
            <td>
            <span>
                {userType[type]}
            </span>
            </td>
            <td>
                <span className="badge badge-success">
                    {membership}
                </span>
            </td>
            <td>
                <button
                    type="button"
                    className="btn btn-primary"
                    style={{marginRight:'10px'}}
                    onClick={props.showEdit}>
                        Edit
                </button>
                <button
                    type="button"
                    className="btn btn-danger">
                    Deactive
                </button>
            </td>
        </tr>
    </React.Fragment>
    );
}

export default UserItem;