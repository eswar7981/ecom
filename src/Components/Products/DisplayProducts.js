import React, { useState } from "react";

const DisplayProducts = () => {
  const [row, setRow] = useState(true);
  const products = [
    {
      title: "Colors",
      price: 100,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    },
    {
      title: "Black and white Colors",
      price: 50,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
    },
    {
      title: "Yellow and Black Colors",
      price: 70,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
    },

    {
      title: "Blue Color",
      price: 100,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
    },
  ];

  return (
    <>
      <div className="products">
        <div className="container">
          {products.map((prod) => (
            <div className="container">
            
                <div className="col">
                <h1>{prod.title}</h1>
                <img src={prod.imageUrl}></img>
                <h1>{prod.price}</h1>
                </div>
            
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default DisplayProducts;
