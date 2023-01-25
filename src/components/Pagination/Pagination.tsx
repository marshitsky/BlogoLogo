import { memo } from "react";
import { PaginationButton } from "./styles";

interface IProps {
  handlePage: () => void;
  requestParams: number;
}

export const Pagination = memo(({ handlePage, requestParams }: IProps) => {
  return (
    <PaginationButton onClick={handlePage} current={requestParams}>
      {requestParams}
    </PaginationButton>
  );
});
