import { Switch } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Color } from "ui";

export const CustomSwitch = styled(Switch)({
  "& .MuiSwitch-thumb": {
    marginTop: 3,
    marginLeft: 4,
    width: 16,
    height: 16,
    boxSizing: "border-box",
  },
  "& .MuiButtonBase.Mui-checked": {
    background: Color.SECONDARY,
  },
  "& .MuiSwitch-track": {
    marginTop: -2,
    width: 32,
    height: 20,
    borderRadius: 10,
    backgroundColor: Color.PRIMARY,
  },
  "& .MuiSwitch-switchBase": {
    "&:hover": {
      background: "transparent",
    },
    "&:active": {
      background: "transparent",
    },
  },
  "& .MuiSwitch-switchBase.Mui-checked": {
    transform: "translateX(14px)",
    color: Color.WHITE,
    "&:hover": {
      background: "transparent",
    },
    "&:active": {
      background: "transparent",
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
