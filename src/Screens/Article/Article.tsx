import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { isPropertySignature } from "typescript";
import { apiClient } from "../../data/Api";
import { ArticleFeed } from "../../data/ArticleDTOS";
import { Comment } from "../../data/CommentDTOS";
import { isOther } from "../../data/Error";
import "./Article.css";
import { Comments } from "./Components/Comments/Comments";
import { UserPresence } from "./Components/UserPresence/UserPresence";

export const Article = () => {
  const { id } = useParams<{ id: string }>();
  const [article, setArticle] = useState<ArticleFeed>()
  const [comments, setComments] = useState<Comment[]>()

  useEffect(() => {
    let isMounted = true
    apiClient.getArticle(id).then(x => isOther(x) ? (isMounted ? setArticle(x) : undefined) : undefined).catch(console.error)
    return () => {
      isMounted = false
    }
  }, [id])


  useEffect(() => {
    let isMounted = true
    apiClient.getComments(id).then(x => isOther(x) ? (isMounted ? setComments(x) : undefined) : undefined).catch(console.error)
    return () => {
      isMounted = false
    }
  }, [id])


  return <>
    <header className="Article__header">
      <h1>{article?.title}</h1>
      <UserPresence className="Article__header__UserPresence" article={article ?? null} />
    </header>
    <footer className="Article__footer">
      <div>
        <p>{article?.body}</p>
        <ul className="Article__tags">
          {article?.tagList?.map(x => <li className="Article__tags__item">{x}</li>)}
        </ul>
      </div>
      <hr />
      <UserPresence className="Article__header__UserPresence" article={article ?? null} />
      <Comments comments={comments ?? []} />
    </footer>
  </>
}