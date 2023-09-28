import React from "react";
import './Logout.css'
const Logout = () => {

    const submitHandler=()=>{
        localStorage.removeItem('loggedin')
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
