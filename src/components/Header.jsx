function Header({ id, language, onLanguageChange, content }) {
  return (
    <header className="topbar" id={id}>
      <div className="brand" aria-label={content.brandAriaLabel}>
        <img src="/logo.png" alt={content.brandAlt} className="brand-mark" />
        <span>{content.brandText}</span>
      </div>

      <nav aria-label={content.languageSwitcherAria}>
        <button
          type="button"
          className={`language-link${language === "pt" ? " is-active" : ""}`}
          title={content.ptTitle}
          aria-pressed={language === "pt"}
          onClick={() => onLanguageChange("pt")}
        >
          {content.ptLabel}
        </button>
        <button
          type="button"
          className={`language-link${language === "en" ? " is-active" : ""}`}
          title={content.enTitle}
          aria-pressed={language === "en"}
          onClick={() => onLanguageChange("en")}
        >
          {content.enLabel}
        </button>
      </nav>
    </header>
  );
}

export default Header;