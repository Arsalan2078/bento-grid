import styles from "./index.module.css";
import type { ReactNode } from "react";

export default function BentoGrid({ children }: { children: ReactNode }) {
  return <div className={styles.grid}>{children}</div>;
}
