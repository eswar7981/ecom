import React, { useState } from "react";
import CartContext from "./CartContext";

const CartProvider = (props) => {
  const [items, updateItems] = useState([
    {
      id: 1,
      title: "Colors",
      quantity: 0,
      price: 100,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",

      reviews: [
        { id: 1, rating: "⭐⭐⭐⭐", review: "very nice product",customer:'ravi'},
        { id: 2, rating: "⭐⭐", review: "expected a better product",customer:'kiran'},
        { id: 3, rating: "⭐⭐⭐⭐⭐", review: "must buy" , customer:'rakesh'},
        { id: 4, rating: "⭐⭐⭐⭐", review: "good product" ,customer:"ramya"},
      ],
      rating:"⭐⭐⭐"
    },
    {
      id: 2,
      title: "Black and white Colors",
      quantity: 0,
      price: 50,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
        reviews: [
          { id: 1, rating: "⭐⭐⭐⭐", review: "very nice product",customer:"ramya" },
          { id: 2, rating: "⭐⭐", review: "expected a better product",customer:'rakesh'},
          { id: 3, rating: "⭐⭐⭐⭐⭐", review: "must buy" ,customer:'kiran'},
          { id: 4, rating: "⭐⭐⭐⭐", review: "good product" ,customer:"ramya"},
        ],
        rating: "⭐⭐⭐⭐"
    },
    {
      id: 3,
      title: "Yellow and Black Colors",
      quantity: 0,
      price: 70,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
        reviews: [
          { id: 1, rating: "⭐⭐⭐⭐", review: "very nice product",customer:"ramya" },
          { id: 2, rating: "⭐⭐", review: "expected a better product", customer:'kiran' },
          { id: 3, rating: "⭐⭐⭐⭐⭐", review: "must buy" ,customer:'kiran'},
          { id: 4, rating: "⭐⭐⭐⭐", review: "good product" ,customer:'rakesh'},
        ],
        rating: "⭐⭐⭐⭐"
    },

    {
      id: 4,
      title: "Blue Color",
      quantity: 0,
      price: 100,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
        reviews: [
          { id: 1, rating: "⭐⭐⭐⭐", review: "very nice product" ,customer:'kiran'},
          { id: 2, rating: "⭐⭐", review: "expected a better product" ,customer:'rakesh'},
          { id: 3, rating: "⭐⭐⭐⭐⭐", review: "must buy" , customer:'kiran'},
          { id: 4, rating: "⭐⭐⭐⭐", review: "good product" ,customer:"ramya"},
        ],
        rating: "⭐⭐"
    },
  ]);
  const [cart, updateCart] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);
  const [login, setLogin] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [email,setEmail]=useState('')


  const emailHandler=(mail)=>{
    setEmail(email)
  }

  const openCart = () => {
    setCartOpen(true);
  };

  const closeCart = () => {
    setCartOpen(false);
  };

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

    if (itemIspresent && item.quantity > 1) {
      updateCart(
        cart.map((prod) => {
          if (prod.title === item.title) {
            setTotalAmount(totalAmount-item.price)
            return {
              ...prod,
              quantity: prod.quantity - 1,
            };
          }
          return prod;
        })
      );
    } else {
      setTotalAmount(totalAmount-item.price)
      updateCart(cart.filter((prod) => prod.title !== item.title));
    }
  };

  const addTotal1=(price)=>{
    setTotalAmount(totalAmount+price)
  }

  const loggedIn = (token) => {
    localStorage.setItem("loggedin", token);
    setLogin(true);
  };

  const loggedOut = () => {
    localStorage.removeItem("loggedin");
    setLogin(false);
  };

  const cartContext = {
    items: items,
    cartItems: cart,
    totalAmount: totalAmount,
    addItem: addItemtoCart,
    removeItem: removeItemfromCart,
    login: loggedIn,
    alreadylogin: login,
    justLoggedOut: loggedOut,
    cartOpen: openCart,
    cartClose: closeCart,
    cart: cartOpen,
    addTotal:addTotal1,
    setemail:emailHandler,
    email:email
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
