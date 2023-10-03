import React, { useContext } from 'react'
import Head from "./Head";
import Title from "./Title";
import Body from "./Body";
import Portal from "../Portal/Portal";
import { useState } from "react";
import CartProvider from "../Store/CartProvider";
import MainNavigation from "../Navigation/MainNavigation";
import { Link } from "react-router-dom";
import CartContext from '../Store/CartContext';
const Store = () => {

  const cntx=useContext(CartContext)
   
  return (
    <div>
     {cntx.cart && <Portal/>}
    <Body/>
  
  
    </div>
  )
}

export default Store
