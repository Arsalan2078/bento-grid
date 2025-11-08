import styles from "./index.module.css";
import image from "/images/illustration-schedule-posts.webp";

export default function SectionSchedule() {
  return (
    <section>
      <h2 data-text-preset="3">Schedule to social media.</h2>

      <img
        src={image}
        alt="A flowchart depicting hourly audience activity for every day of the week. The time where audience is most active is highlighted"
      />

      <p>
        Optimize post timings to publish content at the perfect time for your
        audience.
      </p>
    </section>
  );
}
