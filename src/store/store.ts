import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/usersSlice/usersSlice";
import themeReducer from "./slices/themeSlice/themeSlice";
import articlesReducer from "./slices/articlesSlice/articlesSlice";
import singleArticleReducer from "./slices/singleArticleSlice/singleArticleSlice";
import newsReducer from "./slices/newsSlice/newsSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    theme: themeReducer,
    articles: articlesReducer,
    singleArticle: singleArticleReducer,
    news: newsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
