import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/usersSlice/usersSlice";
import themeReducer from "./slices/themeSlice/themeSlice";
import blogsReducer from "./slices/blogsSlice/blogsSlice";
import singleArticleReducer from "./slices/singleBlogItemSlice/singleBlogItemSlice";
import favoritesReducer from "./slices/favoritesSlice/favoritesSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    theme: themeReducer,
    blogs: blogsReducer,
    singleBlog: singleArticleReducer,
    favorites: favoritesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
