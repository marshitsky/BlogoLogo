import { StylesConfig } from "react-select";
import { Color } from "ui";

export const selectStyles: StylesConfig = {
  control: () => ({
    display: "flex",
    width: "256px",
    padding: "10px",
    backgroundColor: Color.WHITE_HEADER,
    borderRadius: "4px",
    border: "1px solid transparent",
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
    color: Color.MEDIUM,
    cursor: isDisabled ? "not-allowed" : "pointer",
    backgroundColor: Color.WHITE,
    "&:hover": {
      color: `${Color.PRIMARY}`,
    },
  }),
};
