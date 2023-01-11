import Select, { SingleValue } from "react-select";
import { fetchNews, useAppDispatch } from "store";
import { IOption } from "types";
import { selectStyles } from "./styles";

const options: IOption[] = [
  { value: "title", label: "Title" },
  { value: "publishedAt", label: "Date" },
  { value: "", label: "Reset select" },
];

export const CustomNewsSelect = () => {
  const dispatch = useAppDispatch();

  const handleSelect = (option: SingleValue<IOption | null | any>): void => {
    option && dispatch(fetchNews({ page: 0, value: option.value }));
  };

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
