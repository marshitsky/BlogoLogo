import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IArticle } from "types";

interface IFavoritesState {
  results: IArticle[];
}

const initialState: IFavoritesState = {
  results: [],
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addToFavorite: (state, { payload }: PayloadAction<IArticle>) => {
      const result = state.results.find((article) => article.id === payload.id);
      if (!result) state.results.push(payload);
    },
  },
});

export default favoritesSlice.reducer;

export const { addToFavorite } = favoritesSlice.actions;
