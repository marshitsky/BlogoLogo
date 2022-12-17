import React, { useState, useEffect } from "react";
import { AppWrapper, Par, StyledBTN } from "./ui/base";

export const App = () => {
  const [theme, setTheme] = useState("light");

  const handleTheme = () => {
    setTheme((theme) => (theme === "dark" ? "light" : "dark"));
  };

  useEffect(() => {
    document.documentElement.setAttribute("theme", theme);
  }, [theme]);

  return (
    <AppWrapper>
      <Par>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique sint sed tempore ducimus
        accusamus quia voluptate laboriosam aliquam dicta culpa.
      </Par>
      <StyledBTN onClick={handleTheme}>Push me</StyledBTN>
    </AppWrapper>
  );
};
