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
    justLoggedOut:()=>{}
  });

export default CartContext;
