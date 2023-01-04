interface IArticle {
  id: string;
  title: string;
  url: string;
  imageUrl: string;
  newsSite: string;
  summary: string;
  publishedAt: string;
  updatedAt: string;
  featured: boolean;
  launches: ILaunch[];
  events: any;
}

interface INews {
  id: string;
  title: string;
  url: string;
  imageUrl: string;
  newsSite: string;
  summary: string;
  publishedAt: string;
  updatedAt: string;
  featured: boolean;
  launches: ILaunch[];
  events: any;
}

interface ILaunch {
  id: string;
  provider: string;
}

export type { IArticle, INews };
