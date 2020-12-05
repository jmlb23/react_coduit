import React from "react";
import { ArticleFeed } from "../../../../../data/ArticleDTOS";
import { Link } from "react-router-dom";
import "./FeedItem.css";
import { Favorite } from "../../../../Article/Components/Favorite/Favorite";


type FeedItemProps = {
  feed: ArticleFeed
};

export const FeedItem = (props: FeedItemProps) =>
  <section className="FeedItem__section">
    <header className="FeedItem__header">
      <Link className="FeedItem__img-inline" to={`/profiles/${props.feed.author.username}`}>
        <img alt={props.feed.title} className="FeedItem__img" src={props.feed.author.image} />
      </Link>
      <div className="FeedItem__User">
        <div>
          <Link to={`/profiles/${props.feed.author.username}`}>{props.feed.author.username}</Link>
          <p className="FeedItem__creation">{props.feed.createdAt}</p>
        </div>
        <div className="FeedItem__fav">
          <Favorite favCount={props.feed.favoritesCount} />
        </div>
      </div>
    </header>
    <div>
      <p>{props.feed.title}</p>
      <p>{props.feed.description}</p>
    </div>
    <footer>
      <Link to={`/articles/${props.feed.slug}`}>see more</Link>
    </footer>
    <hr />
  </section>