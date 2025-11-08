import styles from "./index.module.css";
import image from "/images/illustration-five-stars.webp";

export default function SectionSocialMedia() {
  return (
    <section className={styles.section}>
      <h1 data-text-preset="1">
        Social Media <span className="highlight">10x</span> <em>Faster</em> with AI
      </h1>

      <div>
        <img src={image} alt="Five gold stars standing in a line" width="192" />
        <p>Over 4,000 5-star reviews</p>
      </div>
    </section>
  );
}
