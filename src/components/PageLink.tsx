import React, { useContext } from "react";
import classNames from "classnames";
import { PageContext } from "../App";

interface IPageLinkProps {
  pageNum: number;
}

const PageLink = ({ pageNum }: IPageLinkProps) => {
  // @ts-ignore
  const { currentPage, handlePageChange } = useContext(PageContext);

  const pageLinkClass = classNames("page-link", {
    "current-page-link": pageNum === currentPage,
  });

  return (
    <div onClick={() => handlePageChange(pageNum)} className={pageLinkClass}>
      {pageNum}
    </div>
  );
};

export { PageLink };
