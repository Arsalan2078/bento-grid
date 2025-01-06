import { ChildrenProps } from "../libs/types";
import "./BentoCell.css";

function BentoCell({ children }: ChildrenProps) {
  return <div className={`bento-cell bento-cell--purple`}>{children}</div>;
}

export default BentoCell;
