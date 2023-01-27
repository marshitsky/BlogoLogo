import { motion } from "framer-motion";
import styled from "styled-components";
import { H2 } from "ui";

const SearchPageWrapper = styled(motion.div)`
  display: grid;
  align-self: flex-start;
  place-items: start center;
`;

const SearchResultsInfo = styled.h2`
  ${H2}
  padding-top: 40px
`;

export { SearchPageWrapper, SearchResultsInfo };
