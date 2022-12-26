import React, { useEffect } from "react";
import { FormControlLabel } from "@mui/material";
import { CustomSwitch } from "./styles";
import { setTheme, toggleTheme, useAppDispatch, useAppSelector } from "store";

export const ThemeToggler = () => {
  const { theme } = useAppSelector(setTheme);
  const dispatch = useAppDispatch();

  const handleTheme = () => {
    dispatch(toggleTheme());
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
