import React from "react";
import { ArticleFeed } from "../../../../../data/ArticleDTOS";
import { Link } from "react-router-dom";
import "./FeedItem.css";

type FeedItemProps = {
  feed: ArticleFeed
};

export const FeedItem = (props: FeedItemProps) =>
  <section className="FeedItem__section">
    <header className="FeedItem__header">
      <Link to={`/profiles/${props.feed.author.username}`}>
        <img alt={props.feed.title} className="FeedItem__img" src={props.feed.author.image} />
      </Link>
      <div>
        <Link to={`/profiles/${props.feed.author.username}`}>{props.feed.author.username}</Link>
        <p>{props.feed.createdAt}</p>
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