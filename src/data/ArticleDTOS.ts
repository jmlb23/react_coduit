import { Profile } from "./ProfileDTOS";

type ArticleFeed = {
  title: string;
  slug: string;
  body: string;
  createdAt: string;
  updatedAt: string;
  tagList: string[];
  description: string;
  author: Profile;
  favorited: boolean;
  favoritesCount: number;
}

type ArticlesFeed = {
  articles: ArticleFeed[];
  articlesCount: number;
}


type Article = {
  title: string;
  description: string;
  body: string
  tagList?: string[];
}

export type { ArticlesFeed, Article, ArticleFeed };