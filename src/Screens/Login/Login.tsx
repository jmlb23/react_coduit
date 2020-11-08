import React from "react";
import { Link } from "react-router-dom";
import "./Login.css"
export const Login = () =>
  <div className="Login__container">
    <h1>Sign in</h1>
    <Link to="/signup">Need an account?</Link>
    <input type="text" placeholder="Email" />
    <input type="password" placeholder="Password" />
    <button >Sign in</button>
  </div>