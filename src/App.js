import Head from "./Components/Layout/Head";
import Title from "./Components/Layout/Title";
import logo from "./logo.svg";
import Body from "./Components/Layout/Body";
import Portal from "./Components/Portal/Portal";
import { useState } from "react";
import CartProvider from "./Components/Store/CartProvider";
import CartContext from "./Components/Store/CartContext";

function App() {



  const [cartOpen,setCartOpen]=useState(false)

  const openCart=()=>{
    setCartOpen(true)
  }

  const closeCart=()=>{
    setCartOpen(false)
  }
 
  return (
    <CartProvider>
    <Head openCart={openCart}/>
    {cartOpen && <Portal closeCart={closeCart} />}
    <Body></Body>
    </CartProvider>
    
  );
}

export default App;
