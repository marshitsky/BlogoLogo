import { useForm } from "react-hook-form";
import { NavLink } from "react-router-dom";
import { ROUTE } from "../../router/routes";
import {
  SignInInput,
  SignInLabel,
  SignInText,
  SignInButton,
  StyledSigningForm,
  SignInNavLink,
} from "./styles";

export interface ISignInFormTypes {
  email: string;
  password: string;
}

export const SignInForm = () => {
  const {
    register,
    // reset,
    formState: { errors },
  } = useForm<ISignInFormTypes>({
    mode: "onSubmit",
    reValidateMode: "onSubmit",
  });

  return (
    <StyledSigningForm>
      <SignInLabel>Email</SignInLabel>
      <SignInInput
        type="email"
        placeholder="Your email"
        {...register("email", {
          required: "Email is required",
          pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
        })}
      />
      {errors.email && <p>{errors.email.message}</p>}
      <SignInLabel>Password</SignInLabel>
      <SignInInput
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
      <NavLink to={ROUTE.RESET_PASSWORD}>Forgot password?</NavLink>
      <SignInButton>Sign in</SignInButton>
      <SignInText>
        Don’t have an account? <SignInNavLink to={"../" + ROUTE.SIGN_UP}>Sign Up</SignInNavLink>
      </SignInText>
    </StyledSigningForm>
  );
};
