import { createSlice } from "@reduxjs/toolkit";

interface IUserState {
  userName: string;
  userSurname: string;
  email: null | string;
  isAuth: boolean;
  id: null | string;
}

const initialState: IUserState = {
  userName: "",
  userSurname: "",
  email: null,
  isAuth: false,
  id: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setNewUser(state, { payload }) {
      state.email = payload.email;
      state.userName = payload.userName;
    },
  },
});

export default userSlice.reducer;
export const { setNewUser } = userSlice.actions;
