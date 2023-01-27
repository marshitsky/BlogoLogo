import axios from "axios";
import { IBlogItem } from "types";

class SpaceFlightNewsAPI {
  private readonly BASE_URL = process.env.REACT_APP_DATABASE_URL;
  private readonly ENDPOINTS = {
    articles: "articles",
    blogs: "blogs",
  };
  private readonly API = axios.create({
    baseURL: this.BASE_URL,
  });

  public async getAllBlogs(page: number, value: string, word: string, endpoint: string) {
    const params = {
      _start: page,
      _limit: 12,
      _sort: value,
      _title_contains: word,
    };
    const { data } = await this.API.get<IBlogItem[]>(this.BASE_URL + "/" + endpoint, { params });
    return data;
  }

  public async getArticleById(id: string) {
    const { data } = await this.API.get<IBlogItem>(`${this.ENDPOINTS.articles}/${id}`);
    return data;
  }

  public async getNewsById(id: string) {
    const { data } = await this.API.get<IBlogItem>(`${this.ENDPOINTS.blogs}/${id}`);
    return data;
  }
}

export const spaceFlightNewsAPI = new SpaceFlightNewsAPI();
