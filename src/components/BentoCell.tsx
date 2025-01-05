import { ChildrenProps } from "../libs/types";
import styles from "./BentoCell.module.css";

function BentoCell({ children }: ChildrenProps) {
  return <div className={styles.bentoCell}>{children}</div>;
}

export default BentoCell;
