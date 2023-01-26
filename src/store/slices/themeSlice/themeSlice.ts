import { createSlice } from "@reduxjs/toolkit";

interface ITheme {
  theme: "light" | "dark";
}

const initialState: ITheme = {
  theme: "dark",
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.theme === "light" ? (state.theme = "dark") : (state.theme = "light");
    },
  },
});

export default themeSlice.reducer;
export const { toggleTheme } = themeSlice.actions;
