import React from "react";
import { Outlet } from "react-router-dom";
import { Footer, NavBar } from "../../components";
import { StyledMainTemplate, StyledOutlet } from "./styles";

export const MainTemplate = () => {
  return (
    <StyledMainTemplate>
      <NavBar />
      <StyledOutlet>
        <Outlet />
      </StyledOutlet>
      <Footer />
    </StyledMainTemplate>
  );
};
