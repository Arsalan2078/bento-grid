import styles from "./index.module.css";
import image from "/images/illustration-ai-content.webp";

export default function SectionWriteYourContent() {
  return (
    <section className={styles.section}>
      <h2 data-text-preset="2">Write your content using AI.</h2>
      <img
        src={image}
        alt="A miniature chat. User promps the bot with a request to give tips on growing followers"
        width="220 "
      />
    </section>
  );
}
