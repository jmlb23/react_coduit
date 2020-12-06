import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { apiClient } from "../../data/Api";
import { isOther } from "../../data/Error";
import { User } from "../../data/UserDTOS";
import { AppState } from "../../State/Reducers";
import "./Header.css"

export const Header = () => {

  const token = useSelector((x: AppState) => x.token)
  const [user, setUser] = useState<User | null>(null)


  useEffect(() => {
    let mounted = true
    if (token !== null)
      apiClient.getUser(token).then(x => isOther(x) && x !== null ? mounted ? setUser(x) : null : null)
    return (() => {
      mounted = false;
    })
  }, [token])

  return <header className="Header__header">
    <Link className="Header__logo__link" to="/"><img className="Header__logo" src={process.env.PUBLIC_URL + '/favicon.ico'} /></Link>
    <nav className="Header__nav">
      <Link className="Header__Link" to="/">Home</Link>
      {
        token === null ? loggedOut() : loggedIn(user)
      }

    </nav>
  </header>
}

function loggedOut(): React.ReactNode {
  return <>
    <Link className="Header__Link" to="/signin">Sign in</Link>
    <Link className="Header__Link" to="/signup">Sign up</Link>
  </>;
}

function loggedIn(user: User | null): React.ReactNode {
  return <>
    <Link className="Header__Link" to="/editor">New Article</Link>
    <Link className="Header__Link" to="/settings">Settings</Link>
    <Link className="Header__Link" to={`/profiles/${user?.username}`}>{user?.username}</Link>
  </>;
}
