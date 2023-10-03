import React, { useContext } from 'react'
import './AddToCart.css'
import CartContext from '../Store/CartContext'
const AddToCart = (props) => {
   const cntx=useContext(CartContext)

   const itemAddHandler=(e)=>{
    e.preventDefault()
    cntx.addItem(cntx.items[props.item-1])
    cntx.addTotal(cntx.items[props.item-1].price)
   }

  


  return (
    <div className='cartbutton'>
        <button onClick={itemAddHandler}>Add to Cart</button>
    </div>
  )
}

export default AddToCart
