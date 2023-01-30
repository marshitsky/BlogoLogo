import styled from "styled-components";
import { Swiper } from "swiper/react";
import { Media } from "ui";

const StyledSwiper = styled(Swiper)`
  width: 100%;
  ${Media.XL} {
    width: 89vw;
  }
`;

export { StyledSwiper };
