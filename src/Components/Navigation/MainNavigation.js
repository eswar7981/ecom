import React from "react";
import { Link, NavLink } from "react-router-dom";

import "./MainNavigation.css";

const MainNavigation = () => {
  return (
    <header>
      <nav>
        <ul>
          <div className="head">
            <li className="head1">

                <NavLink to="/home">
                  <div className="btn">Home</div>
                </NavLink>
          
            </li>
            <li  className="head1">
              <NavLink to="/about">
                {" "}
                <div className="btn">About</div>
              </NavLink>
            </li>
            <li  className="head1">
              <NavLink to="/store">
                <div className="btn">Store</div>
              </NavLink>
            </li>
            <li  className="head1">
              <NavLink to="/contactus">
                <div className="btn">Contact Us</div>
              </NavLink>
            </li>

            <li  className="head1">
              <NavLink to="/login">
                <div className="btn">Login</div>
              </NavLink>
            </li>
          </div>
        </ul>
      </nav>
      <div className="headin">GENERICS</div>
    </header>
  );
};

export default MainNavigation;
