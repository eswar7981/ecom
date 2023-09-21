import React from 'react'
import './Body.css'
import Title from './Title'
import DisplayProducts from '../Products/DisplayProducts'

const Body = () => {
  return (
    <>
    <div className='body'>
    <Title></Title>
    <DisplayProducts></DisplayProducts>
</div>
    </>
  )
}

export default Body
