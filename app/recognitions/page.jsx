"use client";

import CertificationsCarousel from "@/components/certifications-carousel";
import RecogCTA from "@/components/recog-cta";
import RecogIntro from "@/components/recognitions-intro";
import CertificationCard from "@/components/ui/certification-card";
import PlanCard from "@/components/ui/plan-card";
import Image from "next/image";
import React from "react";

const Recognitions = () => {
  const planData = [
    {
      image: "/cert-01.png",
      title: "Certificate in Nutrition",
      description:
        "Recognized for advanced expertise in personal training and program design.",
      organization: "Optimum Nutrition (ON)",
      issueDate: "2020",
    },
    {
      image: "/cert-02.png",
      title: "Certificate in International Personal Trainer",
      description:
        "Recognized for advanced expertise in personal training and program design.",
      organization: "National Academy of Sports Medicine (NASM)",
      issueDate: "2022",
    },
    {
      image: "/cert-03.png",
      title: "Certificate in continuous personal development",
      description:
        "Recognized for advanced expertise in personal training and program design.",
      organization: "ORIGYM",
      issueDate: "2021",
    },
    {
      image: "/cert-04.png",
      title: "Certificate in Mental Health First Aid",
      description:
        "Recognized for advanced expertise in personal training and program design.",
      organization: "National Council for Mental Wellbeing",
      issueDate: "2022",
    },
    {
      image: "/cert-05.png",
      title: "Certificate in sleep stress management and recovery coaching",
      description:
        "Recognized for advanced expertise in personal training and program design.",
      organization: "Precision Nutrition",
      issueDate: "2024",
    },
    {
      image: "/cert-06.png",
      title: "Certificate in COVID safe sport coaches",
      description:
        "Recognized for advanced expertise in personal training and program design.",
      organization: "Confederation of Australian Sport",
      issueDate: "2020",
    },
    {
      image: "/cert-07.png",
      title: "Certificate in Nutrition Sports Specialist",
      description:
        "Recognized for advanced expertise in personal training and program design.",
      organization: "The national exercise and trainer association NESTA",
      issueDate: "2023",
    },
    {
      image: "/cert-08.png",
      title: "Certified Sports Nutrioist",
      description:
        "Recognized for advanced expertise in personal training and program design.",
      organization: "American Fitness Professionals and Assocaites AFPA",
      issueDate: "2022",
    },
    {
      image: "/cert-09.png",
      title: "Certified Health Emergency Trainer",
      description:
        "Recognized for advanced expertise in personal training and program design.",
      organization: "World Health Organization (WHO)",
      issueDate: "2020",
    },
    {
      image: "/cert-10.png",
      title: "Certified in Nutrition Level 1",
      description:
        "Recognized for advanced expertise in personal training and program design.",
      organization: "Precision Nutrition",
      issueDate: "2018",
    },
    {
      image: "/cert-11.png",
      title: "Certified Advanced sports Nutrition",
      description:
        "Recognized for advanced expertise in personal training and program design.",
      organization: "American Sports and Fitness Association (ASFA)",
      issueDate: "2020",
    },
  ];

  const recogCTAData = {
    image: "/recog-cta-image.png",
    title: "Join Arpan Khehra Fitness",
    description: "Ready to transform your lives? Choose the online nutrition",
    buttonText: "Become a member",
    buttonHref: "/contact-us", // Add the appropriate link
  };

  return (
    <main className="relative overflow-hidden pb-8">
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
          Our Recognitions
        </h2>
        <p className="text-[0.75rem] font-lexend mt-7 md: text-lg leading-none text-center text-gray max-md:max-w-full">
          Explore the certifications and achievements that reflect our
          commitment to excellence in fitness and nutrition.
        </p>
      </section>

      <RecogIntro />
      <CertificationsCarousel />

      <div className="padding-container mx-auto">
        <h2 className="text-[1.5625rem] font-semibold leading-none text-primary md:text-[3.5rem] text-center">
          Recognitions
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 my-20">
          {planData.map((plan, index) => (
            <CertificationCard key={index} {...plan} />
          ))}
        </div>
      </div>
      <RecogCTA
        {...recogCTAData}
        containerClassName="my-20 mx-[30px] relative !m-auto max-w-xs sm:max-w-xl md:max-w-3xl lg:max-w-5xl"
        titleClassName="text-white font-lexend text-[1.125rem] md:text-[2rem] text-gray"
        descriptionClassName="text-white opacity-80 font-lato text-sm md:text-lg !mt-2 text-gray"
        buttonClassName="hover:bg-primary bg-[#FFF5E8] hover:text-white transition-colors duration-300"
        imageClassName="w-[440px] h-[380px]"
      />
    </main>
  );
};

export default Recognitions;
