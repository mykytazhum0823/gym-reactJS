import React from "react";
import { Outlet } from "react-router-dom";
import { FooterConsole, HeaderConsole } from ".";
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


const ConsoleLayout = ({child}) => {
  useScript('../assets/vendor/bootstrap.min.js');
  return (
    <div className="console-wrapper">
      <HeaderConsole />
      {child}
      {/* <Outlet /> */}
      {/* <FooterConsole /> */}
    </div>
  );
};

export default ConsoleLayout;
