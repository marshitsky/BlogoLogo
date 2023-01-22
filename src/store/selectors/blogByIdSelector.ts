import { RootState } from "store/store";

export const getArticleById = (state: RootState) => state.singleBlog;
