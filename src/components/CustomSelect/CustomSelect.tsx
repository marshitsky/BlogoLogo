import Select from "react-select";

export const CustomSelect = () => {
  const options = [{ value: "Title (A-Z)", label: "Title (A-Z)" }];
  return <Select options={options} isMulti={false} isSearchable={false} />;
};
