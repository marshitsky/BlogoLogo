import { motion } from "framer-motion";
import styled from "styled-components";
import { Color, H2 } from "ui";

const BlogContentWrapper = styled(motion.div)``;

const SliderWrapper = styled.div`
  width: 100%;
  padding-top: 36px;
  border-top: 1px solid ${Color.WHITE_HEADER};
`;

const RecommendationsTitle = styled.h3`
  ${H2}
  padding-bottom: 36px;
`;

export { BlogContentWrapper, SliderWrapper, RecommendationsTitle };
