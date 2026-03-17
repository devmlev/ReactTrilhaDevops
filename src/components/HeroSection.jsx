function HeroSection({ content }) {
  return (
    <section className="hero" aria-label={content.ariaLabel}>
      <div>
        <p className="eyebrow">{content.eyebrow}</p>
        <h1>{content.title}</h1>
        <p>{content.description}</p>
        <div className="hero-quote">{content.quote}</div>
      </div>

      <div className="hero-art">
        <img src="/workshop.png" alt={content.imageAlt} className="hero-art-image" />
      </div>

      <div className="hero-last-x">
        <a href={content.ctaHref} className="btn-primary">
          {content.ctaText}
        </a>
      </div>
    </section>
  );
}

export default HeroSection;