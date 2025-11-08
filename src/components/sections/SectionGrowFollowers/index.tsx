import styles from "./index.module.css";
import image from "/images/illustration-grow-followers.webp";

export default function SectionGrowFollowers() {
  return (
    <section>
      <h2 data-text-preset="2">Grow followers with non-stop content.</h2>
      <img src={image} alt="A flowchart displaying growth of followers." />
    </section>
  );
}
