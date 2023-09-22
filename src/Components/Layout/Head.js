import React from 'react'
import { createBrowserRouter ,RouterProvider} from 'react-router-dom'
import './Head.css'
import CartButton from './CartButton'
const Head = (props) => {
  
  

  return (
 <>
 <div className='container'>
 <CartButton openCart1={props.openCart}></CartButton>
 </div>
 </>
  )
}

export default Head
