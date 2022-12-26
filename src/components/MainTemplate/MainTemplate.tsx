import React from "react";
import { Outlet } from "react-router-dom";
import { Footer, NavBar } from "components";
import { OutletWrapper, StyledMainTemplate } from "./styles";

export const MainTemplate = () => {
  return (
    <StyledMainTemplate>
      <NavBar />
      <OutletWrapper>
        <Outlet />
      </OutletWrapper>
      <Footer />
    </StyledMainTemplate>
  );
};
