import { options } from "config";
import Select, { SingleValue } from "react-select";
import { IOption } from "types";
import { selectStyles } from "./styles";

interface IProps {
  handleSelect: (option: SingleValue<IOption | null | any>) => void;
}

export const CustomSelect = ({ handleSelect }: IProps) => {
  return (
    <Select
      options={options}
      onChange={handleSelect}
      styles={selectStyles}
      defaultValue={options[0]}
      isMulti={false}
      isSearchable={false}
    />
  );
};
