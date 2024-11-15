"use client";

import React from "react";
import Image from "next/image";
import InlineImageAndContent from "../../components/ui/inline-image-and-content";
import Plans from "@/components/plans";
import PersonalTrainingSection from "../../components/personal-training-section";
import TextCTA from "../../components/ui/text-cta";
const PlansPage = () => {
  const ctaData = {
    title: "Ready to Transform Your Health and Fitness?",
    buttonText: "Become a member",
    buttonHref: "/contact-us", // Add the appropriate link
  };
  const plansIntroContent = {
    header: {
      title: "About AKF",
      subtitle: "Reform your Health with Arpan Khehra Fitness",
    },
    mainContent: {
      sectionTitle: "Our Best Tailored Plans",
      title:
        "At AKF, we offer a variety of comprehensive plans designed to meet your unique fitness and nutrition needs.",

      description:
        "Our goal is to provide personalized support and expert guidance to help you achieve your health and fitness goals. Our goal is to provide personalized support and expert guidance to help you achieve your health and fitness goals.",
    },
    images: {
      mainImage: "/tailored-plans.png",
    },
  };
  return (
    <main className="relative overflow-hidden mb-16">
      <section className="relative overflow-hidden py-20 md:py-32 px-20 bg-orange-50 max-md:px-5 !pb-12">
        <div className="hidden md:inline absolute top-0 right-0 z-10 w-[105px] aspect-[0.31]">
          <Image
            src="/ornament-dots.svg"
            alt="Decorative element"
            layout="fill"
            objectFit="contain"
            priority
          />
        </div>
        <div className="hidden md:inline absolute top-0 -left-4 z-10 w-[105px] aspect-[0.31]">
          <Image
            src="/ornament-dots.svg"
            alt="Decorative element"
            layout="fill"
            objectFit="contain"
            priority
          />
        </div>
        <h2 className="text-[1.5625rem] font-semibold leading-none text-primary md:text-[3.5rem] text-center mt-10 font-lexend">
          Our Plans
        </h2>
        <p className="text-[0.75rem] font-lexend mt-7 md: text-lg leading-none text-center text-gray max-md:max-w-full">
          Ready to transform your lives? Choose the online nutrition
        </p>
      </section>
      <InlineImageAndContent
        sectionTitleClassName="text-left text-3xl lg:text-5xl"
        titleClassName="mt-10 text-2xl lg:text-2xl"
        content={plansIntroContent.mainContent}
        images={plansIntroContent.images}
      />
      <Plans viewMore={false} />
      <PersonalTrainingSection />
      <TextCTA ctaData={ctaData} />
    </main>
  );
};

export default PlansPage;
