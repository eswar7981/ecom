import React, { useContext } from "react";
import "./Body.css";
import Title from "./Title";
import DisplayProducts from "../Products/DisplayProducts";
import ProductDescription from "./ProductDescription";
import { Link } from "react-router-dom";
import CartContext from "../Store/CartContext";
import AddToCart from "./AddToCart";

const Body = () => {
  const cntx = useContext(CartContext);

  return (
    <>
    <div className="title">
      <h1>Products</h1>
      </div>
      <ul>
        {cntx.items.map((item) => (
          <div className="lis">
            <li>
              <div className="body">
                <div>
                  <img src={item.imageUrl}></img>
                 
                </div>
               
                  <div className="rating">
                  <h1>{item.rating}</h1>
                  </div>
                   <div className="addcart">
                   <AddToCart item={item.id}></AddToCart>
                  </div>
                 <div className="cartbut">
                  
                  
                </div>
               
              </div>

              <div className="link">
                <Link to={`products/${item.id}`}>
                  Click here for more details{console.log(item.id)}
                </Link>
              </div>
            </li>
          </div>
        ))}
      </ul>
    </>
  );
};

export default Body;
