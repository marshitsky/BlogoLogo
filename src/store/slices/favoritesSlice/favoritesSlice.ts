import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IBlogItem } from "types";

interface IFavoritesState {
  results: IBlogItem[];
}

const initialState: IFavoritesState = {
  results: JSON.parse(localStorage.getItem("favorites") || "[]"),
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addToFavorite: (state, { payload }: PayloadAction<IBlogItem>) => {
      const favoriteUnit = state.results.find((favorive) => favorive.id === payload.id);
      !favoriteUnit && state.results.push(payload);
      localStorage.setItem("favorites", JSON.stringify(state.results));
    },
    removeFromFavorites: (state, { payload }: PayloadAction<IBlogItem>) => {
      state.results = state.results.filter((result) => result.id !== payload.id);
      localStorage.setItem("favorites", JSON.stringify(state.results));
    },
  },
});

export default favoritesSlice.reducer;

export const { addToFavorite, removeFromFavorites } = favoritesSlice.actions;
