import React, { useEffect, useState } from "react";
import { useStore } from "react-redux";
import { Link } from "react-router-dom";
import { AppActions } from "../../State/ActionCreators";
import { AppState } from "../../State/Reducers";
import "./Header.css"

export const Header = () => {
  const store = useStore<AppState, AppActions>()

  const [isLoged, setIsLoged] = useState(false)

  useEffect(() => {
    const subs = store.subscribe(() => setIsLoged(store.getState().token !== null))
    return subs
  })

  return <header className="Header__header">
    <Link className="Header__logo__link" to="/"><img className="Header__logo" src={process.env.PUBLIC_URL + '/favicon.ico'} /></Link>
    <nav className="Header__nav">
      <Link className="Header__Link" to="/">Home</Link>
      {
        !isLoged ?
          <>
            <Link className="Header__Link" to="/signin">Sign in</Link>
            <Link className="Header__Link" to="/signup">Sign up</Link>
          </> : <></>
      }

    </nav>
  </header>
}