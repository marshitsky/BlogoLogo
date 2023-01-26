import { Switch } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Color } from "ui";

export const CustomSwitch = styled(Switch)({
  "& .MuiSwitch-thumb": {
    width: 16,
    height: 16,
    marginTop: 3,
    marginLeft: 4,
    boxSizing: "border-box",
  },
  "& .MuiButtonBase.Mui-checked": {
    backgroundColor: Color.SECONDARY,
  },
  "& .MuiSwitch-track": {
    width: 32,
    height: 20,
    marginTop: -2,
    backgroundColor: Color.PRIMARY,
    borderRadius: 10,
  },
  "& .MuiSwitch-switchBase": {
    "&:hover": {
      backgroundColor: "transparent",
    },
    "&:active": {
      backgroundColor: "transparent",
    },
  },
  "& .MuiSwitch-switchBase.Mui-checked": {
    transform: "translateX(14px)",
    color: Color.WHITE,
    "&:hover": {
      backgroundColor: "transparent",
    },
    "&:active": {
      backgroundColor: "transparent",
    },
  },
  "& .MuiSwitch-switchBase.Mui-checked+.MuiSwitch-track": {
    backgroundColor: Color.PRIMARY,
    "&:hover": {
      backgroundColor: Color.PRIMARY,
    },
  },
  "&. MuiTouchRipple-root": {
    "&:hover": {
      top: 1,
      right: 2,
    },
  },
});
