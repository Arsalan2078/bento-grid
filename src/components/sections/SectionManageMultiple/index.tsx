import styles from "./index.module.css";
import image from "/images/illustration-multiple-platforms.webp";

export default function SectionManageMultiple() {
  return (
    <section className={styles.section}>
      <h2 data-text-preset="3">Manage multiple accounts and platforms.</h2>
      <img
        src={image}
        alt="Accounts in Instagram and X, having 12 thousand and 8 thousand followers respectively."
        width="316"
      />
    </section>
  );
}
