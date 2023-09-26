import React, { useState } from 'react'
import Product1 from './Product1'
import { useHistory, useParams } from 'react-router-dom'
import DummyForm from './DummyForm'
const ProductDescription = () => {
   const [page,setPage]=useState('Product')
    const params=useParams()
    const history=useHistory()

    const backHandler=(e)=>{
        e.preventDefault();
        history.push('/store')
    }
    return (
    <div>

      <h1>Product Details</h1>
      <h1> {params.productid}</h1> 
      <DummyForm></DummyForm>
    </div>
  )
}

export default ProductDescription
