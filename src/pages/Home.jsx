import React from "react";
import useSEO from "../hooks/useSEO";
import Hero from "../components/Hero";
import Marquee from "../components/Marquee";
import TrustBar from "../components/TrustBar";
import Services from "../components/Services";
import WhyChoose from "../components/WhyChoose";
import Destinations from "../components/Destinations";
import EligibilityChecker from "../components/EligibilityChecker";
import CostEstimator from "../components/CostEstimator";
import Testimonials from "../components/Testimonials";
import ResourcesPreview from "../components/ResourcesPreview";
import CTASection from "../components/CTASection";

export default function Home() {
  useSEO(
    "Global Travel & Visa Solutions",
    "Premium visa consultation, flight booking, hotel reservations, and travel planning for Nigerian travelers. 1,000+ served, 95% visa success rate."
  );
  return (
    <>
      <Hero />
      <Marquee />
      <TrustBar />
      <Services />
      <WhyChoose />
      <Destinations />
      <EligibilityChecker />
      <CostEstimator />
      <Testimonials />
      <ResourcesPreview />
      <CTASection />
    </>
  );
}
