import type { ReactNode } from "react";

type BentoCellProps = {
  children: ReactNode;
  cellColor?: "purple" | "purple-pale" | "white" | "yellow" | "yellow-pale";
};

export default function BentoCell({
  children,
  cellColor = "white",
}: BentoCellProps) {
  return <div data-cell-color={cellColor}>{children}</div>;
}
