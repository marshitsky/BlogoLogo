import { notFoundImgForCards } from "assets";

export const setNotFoundImg = (event: any) => {
  event.currentTarget.src = notFoundImgForCards;
};
