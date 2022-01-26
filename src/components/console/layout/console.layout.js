import React, {createRef, useEffect, useLayoutEffect, useState} from "react";
import { useLocation } from "react-router-dom";
import { FooterConsole, HeaderConsole } from ".";
import { Outlet } from "react-router-dom";
import useScript from 'usescript-hook';
import SidebarInfo from "./sidebar/sidebar.info";
import Sidebar from "./sidebar/sidebar";
import { useMediaQuery } from "react-responsive";
import styled from "styled-components";
import '../assets/css/app.scoped.css';
import '../assets/css/vendor-material-icons.css';
import '../assets/css/vendor-material-icons.rtl.css';
import '../assets/css/vendor-fontawesome-free.css';
import '../assets/css/vendor-fontawesome-free.rtl.css';
import '../assets/css/vendor-ion-rangeslider.css';
import '../assets/css/vendor-ion-rangeslider.rtl.css';
import '../assets/css/vendor-flatpickr.css';
import '../assets/css/vendor-flatpickr.rtl.css';
import '../assets/css/vendor-flatpickr-airbnb.css';
import '../assets/css/vendor-flatpickr-airbnb.rtl.css';

 const Styles = styled('div')`
    cursor: pointer;
    width: 35px;
    height: 35px;
    background: #353535;
    color: #fff;
    text-align: center;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 15px;
    position: fixed;
    left: 16px;
    top: 90px;
    z-index: 9999;
`;

const SidebarToggle = (props)=>{
  //props.show : 'visible', 'hidden'
 
  return(
    <Styles style={{visibility:props.show}} onClick={()=>{props.handleClick()}}>
      <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z">
        </path>
      </svg>
    </Styles>
  );
}

const ConsoleLayout = ({children}) => {
  useScript("../../assets/js/console-main.js");
  useScript('../../assets/vendor/bootstrap.min.js');

  const [userAvatar, setUserAvatar] = useState("");
  const [userName, setUserName] = useState("");
  const [userRole, setUserRole] = useState("");
  const [dropdownMenu, setDropdownMenu] = useState([]);
  const [menu, setMenu] = useState([]);
  const [sidebarHeight, setSidebarHeight] = useState(0);
  const sidebarRef = createRef();
  const footerRef = createRef();
  const isTabletOrMobile = useMediaQuery({ query: "(max-width:600px)" });
  const [toggle,setToggle] = useState(false);

  let location = useLocation();
  let {pathname} = {...location};

  const setSideBarContent = (userRole)=>{
    let menu = SidebarInfo[userRole];
    setUserAvatar(menu.userAvatar);
    setUserName(menu.userName);
    setUserRole(menu.userRole);
    setDropdownMenu(menu.dropdownMenu);
    setMenu(menu.menu);
  }
  useLayoutEffect(()=>{
    if(isTabletOrMobile){
      return;
    }
    let doc = document.documentElement;
    let height = Math.max(doc.scrollHeight, doc.offsetHeight, doc.clientHeight);
    let footerHeight = footerRef.current.getBoundingClientRect().height;
    let windowHeight = window.innerHeight;
    var sidebarHeight = height - footerHeight - 130;
    if((windowHeight - sidebarHeight) > 280)
    {
      sidebarHeight = windowHeight - 280;
    }
    setSidebarHeight(sidebarHeight);

    sidebarRef.current.classList.add('stick');
  });
  useEffect(()=>{
    if(pathname === '/console' || pathname.startsWith('/console/admin'))
    {
      setSideBarContent('admin');
    }
    else if(pathname.startsWith('/console/trainer'))
    {
      setSideBarContent('trainer');
    }
    else if(pathname.startsWith('/console/gym'))
    {
      setSideBarContent('gym');
    }
    else if(pathname.startsWith('/console/customer'))
    {
      setSideBarContent('customer');
    }
  }, [pathname]);
  
  const handleToggle = ()=>{
    console.log('test');
    if(toggle){
      sidebarRef.current.style.transform = 'translate(-250, 0, 0)'; 
    }
    else{
      sidebarRef.current.style.transform = 'translate(0,0,0)';
    }
    setToggle(!toggle);
  }
  
  
  return (
    <React.Fragment>
    <div className="console-wrapper">
      <HeaderConsole />
      <div className='layout-default'>
          <div className="mdk-header-layout js-mdk-header-layout">
              <div
                  className="mdk-drawer-layout js-mdk-drawer-layout"
                  data-push
                  data-responsive-width="992px">
                  <SidebarToggle show={isTabletOrMobile?'show':'hidden'} handleClick={handleToggle}/>
                  <Outlet />
                  <Sidebar userAvatar={userAvatar} userName = {userName} userRole = {userRole} 
                    dropdownMenu = {dropdownMenu} menu={menu} ref={sidebarRef} height={sidebarHeight}
                    show={toggle}/>
              </div>     
          </div>
      </div>
    </div>
    <FooterConsole ref={footerRef} />
    </React.Fragment>
  );
};

export default ConsoleLayout;
