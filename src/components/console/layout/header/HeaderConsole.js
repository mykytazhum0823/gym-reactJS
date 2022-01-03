import React from "react";
import { Outlet } from "react-router-dom";

const HeaderConsole = () => {
  return (
    /* // Header  */
    <>
      <div id="header" className="mdk-header js-mdk-header m-0" data-fixed>
        <div className="mdk-header__content">
          <div
            className="navbar navbar-expand-sm navbar-main navbar-dark bg-primary pl-md-0 pr-0"
            id="navbar"
            data-primary
          >
            <div className="container-fluid pr-0 ">
              <div className="d-flex sidebar-account flex-shrink-0 mr-auto mr-lg-0">
                <a
                  href="index-2.html"
                  className="flex d-flex align-items-center text-underline-0"
                >
                  <span className="flex d-flex flex-column text-white">
                    <strong className="sidebar-brand">Vigory</strong>
                  </span>
                </a>
              </div>

              <ul className="ml-auto nav navbar-nav mr-2 d-none d-lg-flex">
                <li className="nav-item">
                  <a href="#" className="nav-link">
                    Get Help
                  </a>
                </li>
              </ul>

              <form
                className="search-form search-form--light d-none d-sm-flex flex ml-3"
                action="#"
              >
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search"
                />
                <button className="btn" type="submit">
                  <i className="material-icons">search</i>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default HeaderConsole;
