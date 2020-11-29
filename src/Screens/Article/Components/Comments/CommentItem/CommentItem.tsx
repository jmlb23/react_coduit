import React from "react";
import { Link } from "react-router-dom";
import "./CommentItem.css";

type CommentItemProps = {
  content: string,
  image: string,
  username: string,
  date: string
}


export const CommentItem = ({ content, image, username, date }: CommentItemProps) =>
  <div className="CommentItem__container">
    <p className="CommentItem__content">{content}</p>
    <footer className="CommentItem__footer">
      <Link className="CommentItem__footer__item" to={`/profiles/${username}`}><img className="CommentItem__avatar" src={image} /></Link>
      <Link className="CommentItem__footer__item" to={`/profiles/${username}`}>{username}</Link>
      <span className="CommentItem__footer__item" >{date}</span>
    </footer>
  </div>