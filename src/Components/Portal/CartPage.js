import React, { useContext } from "react";
import "./CartPage.css";
import CartContext from "../Store/CartContext";
const CartPage = (props) => {
  
  const ctx=useContext(CartContext)


  const removeItem=(e,item)=>{
    
    console.log(item)
    ctx.removeItem(item)
  }


  return (
    <div className="modals">
      <h1 >Cart</h1>
      {ctx.cartItems.map((item) => (
        <div className="container">
          <div className="row">
            <div className="col">
              <img style={{height:100,width:100}}    src={item.imageUrl}></img>
              </div>
            <div className="col">
              <h3>{item.title}</h3>
            </div>
            <div className="col">
              <h3>{item.quantity}</h3>
              </div>
            <div className="col">
              <h3>{item.price}</h3>
            </div>
            <div className="col">
              <div className='btn btn-danger'  onClick={(e)=>{removeItem(e,item)}}>
                remove
              </div>
              </div>
          </div>
        
        </div>
      ))}
      <div className='btn'>
        <button onClick={props.closeCart}>close</button>
        </div>
    </div>
  );
};

export default CartPage;
