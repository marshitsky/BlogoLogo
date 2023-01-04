import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { FirebaseErrorCode, getFBErrorMessage } from "utils";

interface IUserState {
  name: string;
  email: string | null;
  password: string;
  isAuth: boolean;
  error: null | string;
}

const initialState: IUserState = {
  name: "",
  email: "",
  password: "",
  isAuth: false,
  error: null,
};

export const fetchSignUpUser = createAsyncThunk<
  { userEmail: string | null; name: string },
  { email: string; password: string; userName: string },
  { rejectValue: string }
>("user/signUpUser", async ({ email, password, userName }, { rejectWithValue }) => {
  try {
    const auth = getAuth();
    const userCredential = createUserWithEmailAndPassword(auth, email, password);
    const userEmail = (await userCredential).user.email;
    const name = userName;

    return { userEmail, name };
  } catch (error) {
    const firebaseError = error as { code: FirebaseErrorCode };
    return rejectWithValue(getFBErrorMessage(firebaseError.code));
  }
});

export const fetchSignInUser = createAsyncThunk<
  { userEmail: string | null },
  { email: string; password: string },
  { rejectValue: string }
>("user/sigInUser", async ({ email, password }, { rejectWithValue }) => {
  try {
    const auth = getAuth();
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const userEmail = userCredential.user.email;

    return { userEmail };
  } catch (error) {
    const firebaseError = error as { code: FirebaseErrorCode };
    return rejectWithValue(getFBErrorMessage(firebaseError.code));
  }
});

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    getUserName: (state, { payload }: PayloadAction<string>) => {
      state.name = payload;
      state.email = payload;
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchSignUpUser.pending, (state) => {
      state.isAuth = false;
      state.error = null;
    });
    builder.addCase(fetchSignUpUser.fulfilled, (state, { payload }) => {
      state.isAuth = true;
      state.error = null;
      state.name = payload.name;
      state.email = payload.userEmail;
    });
    builder.addCase(fetchSignUpUser.rejected, (state, { payload }) => {
      if (payload) {
        state.isAuth = false;
        state.error = payload;
      }
    });

    builder.addCase(fetchSignInUser.pending, (state) => {
      state.isAuth = false;
      state.error = null;
    });
    builder.addCase(fetchSignInUser.fulfilled, (state, { payload }) => {
      state.isAuth = true;
      state.error = null;
      state.email = payload.userEmail;
    });
    builder.addCase(fetchSignInUser.rejected, (state, { payload }) => {
      if (payload) {
        state.isAuth = false;
        state.error = payload;
      }
    });
  },
});

export default userSlice.reducer;
export const { getUserName } = userSlice.actions;
