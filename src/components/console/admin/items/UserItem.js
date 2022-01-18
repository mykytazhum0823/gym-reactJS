import React, { useState } from 'react';

const UserItem = (props)=>{
    const userType = ['','trainer', '', 'gym owner', 'admin', 'customer'];

    return(
    <React.Fragment>
        <tr>
            <td>
                <span className="js-lists-values-employee-name">
                    {props.username}
                </span>
            </td>
            <td>
                <span>
                    {props.mobile}
                </span>
            </td>
            <td>
            <span>
                {userType[props.type]}
            </span>
            </td>
            <td>
                {props.membership}
            </td>
            <td>
                <button
                    type="button"
                    className="btn btn-primary"
                    style={{marginRight:'10px'}}
                    onClick={()=>{props.showEdit(props.userId)}}>
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