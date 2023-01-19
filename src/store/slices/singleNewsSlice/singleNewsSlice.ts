import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { spaceFlightNewsAPI } from "services";
import { IBlogItem } from "types";

interface ISingleNewsState {
  news: IBlogItem;
  isLoading: boolean;
  error: null | string;
}

export const fetchSingleNews = createAsyncThunk<IBlogItem, string, { rejectValue: string }>(
  "news/fetchSingleNews",
  async (params, { rejectWithValue }) => {
    try {
      return await spaceFlightNewsAPI.getNewsById(params);
    } catch (error) {
      return rejectWithValue("Error");
    }
  },
);

const initialState: ISingleNewsState = {
  news: {} as IBlogItem,
  isLoading: false,
  error: null,
};

const singleNewsSlice = createSlice({
  name: "singleNews",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchSingleNews.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(fetchSingleNews.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.news = payload;
    });
    builder.addCase(fetchSingleNews.rejected, (state, { payload }) => {
      if (payload) {
        state.isLoading = false;
        state.error = payload;
      }
    });
  },
});

export default singleNewsSlice.reducer;
