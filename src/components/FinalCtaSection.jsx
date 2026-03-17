function FinalCtaSection({ id, content }) {
  return (
    <section className="cta-final" id={id} aria-label={content.ariaLabel}>
      <div className="cta-copy">
        <h2>{content.title}</h2>
        <p>{content.description}</p>
      </div>

      <a href={content.ctaHref} className="btn-primary">
        {content.ctaText}
      </a>
    </section>
  );
}

export default FinalCtaSection;