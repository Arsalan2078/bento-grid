import { ReactNode } from "react";

export interface ChildrenProps {
  children: ReactNode;
}

export interface BentoCellProps extends ChildrenProps {
  cellColor: "purple" | "white" | "yellow" | "purple-pale" | "yellow-pale";
  cellName: string;
}
