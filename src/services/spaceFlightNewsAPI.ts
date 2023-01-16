import axios from "axios";
import { IArticle, INews } from "types";

class SpaceFlightNewsAPI {
  private readonly BASE_URL = process.env.REACT_APP_DATABASE_URL;
  private readonly ENDPOINTS = {
    articles: "articles",
    blogs: "blogs",
  };
  private readonly API = axios.create({
    baseURL: this.BASE_URL,
  });

  public async getAllArticles(page: number, value: string, word: string) {
    const params = {
      _start: page,
      _limit: 12,
      _sort: value,
      _title_contains: word,
    };
    const { data } = await this.API.get<IArticle[]>(this.ENDPOINTS.articles, { params });
    return data;
  }

  public async getArticleById(id: string) {
    const { data } = await this.API.get<IArticle>(`${this.ENDPOINTS.articles}/${id}`);
    return data;
  }

  public async getAllNews(page: number, value: string, word: string) {
    const params = {
      _start: page,
      _limit: 12,
      _sort: value,
      _title_contains: word,
    };
    const { data } = await this.API.get<INews[]>(this.ENDPOINTS.blogs, { params });
    return data;
  }

  public async getNewsById(id: string) {
    const { data } = await this.API.get<IArticle>(`${this.ENDPOINTS.blogs}/${id}`);
    return data;
  }
}

export const spaceFlightNewsAPI = new SpaceFlightNewsAPI();
