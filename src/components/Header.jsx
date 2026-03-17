function Header({ id, language, content }) {
  return (
    <header className="topbar" id={id}>
      <div className="brand" aria-label={content.brandAriaLabel}>
        <img src="/logo.png" alt={content.brandAlt} className="brand-mark" />
        <span>{content.brandText}</span>
      </div>

      <nav aria-label={content.languageSwitcherAria}>
        <a
          href="/"
          className={`language-link${language === "pt" ? " is-active" : ""}`}
          title={content.ptTitle}
          aria-current={language === "pt" ? "page" : undefined}
        >
          {content.ptLabel}
        </a>
        <a
          href="/en"
          className={`language-link${language === "en" ? " is-active" : ""}`}
          title={content.enTitle}
          aria-current={language === "en" ? "page" : undefined}
        >
          {content.enLabel}
        </a>
      </nav>
    </header>
  );
}

export default Header;