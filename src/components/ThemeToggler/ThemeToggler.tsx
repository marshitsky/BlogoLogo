import React, { useEffect, useState } from "react";
import { FormControlLabel } from "@mui/material";
import { CustomSwitch } from "./styles";

type Theme = "dark" | "light";

export const ThemeToggler = () => {
  const [theme, setTheme] = useState<Theme>("light");

  const handleTheme = () => {
    setTheme((theme) => (theme === "dark" ? "light" : "dark"));
  };

  useEffect(() => {
    document.documentElement.setAttribute("theme", theme);
  }, [theme]);

  return (
    <FormControlLabel
      value="start"
      control={<CustomSwitch color="primary" />}
      label={theme === "light" ? "Dark theme" : "Light theme"}
      labelPlacement="start"
      onChange={handleTheme}
    />
  );
};
