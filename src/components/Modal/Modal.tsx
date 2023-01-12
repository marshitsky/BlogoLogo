import { Portal } from "components";
import { PortalTarget } from "components/Portal/Portal";
import { generatePath, useNavigate } from "react-router-dom";
import { ROUTE } from "router";
import { AuthText, Button, Container, ModalInformation } from "./styles";

export const Modal = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(generatePath("/:path", { path: ROUTE.ACCOUNT }));
  };

  return (
    <Portal target={PortalTarget.ROOT}>
      <Container>
        <ModalInformation>
          <AuthText>Authorization successful</AuthText>
          <Button onClick={handleClick}>OK</Button>
        </ModalInformation>
      </Container>
    </Portal>
  );
};
