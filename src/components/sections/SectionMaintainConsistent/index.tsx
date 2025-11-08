import styles from "./index.module.css";
import image from "/images/illustration-consistent-schedule.webp";

export default function SectionMaintainConsistent() {
  return (
    <section className={styles.section}>
      <h2 data-text-preset="3">Maintain a consistent posting schedule.</h2>
      <img src={image} alt="A calendar with days checked out" width="208" />
    </section>
  );
}
