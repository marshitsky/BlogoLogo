import styled from "styled-components";
import { Color } from "ui";

const StyledSlide = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 352px;
  min-width: 250px;
  width: 100%;
  height: 388px;
  background-color: ${Color.WHITE_HEADER};
  border-radius: 16px;
  text-decoration: none;
  cursor: pointer;
`;

const Image = styled.img`
  width: 100%;
  height: 208px;
  background-position-y: bottom;
  border-radius: 16px 16px 0 0;
  object-fit: cover;
  object-position: 50% 20%;
  filter: grayscale(0.74);
  opacity: 0.84;
  transition: 0.4s ease-in-out;
  &:hover {
    filter: grayscale(0);
    opacity: 1;
  }
`;

export { StyledSlide, Image };
