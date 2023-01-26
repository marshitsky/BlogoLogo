import styled from "styled-components";
import { Swiper } from "swiper/react";
import { Media } from "ui";

const StyledSwiper = styled(Swiper)`
  max-width: 1110px;
  ${Media.XL} {
    max-width: 720px;
  }
  ${Media.LG} {
    max-width: 520px;
  }
  ${Media.MD} {
    max-width: 320px;
  }
  ${Media.XS} {
    max-width: 270px;
  }
`;

export { StyledSwiper };
