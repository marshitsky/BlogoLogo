export type FirebaseErrorCode =
  | "auth/email-already-in-use"
  | "auth/wrong-password"
  | "auth/user-not-found";

export enum FirebaseErrorMessage {
  EMAIL_EXISTS = "Email already exists!",
  USER_NOT_FOUND = "User not found!",
  WRONG_PASSWORD = "Wrong password!",
  UNKNOWN_ERROR = "Unknown error. Please, reload the page!",
}

export const getFBErrorMessage = (code: FirebaseErrorCode) => {
  switch (code) {
    case "auth/email-already-in-use":
      return FirebaseErrorMessage.EMAIL_EXISTS;
    case "auth/wrong-password":
      return FirebaseErrorMessage.WRONG_PASSWORD;
    case "auth/user-not-found":
      return FirebaseErrorMessage.USER_NOT_FOUND;
    default:
      return FirebaseErrorMessage.UNKNOWN_ERROR;
  }
};
