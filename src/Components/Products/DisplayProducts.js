import React, { useContext, useState } from "react";
import CartContext from "../Store/CartContext";
import './DisplayProducts.css'
const DisplayProducts = () => {
  

  const ctx=useContext(CartContext)

 
  const addItemHandler=(e,prod)=>{
    ctx.addItem(prod)
  }


  return (
    <>
      <div className="products">
        <div className="container1">
          {ctx.items.map((prod) => (
            <div className="container">
              <div className="col">
                <h1>{prod.title}</h1>
                <img src={prod.imageUrl}></img>
                <h1>{prod.price}</h1>
              </div>
              <div onClick={(e)=>addItemHandler(e,prod)} className="btn btn-primary">
                Add to cart{" "}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default DisplayProducts;
