import React from "react";
import { Outlet } from "react-router-dom";
import { Footer } from "../Footer/Footer";

export const MainTemplate = () => {
  return (
    <div>
      <Outlet />
      <Footer />
    </div>
  );
};
