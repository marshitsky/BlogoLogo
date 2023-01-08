import styled from "styled-components";
import { Color, H2, Media, S1 } from "ui";

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

const OuterLinkWrapper = styled.p`
  display: grid;
  justify-items: center;
  width: max-content;
  background-color: ${Color.BTN_COLOR};
  border-radius: 12px;
  transition: 0.5s;
  &:hover {
    background-color: ${Color.LIGHT};
  }
  &:active {
    box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset,
      rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
  }
`;

const OuterLink = styled.a`
  padding: 16px 32px;
  ${S1};
  ${Media.SM} {
    width: 72px;
  }
`;

export { NavigationLink, Title, Image, Text, OuterLink, OuterLinkWrapper };
