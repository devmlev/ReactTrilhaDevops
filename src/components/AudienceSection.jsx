function AudienceSection({ id, content }) {
  return (
    <section id={id}>
      <div className="section-head">
        <h2>{content.title}</h2>
        <p>{content.description}</p>
      </div>

      <div className="audience-grid">
        {content.items.map((item) => (
          <article className="card" key={item.title}>
            <strong>{item.title}</strong>
            <p>{item.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default AudienceSection;