import React, { useContext } from "react";
import CartContext from "../Store/CartContext";

const CartButton = (props) => {
  const ctx = useContext(CartContext);
  const noOfItemsInCart = ctx.cartItems.reduce((total,item) => total + item.quantity, 0);
  return (
    <div className="btn btn-info" onClick={ctx.cartOpen}>
      <div className="container">
        <div className="row">
          <div className="col">Cart</div>
          <div className="col">{noOfItemsInCart}</div>
        </div>
      </div>
    </div>
  );
};

export default CartButton;
