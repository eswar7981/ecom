import React from "react";
import "./Body.css";
import Title from "./Title";
import DisplayProducts from "../Products/DisplayProducts";
import ProductDescription from "./ProductDescription";
import { Link } from "react-router-dom";

const Body = () => {
  return (
    <>
      <h1>Product Page</h1>
      <ul>
        <li>
          <Link to="products/p1"> Product 1</Link>
        </li>
        <li>
          <Link to="products/p2"> Product 2</Link>
        </li>
        <li>
          <Link to="products/p3"> Product 3</Link>
        </li>
        <li>
          <Link to="products/p4"> Product 4</Link>
        </li>
      </ul>
    </>
  );
};

export default Body;
