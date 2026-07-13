import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import Preloader from "./components/Preloader";
import ScrollToTop from "./components/ScrollToTop";
import { initAnalytics } from "./utils/analytics";

import Home from "./pages/Home";
import Booking from "./pages/Booking";
import ServicesDirectory from "./pages/ServicesDirectory";
import ServiceDetail from "./pages/ServiceDetail";
import DestinationsDirectory from "./pages/DestinationsDirectory";
import CountryDetail from "./pages/CountryDetail";
import EligibilityPage from "./pages/EligibilityPage";
import About from "./pages/About";
import Contact from "./pages/Contact";
import FAQs from "./pages/FAQs";
import Gallery from "./pages/Gallery";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import ComingSoon from "./pages/ComingSoon";

export default function App() {
  useEffect(() => {
    initAnalytics();
  }, []);

  return (
    <BrowserRouter>
      <Preloader />
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/services" element={<ServicesDirectory />} />
          <Route path="/services/:slug" element={<ServiceDetail />} />
          <Route path="/destinations" element={<DestinationsDirectory />} />
          <Route path="/destinations/:slug" element={<CountryDetail />} />
          <Route path="/eligibility" element={<EligibilityPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faqs" element={<FAQs />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="*" element={<ComingSoon title="This page" />} />
        </Routes>
      </main>
      <Footer />
      <WhatsAppButton />
    </BrowserRouter>
  );
}
