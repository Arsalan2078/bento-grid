import image from "/images/illustration-create-post.webp";

export default function SectionCreatePost() {
  return (
    <section>
      <h2 data-text-preset="2">
        Create and schedule content{" "}
        <em>
          <span>quicker.</span>
        </em>
      </h2>

      <img
        src={image}
        alt="A button that says 'Create Post'. A cursor hovers over it"
      />
    </section>
  );
}
