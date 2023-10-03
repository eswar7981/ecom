import React, { createContext, useContext, useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import DummyForm from "./DummyForm";
import CartContext from "../Store/CartContext";
import "./ProductDescription.css";
import CartButton from "./CartButton";
import AddToCart from "./AddToCart";

const ProductDescription = () => {
  const [page, setPage] = useState("Product");
  const [count, setCount] = useState(1);
  const params = useParams();
  const history = useHistory();

  const backHandler = (e) => {
    e.preventDefault();
    history.push("/store");
  };

  const cntx = useContext(CartContext);

  const imageLeftChangeHandler = (e) => {
    e.preventDefault();
    if (count === 1) {
      return setCount(4);
    }
    setCount(count - 1);
    console.log(count);
  };

  const imageRightChangeHandler = (e) => {
    e.preventDefault();
    if (count === 4) {
      return setCount(1);
    }
    setCount(count + 1);
    console.log(count);
  };

  const backPageHandler = (e) => {
    e.preventDefault();
    history.replace("/store");
  };

  return (
    <>
   
      <div className="outer">
        <div className="back">
          <button onClick={backPageHandler}>Back</button>
        </div>
        <div className="borders">
        <div className="img">
          <button onClick={imageLeftChangeHandler}>🡄</button>
          {count === 1 && (
            <img
              src={require(`../Additionals/${params.productid}/1.png`)}
              width={500}
              height={400}
            ></img>
          )}
          {count === 2 && (
            <img
              src={require(`../Additionals/${params.productid}/2.png`)}
              width={500}
              height={400}
            ></img>
          )}
          {count === 3 && (
            <img
              src={require(`../Additionals/${params.productid}/3.png`)}
              width={500}
              height={400}
            ></img>
          )}
          {count === 4 && (
            <img
              src={require(`../Additionals/${params.productid}/4.png`)}
              width={500}
              height={400}
            ></img>
          )}
          <button onClick={imageRightChangeHandler}>🡆</button>
        </div>
        <div className="imgDesc">
          <h1>{`${count}/4`}</h1>
        </div>
        <div className="ti">
          <h1>{cntx.items[params.productid-1].title}</h1>
        </div>
        <div className="cartbut">
          <AddToCart item={params.productid-1}></AddToCart>
        </div>
      </div>

      <div className="reviewborder">
        <div className="reviewTitle">
          <h1>Customer Reviews</h1>
          </div>
          {cntx.items[params.productid-1].reviews.map((rev) => (
            <div className="reviewbox">
              <h1>{rev.rating}</h1>
              <h1>{rev.review}</h1>
              <div className="customer">
                <h2>purchased by</h2>
                <h1>{rev.customer}</h1>
              </div>
            </div>
          ))}
        
        <div></div>
      </div>
      </div>
    </>
  );
};

export default ProductDescription;
