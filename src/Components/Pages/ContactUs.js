import React, { useState } from 'react'
import './ContactUs.css'
const ContactUs = () => {
    const [details,setDetails]=useState({name:'',emailID:'',phoneNumber:''})
     
      async function submitHandler(e){
        try{
      e.preventDefault()
      const response= await fetch('https://movies-ae6a0-default-rtdb.firebaseio.com/ContactFormDetails.json',{
        method:'POST',
        body:JSON.stringify(details),
        headers:{
          'Content-Type':'application/json'
      }
      })
      const data=await response.json()
      console.log(data)

      setDetails({name:'',emailID:'',phoneNumber:''})}
      catch(err){
  console.log(err)
      }
    }


    const nameHandler=(e)=>{
      setDetails((prev)=>{
      return{
        ...prev,['name']:e.target.value
      }})
    }


    const emailHandler=(e)=>{
      setDetails((prev)=>{
      return{
        ...prev,['emailID']:e.target.value
      }})
    }


    const phnNoHandler=(e)=>{
      setDetails((prev)=>{
      return{
        ...prev,['phoneNumber']:e.target.value
      }})
    }




  return (
    <>
    
    <div className='title'>
      
      <h1>Fill the Form</h1>
    </div>
    <form onSubmit={submitHandler}>
    <div className='cont'>
      
      <div className='rowws'>
        <div className='col1'>
          <h3>Name</h3>
          <input value={details.name}  type='text' onChange={nameHandler} required></input>
          </div>
          <div className='col2'>
          <h3>Email ID</h3>
          <input value={details.emailID}  type='email' onChange={emailHandler} required></input>
          </div> 
          <div className='col3'>
          <h3>Phone Number</h3>
          <input value={details.phoneNumber} onChange={phnNoHandler} required></input>
          </div>
          <div className='col4'>
          <button>Submit</button>
          </div>

      </div>
    </div>
    </form>
    </>
    
  )
}

export default ContactUs
