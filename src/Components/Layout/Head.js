import React from 'react'
import './Head.css'
import CartButton from './CartButton'
const Head = (props) => {
  return (
 <>
 <div className='container'>
 <h1>head</h1>
 <CartButton openCart1={props.openCart}></CartButton>
 </div>
 </>
  )
}

export default Head
