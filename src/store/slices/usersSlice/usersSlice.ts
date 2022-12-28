import { createSlice } from "@reduxjs/toolkit";

interface IUserState {
  userName: string;
  userSurname: string;
  email: string;
  isAuth: boolean;
}

const initialState: IUserState = {
  userName: "Miroslav",
  userSurname: "Marshitsky",
  email: "",
  isAuth: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    toggleAuth: (state) => {
      state.isAuth = !state.isAuth;
    },
  },
});

export default userSlice.reducer;
export const { toggleAuth } = userSlice.actions;
