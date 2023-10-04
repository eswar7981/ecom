import React, { useContext, useState } from "react";
import { Prompt, Redirect, useHistory } from "react-router-dom";
import "./LoginForm.css";
import { Link } from "react-router-dom";
import { Alert } from "bootstrap";
import CartContext from "../Store/CartContext";
const LoginForm = () => {
  const [details, setDetails] = useState({ emailID: "", password: "" });
  const [dataEntering, setDataEntering] = useState(false);
  const [sendingRequest, setSendingRequest] = useState(false);
  const [gotError, setGotError] = useState(false);
  const [login, setLogin] = useState(true);
  const [signIn, setSignIn] = useState(false);
  const [wrongPass, setWrongPass] = useState(false);
  const cntx = useContext(CartContext);
  const history=useHistory()
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

  const submitHandler = (e) => {
    setSendingRequest(true);
    setGotError(false);
    cntx.setemail(details.emailID)
    if (signIn) {
      e.preventDefault();

      fetch(
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAUGPZ0RRfEcTF7-bGKKmigA28gvo_7HE4",

        {
          method: "POST",
          body: JSON.stringify({
            email: details.emailID,
            password: details.password,
            returnSecureToken: true,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      ).then((res) => {
        if (res.ok) {
          //...
        } else {
          res.json().then((data) => console.log(data));
        }
      });

   

      setDetails({ emailID: "", password: "" });
      setSendingRequest(false);
    }

    if (login) {
      setWrongPass(false);
      e.preventDefault();
      console.log("I am in login page")
      fetch(
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAUGPZ0RRfEcTF7-bGKKmigA28gvo_7HE4",

        {
          method: "POST",
          body: JSON.stringify({
            email: details.emailID,
            password: details.password,
            returnSecureToken: true,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
        .then((res) => {
          if (res.ok) {
            return res.json();
          } else {
            return res.json().then((data) => {
              let errorMessage = "problem";
              alert(errorMessage);
              setWrongPass(true);
            });
          }
        })
        .then((data) => {
          console.log(cntx.alreadylogin)

          cntx.login(data.idToken)  
          console.log(cntx.alreadylogin)
        })
        .catch((err) => {
          alert(err.message);
        });

      setDetails({ emailID: "", password: "" });
      setSendingRequest(false);
      history.replace('/store')
    }
  };

  const passwordChangeHandler = (e) => {
    e.preventDefault();
  };

  const dataHandler = () => {
    setDataEntering(false);
  };

  const setDataHandler = () => {
    setDataEntering(true);
  };

  const SignInHandler = (e) => {
    setDetails({ emailID: "", password: "" });
    e.preventDefault();
    setSignIn(true);
    setLogin(false);
  };

  const LoginHandler = (e) => {
    setDetails({ emailID: "", password: "" });
    e.preventDefault();
    setLogin(true);
    setSignIn(false);
  };

  return (
    <>
      <div className="title">
        {login && <h1>Login</h1>}
        {signIn && <h1>Sign Up</h1>}
      </div>

      <div className="login">
        {login && (
          <button onClick={SignInHandler}>
            Does not have an account. then SignUp
          </button>
        )}
        {signIn && (
          <button onClick={LoginHandler}>
            Already exists an account. then Login
          </button>
        )}
      </div>
      
      <Prompt
        when={dataEntering}
        message={(location) => "entered data will be lost"}
      />
      <Prompt when={gotError} message={(location) => "Request Failed"} />
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

            <div className="but">
              {!sendingRequest && signIn && (
                <button onClick={dataHandler}>Create Account</button>
              )}
              {!sendingRequest && login && (
                <button onClick={dataHandler}>Login</button>
              )}
            </div>
            <div className="loadbutton">
              {sendingRequest && <div className="load"></div>}
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default LoginForm;
