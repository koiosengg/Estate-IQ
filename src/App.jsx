import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Core from "./components/Core";
import Modular from "./components/Modular";
import PropertyHealthReport from "./components/PropertyHealthReport";
import Contact from "./components/Contact";
import ScrollToTop from "./components/ScrollToTop";

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
            <Route path="contact" element={<Contact />} />
            <Route path="*" element={<Home />} />
          </Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
