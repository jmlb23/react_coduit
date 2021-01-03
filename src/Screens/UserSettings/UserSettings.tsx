import React, { useEffect, useState } from "react";
import { useSelector, useStore } from "react-redux";
import { Loader } from "../../Common/Loader/Loader";
import { apiClient } from "../../data/Api";
import { isOther } from "../../data/Error";
import { User, UserUpdate } from "../../data/UserDTOS";
import { AppActions } from "../../State/ActionCreators";
import { AppState } from "../../State/Reducers";
import "./UserSettings.css"

type UserSettingsProps = {

}

export const UserSettings = (props: UserSettingsProps) => {
  const store = useStore<AppState, AppActions>();
  const token = useSelector((x: AppState) => x.token)
  const [user, setUser] = useState<User | null>(null)
  const [submit, setSubmit] = useState(false);
  const [update, setUpdate] = useState<UserUpdate | null>(null);

  useEffect(() => {
    let mounted = true
    if (token !== null)
      apiClient.getUser(token).then(x => isOther(x) && x !== null ? mounted ? setUser(x) : null : null)
    return (() => {
      mounted = false;
    })
  }, [token])

  useEffect(() => {
    let mounted = true
    if (submit && token !== null && update !== null)
      apiClient.updateUser(token, update)
    return (() => {
      mounted = false
    })
  }, [submit, token, update])

  return <>
    <h1 className="UserSetting__title" >Your settings</h1>
    {
      user === null ? <Loader height={100} width={100} /> :
        <div className="UserSettings__container">
          <fieldset className="UserSettings__fieldset">
            <input onChange={(x) => console.log(x.target.value)} className="UserSettings__inputs UserSettings__inputs-size" placeholder="Url of profile picture" />
            <input onChange={(x) => console.log(x.target.value)} className="UserSettings__inputs UserSettings__inputs-size" placeholder="Username" value={user?.username} />
            <textarea onChange={(x) => console.log(x.target.value)} className="UserSettings__inputs UserSettings__inputs-resize" value={user?.bio ?? ""} placeholder="Short bio about you." />
            <input onChange={(x) => console.log(x.target.value)} className="UserSettings__inputs UserSettings__inputs-size" placeholder="Username" value={user?.email} />
            <input onChange={(x) => console.log(x.target.value)} className="UserSettings__inputs UserSettings__inputs-size" type="password" placeholder="Password" />
          </fieldset>
          <button className="UserSettings__button-right" >Update settings</button>
          <hr className="UserSettings__separator" />
          <button onClick={() => store.dispatch({ type: "REMOVE_TOKEN", payload: "" })} className="UserSettings__button-left" >Click to Logout</button>
        </div>
    }
  </>
}
