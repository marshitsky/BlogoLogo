import { ChangeEvent, useState } from "react";

export const useInput = (initialValue = "") => {
  const [value, setValue] = useState<string>(initialValue);

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };
  return {
    value,
    onChange,
  };
};
