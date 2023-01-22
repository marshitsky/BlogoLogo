import { store } from "./store";
import { useAppDispatch, useAppSelector } from "./hooks/hooks";
import { setTheme } from "./selectors/themeSelector";
import { getUserInfo } from "./selectors/userSelector";
import { toggleTheme } from "./slices/themeSlice/themeSlice";
import { getAllArticles } from "./selectors/blogsSelector";
import { getArticleById } from "./selectors/blogByIdSelector";
import { fetchArticleById } from "./slices/singleBlogItemSlice/singleBlogItemSlice";
import { fetchNewsById } from "./slices/singleBlogItemSlice/singleBlogItemSlice";
import { fetchArticles } from "./slices/blogsSlice/blogsSlice";
import { fetchNews } from "./slices/blogsSlice/blogsSlice";
import { fetchSignInUser } from "./slices/usersSlice/usersSlice";
import { fetchSignUpUser } from "./slices/usersSlice/usersSlice";
import { getSearch } from "./selectors/searchSelector";
import { setSearchValue } from "./slices/blogsSlice/blogsSlice";
import { logOut } from "./slices/usersSlice/usersSlice";
import { addToFavorite } from "./slices/favoritesSlice/favoritesSlice";
import { removeFromFavorites } from "./slices/favoritesSlice/favoritesSlice";
import { getFavotites } from "./selectors/favoritesSelector";

export {
  store,
  useAppDispatch,
  useAppSelector,
  setTheme,
  getUserInfo,
  toggleTheme,
  getAllArticles,
  getArticleById,
  fetchNewsById,
  fetchArticleById,
  fetchArticles,
  fetchNews,
  fetchSignInUser,
  fetchSignUpUser,
  getSearch,
  setSearchValue,
  logOut,
  addToFavorite,
  removeFromFavorites,
  getFavotites,
};
