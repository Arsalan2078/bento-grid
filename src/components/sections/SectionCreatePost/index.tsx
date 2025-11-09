import styles from "./index.module.css";
import image from "/images/illustration-create-post.webp";

export default function SectionCreatePost() {
  return (
    <section className={styles.section}>
      <h2 data-text-preset="2">
        Create and schedule content{" "}
        <em>
          <span className="highlight">quicker.</span>
        </em>
      </h2>

      <img
        src={image}
        alt="A button that says 'Create Post'. A cursor hovers over it"
        width="191"
      />
    </section>
  );
}
