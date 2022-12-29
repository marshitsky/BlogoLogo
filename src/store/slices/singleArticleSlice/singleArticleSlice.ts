import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { spaceFlightNewsAPI } from "services";
import { IArticle } from "types";

interface IArticlesState {
  article: IArticle;
  isLoading: boolean;
  error: null | string;
}

export const fetchArticleById = createAsyncThunk<IArticle, string, { rejectValue: string }>(
  "articles/fetchArticles",
  async (params, { rejectWithValue }) => {
    try {
      return await spaceFlightNewsAPI.getArticleById(params);
    } catch (error) {
      return rejectWithValue("Error");
    }
  },
);

const initialState: IArticlesState = {
  article: {} as IArticle,
  isLoading: false,
  error: null,
};

export const singleArticleSlice = createSlice({
  name: "articleById",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchArticleById.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(fetchArticleById.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.article = payload;
    });
    builder.addCase(fetchArticleById.rejected, (state, { payload }) => {
      if (payload) {
        state.isLoading = false;
        state.error = payload;
      }
    });
  },
});

export default singleArticleSlice.reducer;
