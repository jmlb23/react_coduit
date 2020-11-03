import React, { Suspense, useState } from "react";
import { apiClient } from "../../data/Api";
import { isOther } from "../../data/Error";
import { useAsync } from "../../Hooks";
import { Feed } from "./Components/Feed/Feed";
import { Tags } from "./Components/Tags/Tags";
import "./Home.css";

export const Home = () => {

  const [page, setPage] = useState(0);

  const articles = useAsync(() => apiClient.getArticles(page).then(x => isOther(x) ? x : { articles: [], articlesCount: 0 }), { articles: [], articlesCount: 0 });

  const tags = useAsync(() => apiClient.getTags().then(x => isOther(x) ? x : []), []);

  return <div className="Home__div-parent">
    <Feed articles={articles} onPageChanged={(x) => { console.log(x); setPage(x) }} />
    <Tags tags={tags} />
  </div>;
}