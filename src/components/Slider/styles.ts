import styled from "styled-components";
import { Swiper } from "swiper/react";
import { Media } from "ui";

const StyledSwiper = styled(Swiper)`
  max-width: 1110px;
  ${Media.XL} {
    max-width: 720px;
  }
  ${Media.MD} {
    max-width: 340px;
  }
  ${Media.XS} {
    max-width: 290px;
  }
`;

export { StyledSwiper };
