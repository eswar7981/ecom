import React from "react";
import { Link, NavLink } from "react-router-dom";

import "./MainNavigation.css";
import Head from "../Layout/Head";
const MainNavigation = () => {
  return (
    <header>
      <nav>
        <ul>
          <div className="head">
            <li>

                <NavLink to="/">
                  <div className="btn">Home</div>
                </NavLink>
          
            </li>
            <li>
              <NavLink to="/about">
                {" "}
                <div className="btn">About</div>
              </NavLink>
            </li>
            <li>
              <NavLink to="/store">
                <div className="btn">Store</div>
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
