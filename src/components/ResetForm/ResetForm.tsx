import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { StyledResetForm, ResetLabel, ResetInput, ResetButton } from "./styles";

export interface ISignInFormTypes {
  email: string;
}

export const ResetForm = () => {
  const navigate = useNavigate();
  const handleBackHome = () => {
    navigate(-1);
  };

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<ISignInFormTypes>();

  const onSubmit: SubmitHandler<ISignInFormTypes> = ({ email }) => {
    const auth = getAuth();
    sendPasswordResetEmail(auth, email).then(handleBackHome);
    reset();
  };

  return (
    <StyledResetForm onSubmit={handleSubmit(onSubmit)}>
      <ResetLabel>Email</ResetLabel>
      <ResetInput
        type="email"
        placeholder="Your email"
        {...register("email", {
          required: "Email is required",
          pattern: { value: /^(.+)@(.+)$/, message: "Enter a valid email" },
        })}
      />
      {errors.email && <p>{errors.email.message}</p>}
      <ResetButton type="submit">Reset password</ResetButton>
    </StyledResetForm>
  );
};
