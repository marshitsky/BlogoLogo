import { Modal } from "components";
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
    navigate(`/${ROUTE.ACCOUNT}`);
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
      })
      .then(() => {
        setIsActive(true);
      });
  };

  return (
    <StyledSigningUpForm onSubmit={handleSubmit(onSubmit)}>
      <SignUpLabel>Name</SignUpLabel>
      <SignUpInput type="name" placeholder="Your name" {...register("userName", validateName())} />
      {errors.userName && <p>{errors.userName.message}</p>}

      <SignUpLabel>Email</SignUpLabel>
      <SignUpInput type="email" placeholder="Your email" {...register("email", validateEmail())} />
      {errors.email && <p>{errors.email.message}</p>}

      <SignUpLabel>Password</SignUpLabel>
      <SignUpInput
        type="password"
        placeholder="Your password"
        {...register("password", validatePassword())}
      />
      {errors.password && <p>{errors.password.message}</p>}

      <SignUpButton type="submit">Sign Up</SignUpButton>
      <SignUpText>
        Have an account already? <SignUpNavLink to={`/${ROUTE.SIGN_IN}`}>Sign In</SignUpNavLink>
      </SignUpText>
      {isActive && !errorMessage && (
        <Modal message="Authorization successful" handleClick={handleNavigate} />
      )}
      {isActive && errorMessage && <Modal message={errorMessage} handleClick={handleCloseModal} />}
    </StyledSigningUpForm>
  );
};
