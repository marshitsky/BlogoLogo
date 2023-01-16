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
    navigate(`/${ROUTE.ACCOUNT}`);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ISignInFormTypes>();

  const userAuth = JSON.parse(localStorage.getItem("userInfo")!);
  if (userAuth) {
    userAuth.isAuth = true;
  }

  const onSubmit: SubmitHandler<ISignInFormTypes> = (userInfo) => {
    setErrorMessage(null);
    dispatch(fetchSignInUser(userInfo)).unwrap().then(() => {
      localStorage.length > 0 && localStorage.setItem("userInfo", JSON.stringify(userAuth));
    }).catch((error) => {
      setErrorMessage(error);
    }).then(() => {
      setIsActive(true);
    });
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
      {isActive && !errorMessage && <Modal
        message="Successful"
        handleClick={handleNavigate}
        setIsActive={function (isActive: boolean): void {
          throw new Error("Function not implemented.");
        }}
      />
      }
      {errorMessage && <Modal message={errorMessage} setIsActive={setIsActive} />}
    </StyledSigningForm>
  );
};
