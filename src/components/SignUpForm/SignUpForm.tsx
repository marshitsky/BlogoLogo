import { Modal } from "components";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { ROUTE } from "router";
import { fetchSignUpUser, useAppDispatch } from "store";
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

  const {
    register,
    handleSubmit,
    formState: { errors },
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
      })
      .then(() => {
        setIsActive(true);
      });
  };

  return (
    <StyledSigningUpForm onSubmit={handleSubmit(onSubmit)}>
      <SignUpLabel>Name</SignUpLabel>
      <SignUpInput
        type="name"
        placeholder="Your name"
        {...register("userName", {
          required: "Name is required",
          maxLength: {
            value: 20,
            message: "Too long",
          },
        })}
      />
      {errors.userName && <p>{errors.userName.message}</p>}
      <SignUpLabel>Email</SignUpLabel>
      <SignUpInput
        type="email"
        placeholder="Your email"
        {...register("email", {
          required: "Email is required",
          pattern: { value: /^(.+)@(.+)$/, message: "Enter a valid email" },
        })}
      />
      {errors.email && <p>{errors.email.message}</p>}
      <SignUpLabel>Password</SignUpLabel>
      <SignUpInput
        type="password"
        placeholder="Your password"
        {...register("password", {
          required: "Password is required",
          minLength: {
            value: 6,
            message: "Password must be at least 6 characters",
          },
        })}
      />
      {errors.password && <p>{errors.password.message}</p>}
      <SignUpButton type="submit">Sign Up</SignUpButton>
      <SignUpText>
        Have an account already? <SignUpNavLink to={`/${ROUTE.SIGN_IN}`}>Sign In</SignUpNavLink>
      </SignUpText>
      {isActive && !errorMessage && (
        <Modal
          message="Authorization successful"
          handleClick={handleNavigate}
          setIsActive={function (isActive: boolean): void {
            throw new Error("Function not implemented.");
          }}
        />
      )}
      {errorMessage && <Modal message={errorMessage} setIsActive={setIsActive} />}
    </StyledSigningUpForm>
  );
};
