import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";

import "./MainNavigation.css";
import CartButton from "../Layout/CartButton";
import CartContext from "../Store/CartContext";
import { useEffect } from "react";
const MainNavigation = () => {
  const cntx = useContext(CartContext);
  return (
    <header>
      <nav>
        <ul>
          <div className="head">
            {cntx.alreadylogin && (
              <div>
                <div className="head">
                  <li className="head1">
                    <NavLink to="/home">
                      <div className="btn">Home</div>
                    </NavLink>
                  </li>

                  <li className="head1">
                    <NavLink to="/about">
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
              </div>
            )}
            {!cntx.alreadylogin && 
             <li className="head1">
             <NavLink to="/login">
               <div className="btn">Store</div>
             </NavLink>
           </li>}

            <li className="head1">
              {cntx.alreadylogin ? (
                <NavLink to="/logout">
                  <div className="btn">Logout</div>
                </NavLink>
              ) : (
                <NavLink to="/login">
                  <div className="btn">Login</div>
                </NavLink>
              )}
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
