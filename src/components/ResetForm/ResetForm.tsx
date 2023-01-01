import {
  StyledSigningUpForm,
  SignUpLabel,
  SignUpInput,
  SignUpButton,
} from "components/SignUpForm/styles";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

export interface ISignInFormTypes {
  email: string;
}

export const ResetForm = () => {
  const navigate = useNavigate();
  const handleBackHome = () => {
    navigate(-1);
  };

  // make modal for all errors in all sign/reset forms
  const showAlertWrongEmail = () => {
    return alert("Wrong email");
  };

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<ISignInFormTypes>();

  const onSubmit: SubmitHandler<ISignInFormTypes> = ({ email }) => {
    const auth = getAuth();
    sendPasswordResetEmail(auth, email)
      .then(handleBackHome)
      .then()
      .catch((error) => {
        const errorCode = error.code;
        // const errorMessage = error.message;
        errorCode === "auth/user-not-found" && showAlertWrongEmail();
      });

    reset();
  };

  return (
    <StyledSigningUpForm onSubmit={handleSubmit(onSubmit)}>
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
      <SignUpButton type="submit">Reset password</SignUpButton>
    </StyledSigningUpForm>
  );
};
