import React from "react";
import { ArticlesFeed } from "../../../../data/ArticleDTOS";
import "./Feed.css";
import { FeedList } from "./FeedList/FeedList";

type FeedProps = {
  articles: ArticlesFeed,
  onPageChanged: (n: number) => void;
}
export const Feed = (props: FeedProps) =>
  <div className="Feed__div">
    <FeedList articles={props.articles.articles} />
    <ul className="Feed__pages">
      {Array.from({ length: props.articles.articlesCount / 20 }, (value, key) => key).map(x => <li className="Feed__page" key={x} onClick={e => { props.onPageChanged(x) }}>{x}</li>)}
    </ul>
  </div>