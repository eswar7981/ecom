import React from "react";

const CartContext = 
  React.createContext({
    items: [],
    cartItems: [],
    totalAmount: 0,
    addItem: (item) => {},
    removeItem: (id) => {},
    login:(token)=>{},
    alreadylogin:null,
    justLoggedOut:()=>{},
    cartOpen:()=>{},
    cartClose:()=>{},
    cart:null,
    addTotal1:(price)=>{},
    emailHandler:(email)=>{},
    email:null,
  });

export default CartContext;
