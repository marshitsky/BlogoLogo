import styled from "styled-components";
import { H2 } from "ui";

const NavigationLink = styled.span`
  cursor: pointer;
`;

const Title = styled.h2`
  ${H2}
  padding: 32px 0 48px 0;
`;

const Image = styled.img`
  width: 100%;
  height: 500px;
  border-radius: 15px;
  object-fit: cover;
  box-shadow: rgba(14, 30, 37, 0.9) 0px 2px 4px 0px, rgba(14, 30, 37, 0.9) 0px 2px 16px 0px;
`;

const Text = styled.p`
  padding-top: 48px;
  font-size: 18px;
  line-height: 32px;
`;

export { NavigationLink, Title, Image, Text };
