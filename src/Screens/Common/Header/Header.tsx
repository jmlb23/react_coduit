import React from "react";
import { Link } from "react-router-dom";
import "./Header.css"

export const Header = () =>
  <header className="Header__header">
    <img />
    <nav className="Header__nav">
      <Link className="Header__Link" to="/">Home</Link>
      <Link className="Header__Link" to="/signin">Sign in</Link>
      <Link className="Header__Link" to="/signup">Sign up</Link>
    </nav>
  </header>