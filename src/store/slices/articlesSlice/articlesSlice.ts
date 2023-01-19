import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { spaceFlightNewsAPI } from "services";
import { IBlogItem } from "types";

interface IArticlesState {
  articles: IBlogItem[];
  isLoading: boolean;
  error: null | string;
  searchParams: ISearchParams;
}

interface ISearchParams {
  searchValue: string | null;
}

const initialState: IArticlesState = {
  articles: [],
  isLoading: false,
  error: null,
  searchParams: {
    searchValue: null,
  },
};

export const fetchArticles = createAsyncThunk<
  IBlogItem[],
  { page: number; value: string; word: string },
  { rejectValue: string }
>("articles/fetchArticles", async (params, { rejectWithValue }) => {
  try {
    return await spaceFlightNewsAPI.getAllBlogs(params.page, params.value, params.word, "articles");
  } catch (error) {
    return rejectWithValue("Error");
  }
});

export const articlesSlice = createSlice({
  name: "articles",
  initialState,
  reducers: {
    setSearchValue: (state, { payload }) => {
      state.searchParams.searchValue = payload.searchValue;
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchArticles.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(fetchArticles.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.articles = payload;
    });
    builder.addCase(fetchArticles.rejected, (state, { payload }) => {
      if (payload) {
        state.isLoading = false;
        state.error = payload;
      }
    });
  },
});

export default articlesSlice.reducer;
export const { setSearchValue } = articlesSlice.actions;
