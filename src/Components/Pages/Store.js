import React from 'react'
import Head from "../Layout/Head";
import Title from "../Layout/Title";
import Body from "../Layout/Body";
import Portal from "../Portal/Portal";
import { useState } from "react";
import CartProvider from "../Store/CartProvider";
import MainNavigation from "../Navigation/MainNavigation";
import { Link } from "react-router-dom";
const Store = () => {

    const [cartOpen,setCartOpen]=useState(false)

    const openCart=()=>{
      setCartOpen(true)
    }
  
    const closeCart=()=>{
      setCartOpen(false)
    }
   
  return (
    <div>
      
    <Head openCart={openCart}/>
    <Body/>
    {cartOpen && <Portal closeCart={closeCart}/>}
  
    </div>
  )
}

export default Store
