import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { spaceFlightNewsAPI } from "services";
import { INews } from "types";

interface INewsState {
  news: INews[];
  isLoading: boolean;
  error: null | string;
}

const initialState: INewsState = {
  news: [],
  isLoading: false,
  error: null,
};

export const fetchNews = createAsyncThunk<
  INews[],
  { page: number; value: string; word: string },
  { rejectValue: string }
>("news/fetchNews", async (params, { rejectWithValue }) => {
  try {
    return await spaceFlightNewsAPI.getAllNews(params.page, params.value, params.word);
  } catch (error) {
    return rejectWithValue("Error");
  }
});

export const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchNews.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(fetchNews.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.news = payload;
    });
    builder.addCase(fetchNews.rejected, (state, { payload }) => {
      if (payload) {
        state.isLoading = false;
        state.error = payload;
      }
    });
  },
});

export default newsSlice.reducer;
