import React from "react";
import Blog from "@/components/blogs";
import CertificationsCarousel from "@/components/certifications-carousel";
import ClientTestimonials from "@/components/client-testimonials";
import Gallery from "@/components/gallery";
import Hero from "@/components/hero";
import MainCTA from "@/components/main-cta";
import WelcomeSection from "@/components/welcome-section";
import Navbar from "@/components/navbar";
import Plans from "@/components/plans";
import Pricing from "@/components/pricing";
import SecondaryCtA from "@/components/secondary-cta";
import Specialities from "@/components/specialities";
import HealthTransformTabs from "@/components/health-transform-tabs";
import AboutUs from "@/components/aboutus";
import FaqSection from "@/components/faq-section";
import WPTestimonialSection from "@/components/wp-testimonial-section";

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      <Hero />
      <CertificationsCarousel />
      <WelcomeSection />
      <Gallery />
      <Specialities />
      <Plans />
      <HealthTransformTabs />

      <SecondaryCtA />
      <Pricing />
      <AboutUs />
      <MainCTA />
      {/* <ClientTestimonials /> */}
      <WPTestimonialSection />
      <FaqSection />
      <Blog />
    </main>
  );
}
