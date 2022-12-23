import React from "react";
import { Outlet } from "react-router-dom";
import { Footer, NavBar } from "../../components";
import { StyledMainTemplate } from "./styles";

export const MainTemplate = () => {
  return (
    <StyledMainTemplate>
      <NavBar />
      <Outlet />
      <Footer />
    </StyledMainTemplate>
  );
};
