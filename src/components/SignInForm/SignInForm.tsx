import { SubmitHandler, useForm } from "react-hook-form";
import { NavLink } from "react-router-dom";
import {
  SignInInput,
  SignInLabel,
  SignInText,
  SignInButton,
  StyledSigningForm,
  SignInNavLink,
} from "./styles";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { ROUTE } from "router";
import { setNewUser, useAppDispatch } from "store";

export interface ISignInFormTypes {
  email: string;
  password: string;
}

export const SignInForm = () => {
  const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ISignInFormTypes>();

  const onSubmit: SubmitHandler<ISignInFormTypes> = ({ email, password }: ISignInFormTypes) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        dispatch(
          setNewUser({
            email: user.email,
            id: user.uid,
          }),
        );
      })
      .catch((error) => {
        return "Error";
      });
    reset();
  };

  return (
    <StyledSigningForm onSubmit={handleSubmit(onSubmit)}>
      <SignInLabel>Email</SignInLabel>
      <SignInInput
        type="email"
        placeholder="Your email"
        {...register("email", {
          required: "* email is required",
          maxLength: { value: 25, message: "* max 15 characters" },
          pattern: { value: /^(.+)@(.+)$/, message: "Enter a valid email" },
        })}
      />
      {errors.email && <p>{errors.email.message}</p>}
      <SignInLabel>Password</SignInLabel>
      <SignInInput
        type="password"
        placeholder="Your password"
        {...register("password", {
          required: "* password is required",
          maxLength: { value: 25, message: "* max 15 characters" },
          minLength: {
            value: 6,
            message: "min 6 characters",
          },
        })}
      />
      {errors.password && <p>{errors.password.message}</p>}
      <NavLink to={"../" + ROUTE.RESET_PASSWORD}>Forgot password?</NavLink>
      <SignInButton type="submit">Sign in</SignInButton>
      <SignInText>
        Don’t have an account? <SignInNavLink to={"../" + ROUTE.SIGN_UP}>Sign Up</SignInNavLink>
      </SignInText>
    </StyledSigningForm>
  );
};
