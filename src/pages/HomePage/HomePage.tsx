import { ArticleList, CustomSelect } from "components";
import React from "react";
import { Title, Wrapper } from "./styles";

export const HomePage = () => {
  return (
    <>
      <Title>Blog</Title>
      <Wrapper>
        <p>HomePage</p>
        <CustomSelect />
      </Wrapper>
      <ArticleList />
    </>
  );
};
