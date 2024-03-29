import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import {
  SignInInput,
  SignInLabel,
  SignInText,
  SignInButton,
  StyledSigningForm,
  StyledLink,
  ErrorMessage,
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
  const [isActiveModal, setIsActiveModal] = useState(false);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(ROUTE.HOME + ROUTE.ACCOUNT);
  };

  const handleCloseModal = () => {
    setIsActiveModal(false);
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
        setIsActiveModal(true);
      });
  };

  return (
    <StyledSigningForm onSubmit={handleSubmit(onSubmit)}>
      <SignInLabel>Email</SignInLabel>
      <SignInInput type="email" placeholder="Your email" {...register("email", validateEmail())} />
      {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}

      <SignInLabel>Password</SignInLabel>
      <SignInInput
        type="password"
        placeholder="Your password"
        {...register("password", validatePassword())}
      />
      {errors.password && <ErrorMessage>{errors.password.message}</ErrorMessage>}

      <StyledLink to={ROUTE.HOME + ROUTE.RESET_PASSWORD}>Forgot password?</StyledLink>
      <SignInButton type="submit">Sign in</SignInButton>
      <SignInText>
        Don’t have an account? <StyledLink to={ROUTE.HOME + ROUTE.SIGN_UP}>Sign Up</StyledLink>
      </SignInText>
      {isActiveModal && !errorMessage && (
        <Modal message="Successful" handleClick={handleNavigate} />
      )}
      {isActiveModal && errorMessage && (
        <Modal message={errorMessage} handleClick={handleCloseModal} />
      )}
    </StyledSigningForm>
  );
};
