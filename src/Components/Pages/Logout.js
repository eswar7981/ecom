import React from "react";
import './Logout.css'
import { useHistory } from "react-router-dom";
const Logout = () => {
  
    const history=useHistory()


    const submitHandler=()=>{
        localStorage.removeItem('loggedin')
        history.replace('/login')
    }

  return (
    <div>
        <form onSubmit={submitHandler}>
      <div className="logcont">
        <div className="ro">
          <div className="cols">
            <h3>Are You Sure ?</h3>
            </div>
            <div className="colbut">
            <button>Log Out</button>
            </div>
           
        </div>
      </div>
      </form>
    </div>
    
  );
};

export default Logout;
