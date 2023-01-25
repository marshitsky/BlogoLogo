import { Portal } from "components";
import { PortalTarget } from "components/Portal/Portal";
import { memo } from "react";
import { AuthText, Button, Container, ModalInformation } from "./styles";

interface IProps {
  message: string;
  handleClick: () => void;
}

export const Modal = memo(({ message, handleClick }: IProps) => {
  return (
    <Portal target={PortalTarget.MODAL}>
      <Container>
        <ModalInformation>
          <AuthText>{message}</AuthText>
          <Button onClick={handleClick}>OK</Button>
        </ModalInformation>
      </Container>
    </Portal>
  );
});
