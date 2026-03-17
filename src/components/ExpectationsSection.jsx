function ExpectationsSection({ id, content }) {
  return (
    <section id={id}>
      <div className="section-head">
        <h2>{content.title}</h2>
      </div>

      <div className="resources">
        {content.items.map((item) => (
          <article className="resource-item" key={item.title}>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default ExpectationsSection;