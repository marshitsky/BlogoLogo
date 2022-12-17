import { Switch } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Color } from "../../ui/colors";

export const CustomSwitch = styled(Switch)({
  "& .MuiSwitch-thumb": {
    marginTop: 5,
    marginLeft: 4,
    width: 16,
    height: 16,
    boxSizing: "border-box",
  },
  "& .MuiButtonBase.Mui-checked": {
    background: Color.SECONDARY,
  },
  "& .MuiSwitch-track": {
    width: 32,
    height: 20,
    borderRadius: 10,
    backgroundColor: Color.LIGHT,
  },
  "& .MuiSwitch-switchBase.Mui-checked": {
    transform: "translateX(14px)",
    color: Color.WHITE,
  },
  "& .MuiSwitch-switchBase.Mui-checked+.MuiSwitch-track": {
    backgroundColor: Color.PRIMARY,
    "&:hover": {
      backgroundColor: Color.PRIMARY,
    },
  },
});
