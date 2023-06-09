import React from "react";
import "./register.css";
import { useState } from "react";
import {NavLink, useNavigate} from "react-router-dom"

export const Register = () => {
  const Navigate = useNavigate()
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const authRegister = () => {
    fetch(`http://localhost:4001/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        email: email,
        password: password,
      }),
    })
      .then((res) => res.json())
      .then((data) => alert(data.msg));
      Navigate('/login')
  };

  return (
    <div className="container">
      <h1 className="form-title">Registration</h1>
      <form className="register_form" onSubmit={authRegister}>
        <label htmlFor="username" className="register_label">
          username
          <input
            type="text"
            id="username"
            className="input-field"
            placeholder="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <label htmlFor="email" className="register_label">
          email
          <input
            type="email"
            id="email"
            className="input-field"
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label htmlFor="password" className="register_label">
          password
          <input
            type="password"
            id="password"
            className="input-field"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <NavLink className='auth_navigate' to='/login'>
          Login
        </NavLink>
        <button className="sign-up-button" type="submit">
          register
        </button>
      </form>
    </div>
  );
};
