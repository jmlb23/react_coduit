import React, { useEffect, useMemo, useState } from "react";
import { useStore } from "react-redux";
import { Link } from "react-router-dom";
import { apiClient } from "../../data/Api";
import { isOther } from "../../data/Error";
import { AppActions } from "../../State/ActionCreators";
import { AppState } from "../../State/Reducers";
import "./Login.css"


type LoginProps = {

};


export function Login(props: LoginProps): JSX.Element {
  const [emailI, setEmailI] = useState("");
  const [passwordI, setPasswordI] = useState("");
  const [submited, setSubmited] = useState<string[]>([]);
  const store = useStore<AppState, AppActions>()
  const dispatch = useMemo(() => store.dispatch, [store.dispatch])


  useEffect(() => {
    if (submited.length > 0) {
      const [em, pass] = submited;
      apiClient.login({ email: em, password: pass }).then(x => isOther(x) ? (() => { dispatch({ type: "ADD_TOKEN", payload: x.token }); return x })() : x)
    }
  }, [dispatch, submited]);

  return (
    <div className="Login__container">
      <h1>Sign in</h1>
      <Link to="/signup">Need an account?</Link>
      <input type="text" placeholder="Email" onInput={data => setEmailI((data.target as HTMLInputElement).value)} />
      <input type="password" placeholder="Password" onInput={x => setPasswordI((x.target as HTMLInputElement).value)} />
      <button onClick={_ => setSubmited([emailI, passwordI])}>Sign in</button>
    </div>
  );
}