import { Portal } from "components";
import { PortalTarget } from "components/Portal/Portal";
import { AuthText, Button, Container, ModalInformation } from "./styles";

interface IProps {
  message: string;
  handleClick?: () => void;
  setIsActive: (isActive: boolean) => void;
}

export const Modal = ({ message, handleClick, setIsActive }: IProps) => {
  const handleCloseModal = (event: React.MouseEvent) => {
    event.stopPropagation();
    setIsActive(false);
  };

  return (
    <Portal target={PortalTarget.MODAL}>
      <Container onClick={handleCloseModal}>
        <ModalInformation>
          <AuthText>{message}</AuthText>
          <Button onClick={handleClick}>OK</Button>
        </ModalInformation>
      </Container>
    </Portal>
  );
};
