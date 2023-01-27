import { motion } from "framer-motion";
import { SLink } from "pages/SignInPage/styles";
import styled from "styled-components";
import { H1, H2 } from "ui";

const NotFoundWrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

const NotFoundTitle = styled.p`
  ${H1}
`;

const NotFoundSubTitle = styled.h2`
  ${H2}
`;

const StyledLink = styled(SLink)`
  width: 100%;
  text-align: center;
`;

const Image = styled.img``;

export { NotFoundWrapper, NotFoundTitle, NotFoundSubTitle, StyledLink, Image };
