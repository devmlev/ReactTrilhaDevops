import WorkshopEnPage from "./pages/WorkshopEnPage";
import WorkshopPtPage from "./pages/WorkshopPtPage";

function resolveLanguageFromLocation() {
  if (typeof window === "undefined") {
    return "pt";
  }

  const normalizedPath = window.location.pathname.toLowerCase().replace(/\/+$/, "") || "/";
  if (normalizedPath === "/en") {
    return "en";
  }

  const langFromQuery = new URLSearchParams(window.location.search).get("lang");
  return langFromQuery === "en" ? "en" : "pt";
}

function App() {
  const language = resolveLanguageFromLocation();

  return language === "en" ? <WorkshopEnPage /> : <WorkshopPtPage />;
}

export default App;
