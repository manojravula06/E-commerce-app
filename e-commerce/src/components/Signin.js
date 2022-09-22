import React, { useState } from "react";
import { signup, signin } from "../api/auth";
import {MdEmail} from "react-icons/md";
import { BsPersonFill, BsFillLockFill } from "react-icons/bs";
import { GrGoogle } from "react-icons/gr";
import Navbar from "./Navbar";

function Signin() {
  //show sign up / show sign in
  const [showSignup, setShowSignup] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [auth, setAuth] = useState("");

  //changing function from signin and signup
  const toggle = () => {
    setShowSignup(!showSignup);
  };

  //sign up
  const signupHandler = async () => {
    const user = { username, password, email };
    try {
      const response = await signup(user);
      console.log(response.data.message);
      setAuth(() => response.data.message);
    } catch (error) {
      console.log(error);
    }
  };
  // sign in
  const siginHandler = async () => {
    const user = { username, password };

    try {
      const response = await signin(user);
      console.log(response);
      window.location.href = "/";
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
    <Navbar/>
    <div className=" d-flex p-5 m-4">
      
      <hr />
   
      {/* sign in card  */}
      <div
        class="card py-3 d-flex justify-content-start"
        style={{ width: 18 + "rem" }}
      >
        <h4 className="d-flex justify-content-center">
          {showSignup ? "Sign up" : "Sign in"}
        </h4>

        {/* Enter username  */}
        <div className="d-flex p-4">
          <label className="py-2 px-1">
            <BsPersonFill />
          </label>
          <input
            type="text"
            class="form-control"
            placeholder="Enter Username"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          ></input>
        </div>
        {/* Email  */}
        {showSignup &&(
          <div className="d-flex p-3">
          <label className="py-2 px-1">
            <MdEmail/>
          </label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter Mail Id"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></input>
        </div>
        )}
        {/* password  */}
        <div className="d-flex p-3">
          <label className="py-2 px-1">
            <BsFillLockFill />
          </label>
          <input
            type="password"
            className="form-control"
            placeholder="Password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></input>
        </div>

        {/* signin button /signup button */}
        <div className="d-flex px-3 py-2">
          <input
            type="submit"
            className="btn btn-info form-control fw-bold"
            value={showSignup ? "Sign Up" : "Sign In"}
            onClick={showSignup ? signupHandler : siginHandler}
            />
        </div>
        <div className="d-flex justify-content-center px-4 py-2">
          <GrGoogle />
        </div>

        {/* switch to sign up */}

        <div className="d-flex justify-content-center" onClick={toggle}>
          <p>
            {showSignup
              ? "If you have an acount ?"
              : "If you dont have an account?"}
            <div className="btn d-flex justify-content-center text-success">
              {showSignup ? "Sign in" : "Sign up"}
            </div>
          </p>
          <p className="lead text-success">{auth ? auth : ""}</p>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Signin;
