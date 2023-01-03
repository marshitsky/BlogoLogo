import styled from "styled-components";
import { H1, H2 } from "ui";

const AccountPageWrapper = styled.div`
  place-self: center;
  text-align: center;
`;
const AccountPageTitle = styled.h1`
  ${H1}
`;
const Subtitle = styled.h3`
  ${H2}
  padding: 20px 0;
`;
export { AccountPageWrapper, AccountPageTitle, Subtitle };
