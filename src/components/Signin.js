import React, { useState } from "react";
import "./Signin.css";
import { MdEmail } from "react-icons/md";
import { BsPersonFill, BsFillLockFill } from "react-icons/bs";
import { AxiosInstance } from "../util/AxiosInstance";


// POST API
// 1. Grab the data and store it in state
// 2. Send the data to the api
// 3. log the response

function Signin() {
  // boolean value for signup/login
  const [showSignup, setShowSignup] = useState(false);
  // grabbing the values from input boxes and storing it
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [signupsuccess,setSignupsuccess]= useState(false);

  // toggle bw login and signup
  const toggle = () => {
    setShowSignup(!showSignup);
  };

  // signup functionality
  const signupHandler = async () => {
    const user = { username, password, email };
    try {
      const response = await AxiosInstance.post('/auth/signin/',user);
      console.log(response.data.message);
      setSignupsuccess(() => response.data.message);
    } catch (error) {
      console.log(error);
    }
  };

  const siginHandler = async () => {
    const user = { username, password };

    try {
      const response = await AxiosInstance.post('/signin',user);
      console.log(response);
      window.location.href = "/";
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div>
        <div className="container">
            <div className="login-wrapper">
              <div>
                <h3 className="title text-center">
                  {showSignup ? `SIGN UP` : `SIGN IN`}
                </h3>

                 {/* username  */}
                <div className="input-group">
                 
                  {/* text field */}
                  <div className="input-group m-1">
                  <lable className="p-2">
                    <BsPersonFill/>
                  </lable>
            <input
              type="text"
              className="form-control"
              placeholder="Username"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
                </div>
                {/* email field */}
                {showSignup && (
            <div className="input-group">
              <lable className="p-2">
                    <MdEmail />
                  </lable>
              <input
                type="email"
                className="form-control"
                placeholder="Email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
                )}
                {/* password field */}
                <div className="input-group">
                  <lable className="p-2">
                    <BsFillLockFill />
                  </lable>
                  <input
              type="password"
              className="form-control"
              placeholder="Password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
                </div>
                {/* sign in / sign up button */}

                <div className="input-group">
               <div className="button">
               <input
              type="submit"
              className=" btn btn-primary form-control"
              value={showSignup ? "Sign Up" : "Log In"}
              onClick={showSignup ? signupHandler : siginHandler}
            />
               </div>
                </div>
                <div
                  className="text-center p-2"
                  onClick={toggle}
                  style={{ cursor: "pointer" }}
                >
                  {showSignup
                    ? `I already have an account`
                    : `I don't have an account`}
                </div>
                <div className={signupsuccess?'auth-response text-success text-center':'auth-response text-danger text-center'}>
                  <h5>Message</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    
  );
}

export default Signin;
