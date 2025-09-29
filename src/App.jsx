import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Core from "./components/Core";
import Modular from "./components/Modular";
import PropertyHealthReport from "./components/PropertyHealthReport";
import About from "./components/About";
import Blog from "./components/Blog";
import Khata from "./components/Blog/Khata";
import EC from "./components/Blog/EC";
import Mistakes from "./components/Blog/Mistakes";
import Filing from "./components/Blog/Filing";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import ScrollToTop from "./components/ScrollToTop";
import PrivacyPolicy from "./components/PrivacyPolicy";
import TermsAndConditions from "./components/TermsAndConditions"

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="core-services" element={<Core />} />
            <Route path="modular-services" element={<Modular />} />
            <Route
              path="property-health-report"
              element={<PropertyHealthReport />}
            />
            <Route path="about" element={<About />} />
            <Route path="blog" element={<Blog />} />
            <Route path="blog/must-know-legal-documents-for-property-buyers-and-sellers" element={<Khata />} />
            <Route path="blog/property-health-report" element={<EC />} />
            <Route path="blog/rental-guarantee-and-property-management" element={<Mistakes />} />
            <Route path="blog/modular-and-portable-homes" element={<Filing />} />
            <Route path="faq" element={<FAQ />} />
            <Route path="contact" element={<Contact />} />
            <Route path="privacy-policy" element={<PrivacyPolicy />} />
            <Route path="terms-and-conditions" element={<TermsAndConditions />} />
            <Route path="*" element={<Home />} />
          </Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
