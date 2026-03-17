function InstructorSection({ id, content }) {
  return (
    <section id={id}>
      <div className="section-head">
        <h2>{content.title}</h2>
      </div>

      <article className="mentor-card">
        <p>
          <a href={content.profileUrl}>{content.profileName}</a>
          {content.introParagraph}
        </p>
        <p>{content.secondParagraph}</p>
        <p>{content.thirdParagraph}</p>
      </article>
    </section>
  );
}

export default InstructorSection;