import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";

import HomePage from "./pages/HomePage";
import ProjectsPage from "./pages/ProjectsPage";
import MediaPage from "./pages/MediaPage";
import AboutUsPage from "./pages/AboutUsPage";
import ContactUsPage from "./pages/ContactUsPage";
import OurTeamPage from "./pages/OurTeamPage";
import ServicesPage from "./pages/ServicesPage";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage";
import TermsConditionPage from "./pages/TermsConditionPage";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/media" element={<MediaPage />} />
        <Route path="/about" element={<AboutUsPage />} />
        <Route path="/contact" element={<ContactUsPage />} />
        <Route path="/team" element={<OurTeamPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
        <Route path="/terms-condition" element={<TermsConditionPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
