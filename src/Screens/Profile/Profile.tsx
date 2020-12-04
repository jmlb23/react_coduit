import React, { useEffect, useState } from "react";
import { useStore } from "react-redux";
import { useParams } from "react-router-dom";
import { apiClient } from "../../data/Api";
import { isOther } from "../../data/Error";
import { Profile } from "../../data/ProfileDTOS";
import { AppActions } from "../../State/ActionCreators";
import { AppState } from "../../State/Reducers";
import { Follow } from "../Article/Components/Comments/Follow/Follow";
import { ProfileFeed } from "./Components/ProfileFeed/ProfileFeed";
import "./Profile.css";


type ProfileProps = {
  showFavs: boolean
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

  return (
    <div className="UserProfile">
      <header className="UserProfile__header">
        <img className="UserProfile__img" src={profile?.image} alt="profile" />
        <p className="UserProfile__username">{profile?.username}</p>
        <div className="UserProfile__follow-align">
          <Follow username={profile?.username} />
        </div>
      </header>
      <ProfileFeed isFavFeed={props.showFavs} username={profile?.username} />
    </div>
  );
}
