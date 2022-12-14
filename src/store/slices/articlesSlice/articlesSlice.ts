import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { spaceFlightNewsAPI } from "services";
import { IArticle } from "types";

interface IArticlesState {
  articles: IArticle[];
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

export const fetchArticles = createAsyncThunk<IArticle[], number, { rejectValue: string }>(
  "articles/fetchArticles",
  async (params, { rejectWithValue }) => {
    try {
      return await spaceFlightNewsAPI.getAllArticles(params);
    } catch (error) {
      return rejectWithValue("Error");
    }
  },
);

export const fetchSearch = createAsyncThunk<IArticle[], string, { rejectValue: string }>(
  "articles/fetchSearch",
  async (word, { rejectWithValue }) => {
    try {
      return await spaceFlightNewsAPI.getSearch(word);
    } catch (error) {
      return rejectWithValue("Error");
    }
  },
);

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

    builder.addCase(fetchSearch.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(fetchSearch.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.articles = payload;
    });
    builder.addCase(fetchSearch.rejected, (state, { payload }) => {
      if (payload) {
        state.isLoading = false;
        state.error = payload;
      }
    });
  },
});

export default articlesSlice.reducer;
export const { setSearchValue } = articlesSlice.actions;
