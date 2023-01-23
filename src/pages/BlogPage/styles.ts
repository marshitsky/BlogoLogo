import styled from "styled-components";
import { Color, H2 } from "ui";

const SliderWrapper = styled.div`
  padding-top: 36px;
  border-top: 1px solid ${Color.WHITE_HEADER};
`;

const RecommendationsTitle = styled.h3`
  ${H2}
  padding-bottom: 36px;
`;

export { SliderWrapper, RecommendationsTitle };
