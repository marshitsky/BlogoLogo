import styled from "styled-components";
import { Media } from "ui";

const ErrorMessage = styled.span`
  font-size: 35px;
`;

const StyledBlogList = styled.div`
  display: grid;
  place-items: center;
  grid-template-columns: repeat(3, 1fr);
  gap: 17.5px;
  padding-top: 50px;
  ${Media.XL} {
    grid-template-columns: repeat(2, 1fr);
  }
  ${Media.LG} {
    grid-template-columns: 1fr;
  }
`;

export { StyledBlogList, ErrorMessage };
