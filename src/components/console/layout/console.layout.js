import React from "react";
import { Outlet } from "react-router-dom";
import { FooterConsole, HeaderConsole } from ".";
import '../assets/css/app.scoped.css';

const ConsoleLayout = () => {
  return (
    <div className="console-wrapper">
      <HeaderConsole />
      {/* <Outlet /> */}
      {/* <FooterConsole /> */}
    </div>
  );
};

export default ConsoleLayout;
