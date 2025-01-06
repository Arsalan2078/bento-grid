import { ChildrenProps } from "../libs/types";
import "./BentoGrid.css";

function BentoGrid({ children }: ChildrenProps) {
  return <div className={`bento-grid`}>{children}</div>;
}

export default BentoGrid;
