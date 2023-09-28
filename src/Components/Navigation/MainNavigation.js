import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";

import "./MainNavigation.css";
import CartButton from "../Layout/CartButton";
import CartContext from "../Store/CartContext";

const MainNavigation = () => {
  return (
    <header>
      <nav>
        <ul>
          <div className="head">
            {localStorage.getItem("loggedin") && (
              <div className="head">
                <li className="head1">
                  <NavLink to="/home">
                    <div className="btn">Home</div>
                  </NavLink>
                </li>
                <li className="head1">
                  <NavLink to="/about">
                    {" "}
                    <div className="btn">About</div>
                  </NavLink>
                </li>
                <li className="head1">
                  <NavLink to="/store">
                    <div className="btn">Store</div>
                  </NavLink>
                </li>
                <li className="head1">
                  <NavLink to="/contactus">
                    <div className="btn">Contact Us</div>
                  </NavLink>
                </li>
                <li className="head1">
                  <NavLink to="/profile">
                    <div className="btn">Profile</div>
                  </NavLink>
                </li>
              </div>
            )}
            <li className="head1">
              {localStorage.getItem('loggedin') ?
              <NavLink to="/logout">
                <div className="btn">Logout</div>
              </NavLink> : <NavLink to="/login">
                <div className="btn">Login</div>
              </NavLink> 

}
            </li>
          </div>
        </ul>
      </nav>
      <div className="h">
        <div className="headin">
          GENERICS{" "}
          <div className="quot">
            <h1> premium</h1>
          </div>
        </div>
      </div>
    </header>
  );
};

export default MainNavigation;
