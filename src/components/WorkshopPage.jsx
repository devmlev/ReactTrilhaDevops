import AudienceSection from "./AudienceSection";
import ExpectationsSection from "./ExpectationsSection";
import FinalCtaSection from "./FinalCtaSection";
import Header from "./Header";
import HeroSection from "./HeroSection";
import InstructorSection from "./InstructorSection";
import LearningSection from "./LearningSection";
import workshopContent from "../content/workshopContent";

function WorkshopPage({ language }) {
  const content = workshopContent[language] ?? workshopContent.pt;

  return (
    <div className="page-shell">
      <Header id={content.ids.topbar} language={language} content={content.header} />

      <HeroSection content={content.hero} />

      <AudienceSection id={content.ids.audience} content={content.audience} />

      <LearningSection id={content.ids.learning} content={content.learning} />

      <InstructorSection id={content.ids.instructor} content={content.instructor} />

      <ExpectationsSection id={content.ids.expectations} content={content.expectations} />

      <FinalCtaSection id={content.ids.contact} content={content.finalCta} />
    </div>
  );
}

export default WorkshopPage;