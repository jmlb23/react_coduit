import React, { useEffect, useState } from "react";
import { apiClient } from "../../data/Api";
import { ArticlesFeed } from "../../data/ArticleDTOS";
import { isOther } from "../../data/Error";
import { Feed } from "./Components/Feed/Feed";
import { Tags } from "./Components/Tags/Tags";
import "./Home.css";

export const Home = () => {

  const [page, setPage] = useState(0);
  const [tagSelected, setTagSelected] = useState<string | undefined>(undefined);

  const [articles, setArticles] = useState<ArticlesFeed>({ articles: [], articlesCount: 0 })
  const [tags, setTags] = useState<string[]>([])


  useEffect(() => {
    apiClient.getArticles(page, tagSelected).then(x => isOther(x) ? x : { articles: [], articlesCount: 0 }).then(setArticles)
  }, [page, tagSelected])


  useEffect(() => {
    apiClient.getTags().then(x => isOther(x) ? x : []).then(setTags)
  }, [])

  return <div className="Home__div-parent">
    <Feed articles={articles} onPageChanged={setPage} />
    <Tags tags={tags} onTagSelected={setTagSelected} />
  </div>;
}