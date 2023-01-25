import { memo } from "react";
import { PaginationButton } from "./styles";

interface IProps {
  handlePage: () => void;
  requestParams: number;
  isActive: boolean;
}

export const Pagination = memo(({ handlePage, requestParams, isActive }: IProps) => {
  return (
    <PaginationButton onClick={handlePage} current={requestParams} $isActive={isActive}>
      {requestParams}
    </PaginationButton>
  );
});
