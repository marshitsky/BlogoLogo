import { createBrowserRouter, createRoutesFromElements, Navigate, Route } from "react-router-dom";
import { MainTemplate, RequireAuth } from "components";
import {
  AccountPage,
  ArticlePage,
  FavoritesPage,
  HomePage,
  NotFoundPage,
  ResetPasswordPage,
  SearchPage,
  SignInPage,
  SignUpPage,
  NewsPage,
} from "pages";
import { ROUTE } from "./routes";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path={ROUTE.HOME} element={<MainTemplate />}>
      <Route index element={<HomePage />} />
      <Route path={ROUTE.CONTENT} element={<ArticlePage />} />
      <Route path={ROUTE.NEWS_CONTENT} element={<NewsPage />} />
      <Route path={ROUTE.SEARCH} element={<SearchPage />} />
      <Route path={ROUTE.SIGN_IN} element={<SignInPage />} />
      <Route path={ROUTE.SIGN_UP} element={<SignUpPage />} />
      <Route path={ROUTE.RESET_PASSWORD} element={<ResetPasswordPage />} />
      <Route path={ROUTE.NOT_FOUND} element={<NotFoundPage />} />
      <Route path="*" element={<Navigate replace to={ROUTE.HOME} />} />
      <Route element={<RequireAuth />}>
        <Route path={ROUTE.ACCOUNT} element={<AccountPage />} />
        <Route path={ROUTE.FAVORITES} element={<FavoritesPage />} />
      </Route>
    </Route>,
  ),
  { basename: "/blogologo" },
);
