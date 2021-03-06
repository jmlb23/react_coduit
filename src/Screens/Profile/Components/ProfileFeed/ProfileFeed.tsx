import React, { useEffect, useState } from "react";
import { apiClient } from "../../../../data/Api";
import { ArticleFeed } from "../../../../data/ArticleDTOS";
import { isOther } from "../../../../data/Error";
import { FeedList } from "../../../Home/Components/Feed/FeedList/FeedList";
import "./ProfileFeed.css";


type ProfileFeedProps = {
  isFavFeed: Boolean
  username: string | undefined
}

export const ProfileFeed = (props: ProfileFeedProps) => {
  const [isFav, setIsFav] = useState(props.isFavFeed)
  const [articles, setArticles] = useState<ArticleFeed[]>([])


  useEffect(() => {
    let isMounted = true;

    apiClient.getArticles(0, undefined, isFav ? props.username : undefined, isFav ? undefined : props.username).then(x => isMounted ? setArticles(isOther(x) ? x.articles : []) : null);

    return (function () {
      isMounted = false;
    })

  }, [isFav, props.username]);

  return <footer>
    <ul className="ProfileFeed__feed-selector">
      <li className="ProfileFeed__feed__item" onClick={_ => setIsFav(false)} >My articles</li>
      <li className="ProfileFeed__feed__item" onClick={_ => setIsFav(true)} >Favorited articles</li>
    </ul>
    <hr className="ProfileFeed__separator" />
    <FeedList articles={articles} />
  </footer>
}