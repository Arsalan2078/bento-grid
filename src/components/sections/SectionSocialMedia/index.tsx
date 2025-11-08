import image from "/images/illustration-five-stars.webp";

export default function SectionSocialMedia() {
  return (
    <section>
      <h1 data-text-preset="1">
        Social Media <span>10x</span> <em>Faster</em> with AI
      </h1>

      <div>
        <img src={image} alt="Five gold stars standing in a line" />
        <p>Over 4,000 5-star reviews</p>
      </div>
    </section>
  );
}
