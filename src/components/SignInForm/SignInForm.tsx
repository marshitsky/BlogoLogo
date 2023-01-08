import { SubmitHandler, useForm } from "react-hook-form";
import { generatePath, useNavigate } from "react-router-dom";
import {
  SignInInput,
  SignInLabel,
  SignInText,
  SignInButton,
  StyledSigningForm,
  StyledLink,
} from "./styles";
import { ROUTE } from "router";
import { fetchSignInUser, useAppDispatch } from "store";

export interface ISignInFormTypes {
  email: string;
  password: string;
}

export const SignInForm = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ISignInFormTypes>();

  const onSubmit: SubmitHandler<ISignInFormTypes> = (userInfo) => {
    dispatch(fetchSignInUser(userInfo)).then(() =>
      navigate(generatePath("/:path", { path: ROUTE.ACCOUNT })),
    );
  };

  return (
    <StyledSigningForm onSubmit={handleSubmit(onSubmit)}>
      <SignInLabel>Email</SignInLabel>
      <SignInInput
        type="email"
        placeholder="Your email"
        {...register("email", {
          required: "* email is required",
          maxLength: { value: 35, message: "* max 35 characters" },
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
      <StyledLink to={generatePath("/:path", { path: ROUTE.RESET_PASSWORD })}>
        Forgot password?
      </StyledLink>
      <SignInButton type="submit">Sign in</SignInButton>
      <SignInText>
        Don’t have an account?{" "}
        <StyledLink to={generatePath("/:path", { path: ROUTE.SIGN_UP })}>Sign Up</StyledLink>
      </SignInText>
    </StyledSigningForm>
  );
};
