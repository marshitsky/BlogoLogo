import { StylesConfig } from "react-select";
import { Color } from "ui";

export const selectStyles: StylesConfig = {
  control: () => ({
    width: "256px",
    display: "flex",
    backgroundColor: Color.WHITE_HEADER,
    borderRadius: "4px",
    border: "1px solid transparent",
    padding: "10px",
    cursor: "pointer",
    "&:hover": {
      border: `1px solid ${Color.PRIMARY}`,
    },
  }),
  indicatorSeparator: () => ({
    width: 0,
  }),
  option: (styles, { data, isDisabled, isFocused, isSelected }) => ({
    ...styles,
    color: `${Color.MEDIUM}`,
    borderRadius: "4px",
    cursor: isDisabled ? "not-allowed" : "pointer",
    backgroundColor: isSelected ? "transparent" : isFocused ? "transparent" : "transparent",
    "&:hover": {
      color: `${Color.PRIMARY}`,
    },
  }),
};
