import React from "react";
import { Outlet } from "react-router-dom";
import { FooterConsole, HeaderConsole } from ".";

const ConsoleLayout = () => {
  return (
    <div className="console-wrapper">
      <HeaderConsole />
      <Outlet />
      <FooterConsole />
    </div>
  );
};

export default ConsoleLayout;
