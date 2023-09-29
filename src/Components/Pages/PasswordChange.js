import React, { useState } from "react";
import "./PasswordChange.css";
const PasswordChange = () => {
  const [Newpass,setNewPassword]=useState('')
  const submitHandler=(e)=>{
    e.preventDefault()
    console.log(Newpass)

    fetch('https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyAUGPZ0RRfEcTF7-bGKKmigA28gvo_7HE4',{
      method:'POST',
      body:JSON.stringify(
        {
          idToken:localStorage.getItem('loggedin'),
          password:Newpass,
          returnSecureToken:true,
        }
      ),
      headers:{
        'Content-Type':'application/json'
    }
    }).then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        return res.json().then((data) => {
          let errorMessage = "unsuccessful";
          alert(errorMessage);
        });
      }
    })
    .then((data) => {
      console.log(data);
      localStorage.removeItem('loggedin',data.idToken)
      localStorage.setItem('loggedin',data.idToken)
    
    })
    .catch((err) => {
      alert(err.message);
    })
  }

  const passHandler=(e)=>{
    setNewPassword(e.target.value)
  }
  
  
  
  return (
    <div>
      <form onSubmit={submitHandler}>
      <div className="title1">
        <h1> Enter New Password</h1>
      </div>
      <div className="cont">
        <div className="rowws">
          <div className="col1">
            <h3>New Password</h3>
            <input onChange={passHandler}></input>
          </div>
          <div className="col4">
            <button>Confirm</button>
          </div>
        </div>
      </div>
      </form>
    </div>
  );
};

export default PasswordChange;
