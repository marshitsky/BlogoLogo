import React, { useEffect, useState } from "react";
import { Switch } from "@mui/material";

export const ThemeToggler = () => {
  const [theme, setTheme] = useState("light");

  const handleTheme = () => {
    setTheme((theme) => (theme === "dark" ? "light" : "dark"));
  };

  useEffect(() => {
    document.documentElement.setAttribute("theme", theme);
  }, [theme]);

  return <Switch onChange={handleTheme} />;
};
