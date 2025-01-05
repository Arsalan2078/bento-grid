import { ChildrenProps } from "../libs/types";
import styles from "./BentoGrid.module.css";

function BentoGrid({ children }: ChildrenProps) {
  return <div className={styles.bentoGrid}>{children}</div>;
}

export default BentoGrid;
