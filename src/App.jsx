import { useEffect, useMemo, useState } from "react";
import AudienceSection from "./components/AudienceSection";
import ExpectationsSection from "./components/ExpectationsSection";
import FinalCtaSection from "./components/FinalCtaSection";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import InstructorSection from "./components/InstructorSection";
import LearningSection from "./components/LearningSection";
import workshopContent from "./content/workshopContent";

function getInitialLanguage() {
  if (typeof window === "undefined") {
    return "pt";
  }

  const langFromQuery = new URLSearchParams(window.location.search).get("lang");
  return langFromQuery === "en" ? "en" : "pt";
}

function App() {
  const [language, setLanguage] = useState(getInitialLanguage);
  const content = useMemo(() => workshopContent[language], [language]);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const currentUrl = new URL(window.location.href);

    if (language === "en") {
      currentUrl.searchParams.set("lang", "en");
    } else {
      currentUrl.searchParams.delete("lang");
    }

    const nextUrl = `${currentUrl.pathname}${currentUrl.search}${currentUrl.hash}`;
    window.history.replaceState({}, "", nextUrl);
  }, [language]);

  const handleLanguageChange = (nextLanguage) => {
    if (nextLanguage === "pt" || nextLanguage === "en") {
      setLanguage(nextLanguage);
    }
  };

  return (
    <div className="page-shell">
      <Header
        id={content.ids.topbar}
        language={language}
        onLanguageChange={handleLanguageChange}
        content={content.header}
      />

      <HeroSection content={content.hero} />

      <AudienceSection id={content.ids.audience} content={content.audience} />

      <LearningSection id={content.ids.learning} content={content.learning} />

      <InstructorSection id={content.ids.instructor} content={content.instructor} />

      <ExpectationsSection id={content.ids.expectations} content={content.expectations} />

      <FinalCtaSection id={content.ids.contact} content={content.finalCta} />
    </div>
  );
}

export default App;
