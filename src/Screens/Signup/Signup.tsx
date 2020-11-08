import React from "react";
import { Link } from "react-router-dom";
import "./Signup.css"
export const Signup = () =>
  <div className="Signup__container">
    <h1>Sign up</h1>
    <Link to="/signin">Have an account?</Link>
    <input type="text" placeholder="Username" />
    <input type="text" placeholder="Email" />
    <input type="password" placeholder="Password" />
    <input type="password" placeholder="Repeat Password" />
    <button >Sign up</button>
  </div>