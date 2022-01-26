import React, { useState } from 'react';
import styled from "styled-components";

const Styles = styled('tr')`
    td{
        padding-left: 1em;
    }
`;
const TrainerItem = (props)=>{
    const userType = ['','trainer', '', 'gym owner', 'admin', 'customer'];

    return(
    <React.Fragment>
        <Styles>
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
                <button
                    type="button"
                    className="btn btn-primary"
                    style={{marginRight:'10px'}}
                    onClick={()=>{props.showEdit(props.userId)}}>
                        Edit
                </button>
                {/* <button
                    type="button"
                    className="btn btn-danger">
                    Deactive
                </button> */}
            </td>
        </Styles>
    </React.Fragment>
    );
}

export default TrainerItem;