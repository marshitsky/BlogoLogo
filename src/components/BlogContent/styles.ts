import styled from "styled-components";
import { B2, Color, H2, Media, S1 } from "ui";

const Wrapper = styled.div`
  display: grid;
  grid-template-rows: auto;
  width: 100%;
  max-width: 1110px;
  padding-bottom: 36px;
  ${Media.MD} {
    padding-bottom: 20px;
  }
`;

const NavigationLink = styled.span`
  cursor: pointer;
`;

const Title = styled.h2`
  ${H2}
  padding: 32px 0 48px 0;
  ${Media.MD} {
    font-size: 22px;
    line-height: 30px;
    padding: 22px 0 26px 0;
  }
`;

const Image = styled.img`
  width: 100%;
  max-height: 500px;
  border-radius: 15px;
  object-fit: cover;
  object-position: 50% 20%;
  box-shadow: rgba(14, 30, 37, 0.9) 0px 2px 4px 0px, rgba(14, 30, 37, 0.9) 0px 2px 16px 0px;
`;

const Text = styled.p`
  padding-top: 48px;
  font-size: 18px;
  line-height: 32px;
  ${Media.MD} {
    padding-top: 26px;
  }
`;

const LinksWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 15px;
  padding-top: 20px;
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

const FavoritesButton = styled.button`
  ${S1};
  padding: 16px 32px;
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
  ${Media.SM} {
    ${B2}
  }
`;

const OuterLink = styled.a`
  padding: 16px 32px;
  ${S1};
  ${Media.SM} {
    ${B2};
  }
`;

export {
  Wrapper,
  NavigationLink,
  Title,
  Image,
  Text,
  OuterLink,
  OuterLinkWrapper,
  FavoritesButton,
  LinksWrapper,
};
