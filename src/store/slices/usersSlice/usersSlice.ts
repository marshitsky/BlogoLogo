import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
} from "firebase/auth";
import { FirebaseErrorCode, FirebaseErrorMessage, getFBErrorMessage } from "utils";

interface IUserState {
  name: string;
  email: string | null;
  password: string;
  isAuth: boolean;
  error: null | string;
}

interface IUserNameEmail {
  userEmail: string | null;
  name: string;
}

interface IUserEmail {
  userEmail: string | null;
}

interface ICreateFirebaseAuth {
  email: string;
  password: string;
  userName: string;
}

interface ISignInFirebaseAuth {
  email: string;
  password: string;
}

const userName = JSON.parse(localStorage.getItem("userInfo")!);

const initialState: IUserState = {
  name: userName !== null && userName.name,
  email: userName !== null && userName.email,
  password: "",
  isAuth: userName !== null && userName.isAuth,
  error: null,
};

export const fetchSignUpUser = createAsyncThunk<
  IUserNameEmail,
  ICreateFirebaseAuth,
  { rejectValue: FirebaseErrorMessage }
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
  IUserEmail,
  ISignInFirebaseAuth,
  { rejectValue: FirebaseErrorMessage }
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

export const resetPassword = createAsyncThunk<
  void,
  { userEmail: string },
  { rejectValue: FirebaseErrorMessage }
>("user/resetPassword", async ({ userEmail }, { rejectWithValue }) => {
  try {
    const auth = getAuth();
    await sendPasswordResetEmail(auth, userEmail);
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
    logOut: (state, { payload }: PayloadAction<boolean>) => {
      state.isAuth = payload;
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

    builder.addCase(resetPassword.pending, (state) => {
      state.error = null;
    });
    builder.addCase(resetPassword.fulfilled, (state) => {
      state.error = null;
    });
    builder.addCase(resetPassword.rejected, (state, { payload }) => {
      if (payload) {
        state.error = payload;
      }
    });
  },
});

export default userSlice.reducer;
export const { getUserName } = userSlice.actions;
export const { logOut } = userSlice.actions;
