interface IBlogItem {
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

interface IOption {
  value: string;
  label: string;
}

export type { IBlogItem, IOption };
