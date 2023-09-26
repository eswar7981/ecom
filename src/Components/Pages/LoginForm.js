import React, { useState } from "react";
import { Prompt } from "react-router-dom";
import "./LoginForm.css";
const LoginForm = () => {
  const [details, setDetails] = useState({ emailID: "", password: "" });
  const [dataEntering, setDataEntering] = useState(false);
  const [sendingRequest, setSendingRequest] = useState(false);
  const emailIDHandler = (e) => {
    setDetails((prev) => {
      return {
        ...prev,
        ["emailID"]: e.target.value,
      };
    });
  };

  const passwordHandler = (e) => {
    setDetails((prev) => {
      return {
        ...prev,
        ["password"]: e.target.value,
      };
    });
  };

  async function submitHandler(e) {
    setSendingRequest(true);
    e.preventDefault();
    const response = await fetch(
      "https://movies-ae6a0-default-rtd.firebaseio.com/LoginCredentials.json",
      {
        method: "POST",
        body: JSON.stringify(details),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const data = await response.json();
    console.log(data);
    e.preventDefault();

    setDetails({ emailID: "", password: "" });
    setSendingRequest(false);
  }

  const dataHandler = () => {
    setDataEntering(false);
  };

  const setDataHandler = () => {
    setDataEntering(true);
  };

  return (
    <>
      <div className="title">
        <h1>SignUp</h1>
      </div>
      <Prompt
        when={dataEntering}
        message={(location) => "entered data will be lost"}
      />
      <form onFocus={setDataHandler} onSubmit={submitHandler}>
        <div className="cont">
          <div className="rowws">
            <div className="col1">
              <h3>Enter EmailID</h3>
              <input
                value={details.emailID}
                
                onChange={emailIDHandler}
                required
              ></input>
            </div>
            <div className="col2">
              <h3>Email Password</h3>
              <input
                value={details.password}
                minLength={5}
             
                onChange={passwordHandler}
                required
              ></input>
            </div>
            <div className="but">{!sendingRequest &&
              <button onClick={dataHandler}>
                Create Account
              </button>}
            </div >
            <div className="loadbutton">
            {sendingRequest && <div className="load">
            </div>}
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default LoginForm;
