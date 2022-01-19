import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import UserContext from '../../../../context/UserContext';
import '../../assets/css/app.scoped.css';

const Sidebar  = React.forwardRef( (props, ref)=>{
    const {user} = useContext(UserContext);
    return(
    <div
        className="mdk-drawer  js-mdk-drawer"
        id="default-drawer"
        data-align="start"
        data-position="left"
        data-domfactory-upgraded="mdk-drawer"
        data-persistent=""
        data-opened="">
        <div className="mdk-drawer__content stick" id="sidebar" ref={ref} style={{height:props.height}}>
            <div
                className="sidebar sidebar-light sidebar-left bg-white"
                data-perfect-scrollbar>
                <div className="sidebar-block p-0 m-0">
                    <div className="d-flex align-items-center sidebar-p-a border-bottom bg-light">
                        <a
                            href="#"
                            className="flex d-flex align-items-center text-body text-underline-0">
                            {/* <span className="avatar avatar-sm mr-2">
                                <span className="avatar-title rounded-circle bg-soft-secondary text-muted">
                                    {props.userAvatar}
                                </span>
                            </span> */}
                            <span className="flex d-flex flex-column">
                                <strong>{user.username}</strong>
                                <small className="text-muted text-uppercase">
                                    {user.type == 'gym'? 'gym owner': user.type}
                                </small>
                            </span>
                        </a>
                        <div className="dropdown ml-auto">
                            <a
                                href="#"
                                data-toggle="dropdown"
                                data-caret="false"
                                className="text-muted">
                                <i className="material-icons">more_vert</i>
                            </a>
                            <div className="dropdown-menu dropdown-menu-right">
                                {props.dropdownMenu.map((item, index)=>{
                                    return (index < props.dropdownMenu.length -1)?
                                    <React.Fragment key={index}>
                                        <Link
                                            className="dropdown-item"
                                            to={item.to}>
                                            {item.name}
                                        </Link>
                                        <div className="dropdown-divider"></div>
                                    </React.Fragment>
                                    :
                                    <React.Fragment key={index}>
                                        <Link
                                            className="dropdown-item"
                                            to={item.to}>
                                            {item.name}
                                        </Link>
                                    </React.Fragment>
                                })}
            
                            </div>
                        </div>
                    </div>
                </div>
                <div className="sidebar-block p-0">
                    <ul className="sidebar-menu mt-0">
                        {props.menu.map((item, index)=>(
                            <li className="sidebar-menu-item" key={index}>
                                <Link
                                    className="sidebar-menu-button"
                                    to={item.to}>
                                    <span className="sidebar-menu-icon sidebar-menu-icon--left">
                                       {item.icon}
                                    </span>
                                    <span className="sidebar-menu-text">{item.name}</span>
                                </Link>
                            </li>
                        ))}
                        
                    </ul>
                </div>
            </div>
        </div>
    </div>
    );
});

export default Sidebar;