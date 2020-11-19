import React, { useEffect, useState } from "react";
import { useStore } from "react-redux";
import { useParams } from "react-router-dom";
import { apiClient } from "../../data/Api";
import { isOther } from "../../data/Error";
import { Profile } from "../../data/ProfileDTOS";
import { AppActions } from "../../State/ActionCreators";
import { AppState } from "../../State/Reducers";
import { FeedList } from "../Home/Components/Feed/FeedList/FeedList";
import "./Profile.css";


type ProfileProps = {

};

export const UserProfile = (props: ProfileProps) => {
  const store = useStore<AppState, AppActions>();
  const [token, setToken] = useState<string>();
  const [profile, setProfile] = useState<Profile>();
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    let isMounted = true;
    const subs = store.subscribe(() => {
      const token = store.getState().token
      if (token !== null) setToken(token)
    });

    apiClient.getProfile(id, token).then(x => isMounted ? setProfile(isOther(x) ? x : { bio: "", following: false, image: "", username: "" }) : null);

    return (function () {
      subs()
      isMounted = false;
    })

  }, [token, id, store]);

  return <>
    <div>
      <img className="UserProfile__img" src={profile?.image} alt="profile" />
      <p>{profile?.username}</p>
      <span>
        <img alt="plus" />
        <span>follow</span>
        <span>{profile?.username}</span>
      </span>
    </div>
    <FeedList articles={[]} />
  </>;
}