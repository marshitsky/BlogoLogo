import { RootState } from "store/store";

export const getNewsById = (state: RootState) => state.singleNews;
