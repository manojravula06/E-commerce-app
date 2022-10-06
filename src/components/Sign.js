import React, { useState, useEffect, useRef } from "react";

function Sign() {
    const userRef=useRef();
    const errRef=useRef();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [err,setErr]= useState("");

    useEffect(()=>{
        userRef.current.focus();
    },[])

    useEffect(()=>{
        setErr('');
    },[user,password])
  return (
    <div>
      <h1>Sign in</h1>
      <div className="card p-5 text-center">
        <div className="card-title">
          <h4> Login Here</h4>
        </div>
        <form>
                    {/* username  */}
        <div className="input-group m-1">
          <input
            type="text"
            className="form-control"
            name="username"
            placeholder="Username"
            id="username"
            value={username}
          />
        </div>

       {/* password */}
        <div className="input-group m-1">
          <input
            type="password"
            name="password"
            className="form-control"
            placeholder="Password"
            id="password"
            value={password}
          />
        </div>

        {/* log in button */}
        <div className="my-2">
          <input
            type="submit"
            name="submit"
            className=" btn btn-info rounded-pill form-control"
            value={"sign in"}
          />
        </div>
        </form>
      </div>
    </div>
  );
}

export default Sign;
