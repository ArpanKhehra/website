"use client";

import React from "react";
import FertilityServices from "../../components/fertility-services";
import SecondaryCtA from "@/components/secondary-cta";
import Image from "next/image";
import SpecialTestimonialSection from "@/components/special-testimonial";
import FaqSection from "@/components/faq-section";
import Blog from "@/components/blogs";
import { servicesImages } from "@/utilities/data";
import ServicesCarousel from "@/components/services-carousel";

const Services = () => {
  const aboutUsContent = {
    header: {
      title: "Services",
      subtitle: "Train Smart, Eat Well, Live Better?",
    },
    images: {
      headerDecoration: "/ornament-dots.svg",
      mainImage: "/about-intro.svg",
      decorationExplosive: "/ornament-dots-explosive.svg",
    },
  };
  return (
    <main className="relative overflow-hidden">
      <section className="relative overflow-hidden py-20 md:py-32 px-20 bg-orange-50 max-md:px-5 !pb-12">
        <div className="hidden md:inline absolute top-0 right-0 z-10 w-[105px] aspect-[0.31]">
          <Image
            src={aboutUsContent.images.headerDecoration}
            alt="Decorative element"
            layout="fill"
            objectFit="contain"
            priority
          />
        </div>
        <div className="hidden md:inline absolute top-0 -left-4 z-10 w-[105px] aspect-[0.31]">
          <Image
            src={aboutUsContent.images.headerDecoration}
            alt="Decorative element"
            layout="fill"
            objectFit="contain"
            priority
          />
        </div>
        <h2 className="text-[1.5625rem] font-semibold leading-none text-primary md:text-[3.5rem] text-center md:mt-10 font-lexend">
          {aboutUsContent.header.title}
        </h2>
        <p className="text-[0.75rem] font-lexend mt-7 md: text-lg leading-none text-center text-gray max-md:max-w-full">
          {aboutUsContent.header.subtitle}
        </p>
      </section>
      <SecondaryCtA buttonText="Get Free Consultation" className="!my-0" />
      <FertilityServices />
      <FaqSection />
      {/* <SpecialTestimonialSection /> */}
      <ServicesCarousel testimonials={servicesImages} />
      <Blog />
    </main>
  );
};

export default Services;
