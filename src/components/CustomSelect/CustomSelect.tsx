import Select, { SingleValue } from "react-select";
import { fetchArticles, fetchNews, useAppDispatch } from "store";
import { IOption } from "types";
import { selectStyles } from "./styles";

const options: IOption[] = [
  { value: "title", label: "Title" },
  { value: "publishedAt", label: "Date" },
  { value: "", label: "Reset select" },
];

interface IProps {
  tab: string;
}

export const CustomSelect = ({ tab }: IProps) => {
  const dispatch = useAppDispatch();

  const handleSelect = (option: SingleValue<IOption | null | any>): void => {
    tab === "articles"
      ? option && dispatch(fetchArticles({ page: 0, value: option.value, word: "" }))
      : option && dispatch(fetchNews({ page: 0, value: option.value, word: "" }));
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
