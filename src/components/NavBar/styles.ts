import styled from "styled-components";
import { Color } from "../../ui/colors";
import { ReactComponent as Logo } from "../../assets/img/logo.svg";
import { H2 } from "../../ui/typography";

const Navigation = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 96px;
  padding: 0 5px;
  background-color: ${Color.WHITE_HEADER};
`;

const Text = styled.p`
  ${H2}
`;

const StyledLogo = styled(Logo)`
  width: 157px;
`;

export { Navigation, StyledLogo, Text };
