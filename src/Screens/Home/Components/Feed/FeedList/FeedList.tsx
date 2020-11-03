import React from "react"
import { ArticleFeed } from "../../../../../data/ArticleDTOS"
import { FeedItem } from "../FeedItem/FeedItem"


type FeedListProps = {
  articles: ArticleFeed[]
}

export const FeedList = (props: FeedListProps) =>
  <>
    {props.articles.map(x => <FeedItem feed={x} key={x.slug} />)}
  </>