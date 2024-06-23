import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
};
export const List = ({ children }: Props) => {
  return <ul className="divide-y divide-slate-100">{children}</ul>;
};
