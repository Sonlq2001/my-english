import { FC, useState, memo, ComponentPropsWithoutRef } from "react";
import clsx from "clsx";

import IconRight from "@app/assets/images/icon-svg/icon-right.svg?react";
import IconLeft from "@app/assets/images/icon-svg/icon-left.svg?react";

import { WrapPagination } from "./Pagination.styles";

type PaginationProps = ComponentPropsWithoutRef<"ul"> & {
  total: number;
  perPage: number;
  onChange: (page: number) => void;
};

const Pagination: FC<PaginationProps> = ({
  total,
  perPage,
  onChange,
  ...props
}) => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const limitPage = Math.ceil(total / perPage);

  const handlePreviousPage = () => {
    if (currentPage <= 1) return;
    const page = currentPage - 1;
    setCurrentPage(page);
    onChange(page);
  };

  const handleNextPage = () => {
    if (currentPage >= limitPage) return;
    const page = currentPage + 1;
    setCurrentPage(page);
    onChange(page);
  };

  const handleSelectPage = (itemPage: number) => {
    setCurrentPage(itemPage);
    onChange(itemPage);
  };

  if (limitPage <= 1) return;

  return (
    <WrapPagination {...props}>
      <li onClick={handlePreviousPage}>
        <IconLeft />
      </li>
      {Array.from({ length: limitPage }, (_, i) => i + 1).map((page) => (
        <li
          key={`page-${page}`}
          className={clsx(currentPage === page && "active")}
          onClick={() => handleSelectPage(page)}
        >
          {page}
        </li>
      ))}
      <li onClick={handleNextPage}>
        <IconRight />
      </li>
    </WrapPagination>
  );
};

export default memo(Pagination);
