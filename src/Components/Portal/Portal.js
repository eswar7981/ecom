import React from "react";
import ReactDOM from "react-dom";
import CartPage from "./CartPage";
import "./Portal.css";

const rend=document.getElementById('portal')

const Portal = (props) => {
 
  return (<>
  <div className="modals">
    {ReactDOM.createPortal(<CartPage />, rend)}
    </div>
    </>);
};

export default Portal;
