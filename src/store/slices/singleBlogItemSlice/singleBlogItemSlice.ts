import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import { spaceFlightNewsAPI } from "services";
import { IBlogItem } from "types";

interface IArticlesState {
  article: IBlogItem;
  news: IBlogItem;
  isLoading: boolean;
  error: null | string;
}

const initialState: IArticlesState = {
  article: {} as IBlogItem,
  news: {} as IBlogItem,
  isLoading: false,
  error: null,
};

export const fetchArticleById = createAsyncThunk<IBlogItem, string, { rejectValue: string }>(
  "articles/fetchArticles",
  async (params, { rejectWithValue }) => {
    try {
      return await spaceFlightNewsAPI.getArticleById(params);
    } catch (error) {
      const errorMessage = error as AxiosError;
      return rejectWithValue(errorMessage.message);
    }
  },
);

export const fetchNewsById = createAsyncThunk<IBlogItem, string, { rejectValue: string }>(
  "news/fetchSingleNews",
  async (params, { rejectWithValue }) => {
    try {
      return await spaceFlightNewsAPI.getNewsById(params);
    } catch (error) {
      const errorMessage = error as AxiosError;
      return rejectWithValue(errorMessage.message);
    }
  },
);

export const singleArticleSlice = createSlice({
  name: "singleBlogItem",
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

    builder.addCase(fetchNewsById.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(fetchNewsById.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.news = payload;
    });
    builder.addCase(fetchNewsById.rejected, (state, { payload }) => {
      if (payload) {
        state.isLoading = false;
        state.error = payload;
      }
    });
  },
});

export default singleArticleSlice.reducer;
