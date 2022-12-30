import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { SubmitHandler, useForm } from "react-hook-form";
import { ROUTE } from "router";
import { setNewUser, useAppDispatch } from "store";
import {
  SignUpButton,
  SignUpInput,
  SignUpLabel,
  SignUpNavLink,
  SignUpText,
  StyledSigningUpForm,
} from "./styles";

export interface ISignInFormTypes {
  name: string;
  email: string;
  password: string;
}

export const SignUpForm = () => {
  const dispatch = useAppDispatch();
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<ISignInFormTypes>();

  const onSubmit: SubmitHandler<ISignInFormTypes> = ({ email, password }) => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
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
    <StyledSigningUpForm onSubmit={handleSubmit(onSubmit)}>
      <SignUpLabel>Name</SignUpLabel>
      <SignUpInput
        type="name"
        placeholder="Your name"
        {...register("name", {
          required: "Name is required",
          maxLength: {
            value: 20,
            message: "Too long",
          },
        })}
      />
      {errors.name && <p>{errors.name.message}</p>}
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
        Have an account already? <SignUpNavLink to={"../" + ROUTE.SIGN_IN}>Sign In</SignUpNavLink>
      </SignUpText>
    </StyledSigningUpForm>
  );
};
