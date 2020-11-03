import { Profile } from "./ProfileDTOS";

class ArticleFeed {
  constructor(public slug: string, public title: string,
    public description: string, public body: string,
    public tagList: string[], public createdAt: string,
    public updatedAt: string, public favorited: boolean,
    public favoritesCount: number, public author: Profile) {
  }
}

class ArticlesFeed {
  constructor(public articles: ArticleFeed[], public articlesCount: number) { }
}


class Article {
  constructor(public title: string,
    public description: string, public body: string,
    public tagList?: string[]) {
  }
}

export { ArticlesFeed, Article, ArticleFeed }