import Select, { SingleValue } from "react-select";
import { fetchArticles, useAppDispatch } from "store";
import { IOption } from "types";
import { selectStyles } from "./styles";

const options: IOption[] = [
  { value: "title", label: "Title" },
  { value: "publishedAt", label: "Date" },
  { value: "", label: "Reset select" },
];

export const CustomArticleSelect = () => {
  const dispatch = useAppDispatch();

  const handleSelect = (option: SingleValue<IOption | null | any>): void => {
    option && dispatch(fetchArticles({ page: 0, value: option.value }));
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
