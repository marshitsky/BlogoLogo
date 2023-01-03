import { store } from "./store";
import { useAppDispatch, useAppSelector } from "./hooks/hooks";
import { setTheme } from "./selectors/themeSelector";
import { getUserInfo } from "./selectors/userSelector";
import { toggleTheme } from "./slices/themeSlice/themeSlice";
import { getAllArticles } from "./selectors/articleSselector";
import { getArticleById } from "./selectors/singleArticleSelector";
import { fetchArticleById } from "./slices/singleArticleSlice/singleArticleSlice";
import { fetchArticles } from "./slices/articlesSlice/articlesSlice";
import { fetchNews } from "./slices/newsSlice/newsSlice";
import { getAllNews } from "./selectors/newsSelector";
import { fetchSingleNews } from "./slices/singleNewsSlice/singleNewsSlice";
import { getNewsById } from "./selectors/singleNewsSelector";

export {
  store,
  useAppDispatch,
  useAppSelector,
  setTheme,
  getUserInfo,
  toggleTheme,
  getAllArticles,
  getArticleById,
  fetchArticleById,
  fetchArticles,
  fetchNews,
  getAllNews,
  fetchSingleNews,
  getNewsById,
};
