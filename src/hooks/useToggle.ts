import { useState } from "react";

export const useToggle = (initValue: boolean = false): [boolean, () => void] => {
  const [value, setValue] = useState<boolean>(initValue);
  const toogle = () => setValue((prevValue) => !prevValue);
  return [value, toogle];
};
