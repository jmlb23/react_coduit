import React from "react";
import { Link } from "react-router-dom";
import { ArticleFeed } from "../../../../data/ArticleDTOS";
import "./UserPresence.css"
import "../../../../Common/Extensions";


type UserPresenceProps = {
  className?: string
  article: ArticleFeed | null
};

export const UserPresence = ({ article, className }: UserPresenceProps) =>
  <div className={`UserPresence ${className}`}>
    <header className="UserPresence__header">
      <Link to={`/profiles/${article?.author.username}`}><img className="UserPresence__avatar" src={article?.author?.image} /></Link>
      <div>
        <Link className="UserPresence__username" to={`/profiles/${article?.author?.username}`}>{article?.author?.username}</Link>
        <p className="UserPresence__date">{article?.updatedAt.parseDate().formatDate({ day: "numeric", month: "short", year: "numeric" })}</p>
      </div>
    </header>
    <footer className="UserPresence__footer">
      <button className="UserPresence__favorite"><span>&hearts;</span> favorite article ({article?.favoritesCount})</button>
      <button className="UserPresence__follow"><span className="UserPresence__follow__icon">+</span> follow {article?.author.username}</button>
    </footer>
  </div>