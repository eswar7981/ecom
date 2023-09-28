import React, { useState } from "react";
import CartContext from "./CartContext";

const CartProvider = (props) => {
  const [items, updateItems] = useState([
    {
      title: "Colors",
      quantity: 0,
      price: 100,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    },
    {
      title: "Black and white Colors",
      quantity: 0,
      price: 50,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
    },
    {
      title: "Yellow and Black Colors",
      quantity: 0,
      price: 70,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
    },

    {
      title: "Blue Color",
      quantity: 0,
      price: 100,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
    },
  ]);
  const [cart, updateCart] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);
  const [login,setLogin]=useState(false)
  
  
  const loggedIn=()=>{
    console.log("hlello")
    if(localStorage.getItem('loggedin')){
      setLogin(true)
    }
  }


  
  const addItemtoCart = (item) => {
    const itemIspresent = cart.some((prod) => {
      if (prod.title === item.title) {
        return true;
      }
      return false;
    });

    if (itemIspresent) {
      updateCart(
        cart.map((prod) => {
          if (prod.title === item.title) {
            return {
              ...prod,
              quantity: prod.quantity + 1,
            };
          }

          return prod;
        })
      );
    } else {
      updateCart([...cart, { ...item, quantity: 1 }]);
    }
  };

  const removeItemfromCart = (item) => {
    const itemIspresent = cart.some((prod) => {
      if (prod.title === item.title) {
        return true;
      }
      return false;
    });

    if (itemIspresent && item.quantity>1) {
      updateCart(
        cart.map((prod) => {
          if (prod.title === item.title) {
            return {
              ...prod,
              quantity: prod.quantity - 1,
            };
          }
          return prod
        })
      )
    }
    else{
      updateCart(cart.filter((prod) => prod.title !== item.title));
    }
  };

  

  const cartContext = {
    items: items,
    cartItems: cart,
    totalAmount: totalAmount,
    addItem: addItemtoCart,
    removeItem: removeItemfromCart,
    login:login,
    LoggedIn:loggedIn,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
