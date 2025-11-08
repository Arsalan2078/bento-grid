import styles from "./index.module.css";
import image from "/images/illustration-audience-growth.webp";

export default function SectionAudienceGrowth() {
  return (
    <section className={styles.section}>
      <h2>
        <span data-text-preset="1">{`>`}56%</span> faster audience growth
      </h2>

      <img
        src={image}
        alt="3 digital humans, hapily gesturing and smiling from their frames"
        width="178"
      />
    </section>
  );
}
