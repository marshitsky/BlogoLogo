import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { FirebaseErrorCode, getFBErrorMessage } from "utils";

interface IUserState {
  name: string;
  email: string | null;
  password: string;
  isAuth: boolean;
  id: null | string;
  error: null | string;
}

const initialState: IUserState = {
  name: "",
  email: "",
  password: "",
  isAuth: false,
  id: "",
  error: null,
};

export const signUpUser = createAsyncThunk<
  { userEmail: string | null; name: string },
  { email: string; password: string; userName: string },
  { rejectValue: string }
>("user/signUpUser", async ({ email, password, userName }, { rejectWithValue }) => {
  try {
    const auth = getAuth();
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const userEmail = userCredential.user.email as string;
    const name = userName;

    return { userEmail, name };
  } catch (error) {
    const firebaseError = error as { code: FirebaseErrorCode };
    return rejectWithValue(getFBErrorMessage(firebaseError.code));
  }
});

export const signInUser = createAsyncThunk<
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
    getUserName: (state, { payload }) => {
      if (payload) {
        return (state.name = payload);
      }
    },
  },
  extraReducers(builder) {
    builder.addCase(signUpUser.pending, (state) => {
      state.isAuth = false;
      state.error = null;
    });
    builder.addCase(signUpUser.fulfilled, (state) => {
      state.isAuth = true;
      state.error = null;
    });
    builder.addCase(signUpUser.rejected, (state, { payload }) => {
      if (payload) {
        state.isAuth = false;
        state.error = payload;
      }
    });

    builder.addCase(signInUser.pending, (state) => {
      state.isAuth = false;
      state.error = null;
    });
    builder.addCase(signInUser.fulfilled, (state) => {
      state.isAuth = true;
      state.error = null;
    });
    builder.addCase(signInUser.rejected, (state, { payload }) => {
      if (payload) {
        state.isAuth = false;
        state.error = payload;
      }
    });
  },
});

export default userSlice.reducer;
