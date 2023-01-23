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
import { useState } from "react";
import { Modal } from "components";
import { validateEmail, validatePassword } from "utils";

export interface ISignInFormTypes {
  email: string;
  password: string;
}

export const SignInForm = () => {
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [isActive, setIsActive] = useState(false);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(ROUTE.HOME + ROUTE.ACCOUNT);
  };

  const handleCloseModal = () => {
    setIsActive(false);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ISignInFormTypes>();

  const userAuth = JSON.parse(localStorage.getItem("userInfo")!);
  if (userAuth) {
    userAuth.isAuth = true;
  }

  const onSubmit: SubmitHandler<ISignInFormTypes> = (userInfo) => {
    setErrorMessage(null);
    dispatch(fetchSignInUser(userInfo))
      .unwrap()
      .then(() => {
        localStorage.length > 0 && localStorage.setItem("userInfo", JSON.stringify(userAuth));
      })
      .catch((error) => {
        setErrorMessage(error);
        reset();
      })
      .then(() => {
        setIsActive(true);
      });
  };

  return (
    <StyledSigningForm onSubmit={handleSubmit(onSubmit)}>
      <SignInLabel>Email</SignInLabel>
      <SignInInput type="email" placeholder="Your email" {...register("email", validateEmail())} />
      {errors.email && <p>{errors.email.message}</p>}

      <SignInLabel>Password</SignInLabel>
      <SignInInput
        type="password"
        placeholder="Your password"
        {...register("password", validatePassword())}
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
      {isActive && !errorMessage && <Modal message="Successful" handleClick={handleNavigate} />}
      {isActive && errorMessage && <Modal message={errorMessage} handleClick={handleCloseModal} />}
    </StyledSigningForm>
  );
};
