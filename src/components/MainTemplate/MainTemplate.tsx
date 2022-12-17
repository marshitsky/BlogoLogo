import React from "react";
import { Outlet } from "react-router-dom";
import { Footer } from "../Footer/Footer";
import { NavBar } from "../NavBar/NavBar";
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
