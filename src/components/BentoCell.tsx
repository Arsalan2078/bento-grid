import { BentoCellProps } from "../libs/types";
import "./BentoCell.css";

function BentoCell({ children, cellName, cellColor }: BentoCellProps) {
  return (
    <section
      id={cellName}
      className={`bento-cell bento-cell--${cellName} bento-cell--${cellColor}`}
    >
      {children}
    </section>
  );
}

export default BentoCell;
