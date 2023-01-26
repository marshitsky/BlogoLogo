import { Modal } from "components";
import { ErrorMessage } from "components/SignInForm/styles";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { ROUTE } from "router";
import { fetchSignUpUser, useAppDispatch } from "store";
import { validateEmail, validateName, validatePassword } from "utils";
import {
  SignUpButton,
  SignUpInput,
  SignUpLabel,
  SignUpNavLink,
  SignUpText,
  StyledSigningUpForm,
} from "./styles";

export interface ISignInFormTypes {
  email: string;
  password: string;
  userName: string;
  confirmPassword: string;
}

export interface IUserInfoToLS {
  id: number;
  name: string;
  email: string;
  isAuth: boolean;
}

export const SignUpForm = () => {
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const dispatch = useAppDispatch();
  const [isActive, setIsActive] = useState(false);

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
    watch,
    getValues,
    reset,
  } = useForm<ISignInFormTypes>();

  const onSubmit: SubmitHandler<ISignInFormTypes> = (userInfo) => {
    const userInfoToLS: IUserInfoToLS = {
      id: Math.floor(Math.random() * 10000) + 1,
      name: userInfo.userName,
      email: userInfo.email,
      isAuth: true,
    };

    setErrorMessage(null);

    dispatch(fetchSignUpUser(userInfo))
      .unwrap()
      .then(() => {
        localStorage.setItem("userInfo", JSON.stringify(userInfoToLS));
      })
      .catch((error) => {
        setErrorMessage(error);
        reset();
        watch(error);
      })
      .then(() => {
        setIsActive(true);
      });
  };

  return (
    <StyledSigningUpForm onSubmit={handleSubmit(onSubmit)}>
      <SignUpLabel>Name</SignUpLabel>
      <SignUpInput type="name" placeholder="Your name" {...register("userName", validateName())} />
      {errors.userName && <ErrorMessage>{errors.userName.message}</ErrorMessage>}

      <SignUpLabel>Email</SignUpLabel>
      <SignUpInput type="email" placeholder="Your email" {...register("email", validateEmail())} />
      {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}

      <SignUpLabel>Password</SignUpLabel>
      <SignUpInput
        type="password"
        placeholder="Your password"
        {...register("password", validatePassword())}
      />
      {errors.password && <ErrorMessage>{errors.password.message}</ErrorMessage>}

      <SignUpLabel>Confirm assword</SignUpLabel>
      <SignUpInput
        type="password"
        placeholder="Confirm password"
        {...register("confirmPassword", { required: true })}
      />
      {watch("confirmPassword") !== watch("password") && getValues("confirmPassword") ? (
        <ErrorMessage>*password not match</ErrorMessage>
      ) : null}
      {errors.password && <ErrorMessage>{errors.password.message}</ErrorMessage>}

      <SignUpButton type="submit">Sign Up</SignUpButton>
      <SignUpText>
        Have an account already?{" "}
        <SignUpNavLink to={ROUTE.HOME + ROUTE.SIGN_IN}>Sign In</SignUpNavLink>
      </SignUpText>
      {isActive && !errorMessage && (
        <Modal message="Authorization successful" handleClick={handleNavigate} />
      )}
      {isActive && errorMessage && <Modal message={errorMessage} handleClick={handleCloseModal} />}
    </StyledSigningUpForm>
  );
};
