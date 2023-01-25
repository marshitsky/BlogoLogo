import { Modal } from "components";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { ROUTE } from "router";
import { getUserInfo, useAppDispatch, useAppSelector } from "store";
import { resetPassword } from "store/slices/usersSlice/usersSlice";
import { validateEmail } from "utils";
import { StyledResetForm, ResetLabel, ResetInput, ResetButton } from "./styles";

export interface ISignInFormTypes {
  userEmail: string;
}

export const ResetForm = () => {
  const [isActiveModal, setIsActiveModal] = useState(false);
  const { error } = useAppSelector(getUserInfo);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleBackHome = () => {
    navigate(ROUTE.SIGN_IN);
  };

  const handleCloseModal = () => {
    setIsActiveModal(false);
  };

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<ISignInFormTypes>();

  const onSubmit: SubmitHandler<ISignInFormTypes> = (userEmail) => {
    dispatch(resetPassword(userEmail))
      .catch(() => setIsActiveModal(true))
      .then(() => setIsActiveModal(true))
      .then(() => reset());
  };

  return (
    <StyledResetForm onSubmit={handleSubmit(onSubmit)}>
      <ResetLabel>Email</ResetLabel>
      <ResetInput
        type="email"
        placeholder="Your email"
        {...register("userEmail", validateEmail())}
      />
      {errors.userEmail && <p>{errors.userEmail.message}</p>}
      <ResetButton type="submit">Reset password</ResetButton>
      {isActiveModal && error && <Modal message={error as string} handleClick={handleCloseModal} />}
      {isActiveModal && !error && <Modal message="Check your email" handleClick={handleBackHome} />}
    </StyledResetForm>
  );
};
