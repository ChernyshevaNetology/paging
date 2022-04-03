import React from "react";
import { PageLink } from "./PageLink";

interface IPagingProps {
  pageNumbers: number[];
}

const Paging = ({ pageNumbers }: IPagingProps): any => {
  return pageNumbers.map((page: number) => (
    <PageLink key={page} pageNum={page} />
  ));
};

export { Paging };
