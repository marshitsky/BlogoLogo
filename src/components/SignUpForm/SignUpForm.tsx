import { ISignInFormTypes } from "components/SignInForm/SignInForm";
import React from "react";
import { useForm } from "react-hook-form";
import { ROUTE } from "router";
import {
  SignUpButton,
  SignUpInput,
  SignUpLabel,
  SignUpNavLink,
  SignUpText,
  StyledSigningUpForm,
} from "./styles";

export const SignUpForm = () => {
  const {
    register,
    // reset,
    formState: { errors },
  } = useForm<ISignInFormTypes>({
    mode: "onSubmit",
    reValidateMode: "onSubmit",
  });
  return (
    <StyledSigningUpForm>
      <SignUpLabel>Email</SignUpLabel>
      <SignUpInput
        type="email"
        placeholder="Your email"
        {...register("email", {
          required: "Email is required",
          pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
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
      <SignUpButton>Sign in</SignUpButton>
      <SignUpText>
        Have an account already? <SignUpNavLink to={"../" + ROUTE.SIGN_IN}>Sign In</SignUpNavLink>
      </SignUpText>
    </StyledSigningUpForm>
  );
};
