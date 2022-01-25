import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import '../../assets/css/mmenu-custom.css';
import { Modal } from 'react-bootstrap';

const Styles = styled('div')`
    height: 100%;
    width: 150px;
    background:black;
    color:white;
    padding: 30px 16px;
    display:flex;
    z-index:20;
    position:fixed;
    left:-9px;
    top:75px;
    ul{
        flex-direction:column;
        width:100%;
    }
    li{
        text-align:center;
        padding: 10px !important;
    }
    a.active{
        color:white;
    }
    a:hover{
        color: #6c757d;
    }
`;
const SidebarModal = (props)=>{
    const [show, setShow] = useState(false);
    useEffect(()=>{
        setShow(props.show);
    }, [props]);

    const handleClose = ()=>{
        setShow(false);
        props.handleCloseSidebar();
    }
    return(
        <Modal show={show} onHide={handleClose} backdropClassName='sidebar-backdrop' animation={false}>
            <Styles>
                {props.children}
            </Styles>
        </Modal>
    );
}

export default SidebarModal;