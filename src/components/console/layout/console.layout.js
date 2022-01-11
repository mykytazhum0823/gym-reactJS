import React, {useEffect, useState} from "react";
import { useLocation } from "react-router-dom";
import { FooterConsole, HeaderConsole } from ".";
import { Outlet } from "react-router-dom";
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
import useScript from 'usescript-hook';
import SidebarInfo from "./sidebar/sidebar.info";
import Sidebar from "./sidebar/sidebar";


const ConsoleLayout = ({children}) => {
  useScript('../assets/vendor/bootstrap.min.js');
  const [userAvatar, setUserAvatar] = useState("");
  const [userName, setUserName] = useState("");
  const [userRole, setUserRole] = useState("");
  const [dropdownMenu, setDropdownMenu] = useState([]);
  const [menu, setMenu] = useState([]);

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
                  <Outlet/>
                  <Sidebar userAvatar={userAvatar} userName = {userName} userRole = {userRole} 
                    dropdownMenu = {dropdownMenu} menu={menu}/>
              </div>     
          </div>
      </div>
    </div>
    </React.Fragment>
  );
};

export default ConsoleLayout;
