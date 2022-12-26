import { store } from "./store";
import { useAppDispatch, useAppSelector } from "./hooks/hooks";
import { setTheme } from "./selectors/themeSelector";
import { getUser } from "./selectors/userSelector";
import { toggleTheme } from "./slices/themeSlice/themeSlice";
import { toggleAuth } from "./slices/userSlice/userSlice";

export { store, useAppDispatch, useAppSelector, setTheme, getUser, toggleTheme, toggleAuth };
