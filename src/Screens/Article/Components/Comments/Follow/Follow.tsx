import React from "react";
import "./Follow.css";

type FollowProps = {
  username?: string
}

export const Follow = (props: FollowProps) => <button className="Follow__button"><span>+</span> follow {props.username}</button>
