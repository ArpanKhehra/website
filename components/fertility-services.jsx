"use client";
import React from "react";
import FertilityCard from "./fertility-card";
import Button from "./ui/button";
import HerbalCard from "./ui/herbal-card";
import CTAGeneral from "@/components/ui/cta-general";

const fertilityData = [
  {
    imageSrc: "/ornament-6.svg",
    iconSrc: "/conceive.svg",
    title: "Conceive Naturally",
    subtitle: "Enhance Your Conception Journey",
    description:
      "Our service focuses on holistic herbal remedies to support natural conception. We tailor our approach to balance hormones and enhance overall reproductive health.",
    benefits: [
      "Hormonal balance support",
      "Improved reproductive function",
      "Personalized herbal blends",
      "Comprehensive wellness assessment",
    ],
  },
  {
    imageSrc: "/ornament-6.svg",
    iconSrc: "/dna.svg",
    title: "Enhance Male Fertility",
    subtitle: "Boost Vitality and Sperm Production",
    description:
      "Our formulations are designed to boost male fertility by promoting healthy sperm production and enhancing reproductive vitality.",
    benefits: [
      "Increased sperm production",
      "Enhanced sperm quality",
      "Natural vitality boosters",
      "Customized supplement plans",
    ],
  },
  {
    imageSrc: "/ornament-6.svg",
    iconSrc: "/fertility.svg",
    title: "Support Sperm Health",
    subtitle: "Improve Quality and Count",
    description:
      "Our natural supplements are rich in antioxidants and essential nutrients to support and improve sperm health, including quality, motility, and count.",
    benefits: [
      "Rich in antioxidants",
      "Enhanced sperm motility",
      "Improved sperm count",
      "Comprehensive nutritional support",
    ],
  },
  {
    imageSrc: "/ornament-6.svg",
    iconSrc: "/boost-sex.svg",
    title: "Boost Sex Drive",
    subtitle: "Reignite Your Passion",
    description:
      "Our specialized herbal blends are crafted to reignite passion and enhance libido naturally, improving your overall sexual wellness.",
    benefits: [
      "Increased libido",
      "Enhanced sexual desire",
      "Natural passion boosters",
      "Personalized herbal formulations",
    ],
  },
];

const scienceData = [
  {
    image: "/herbal.svg",
    title: "Herbal Efficacy",
    description:
      "Our herbal remedies are backed by scientific research and traditional knowledge, ensuring their effectiveness in addressing various health concerns.",
    buttonText: "Learn More",

    points: [
      "Evidence-based formulations",
      "Proven traditional remedies",
      "Ongoing clinical research",
      "Documented case studies",
    ],
  },
  {
    image: "/quality.svg",
    title: "Quality and Purity",
    description:
      "We source the highest quality herbs and use advanced extraction methods to ensure the purity and potency of our formulations.",
    buttonText: "Learn More",
    points: [
      "Rigorous quality control",
      "Organic sourcing when possible",
      "Advanced extraction techniques",
      "Third-party testing",
    ],
  },
  {
    image: "/solutions.svg",
    title: "Personalized Solutions",
    description:
      "Our team of experts creates tailored herbal blends to address your specific health needs and goals.",
    buttonText: "Learn More",
    points: [
      "Individual health assessments",
      "Customized herbal formulations",
      "Ongoing support and adjustments",
      "Holistic approach to wellness",
    ],
  },
];

const recogCTAData = {
  image: "/random-cta.png",
  title: "Revitalize Your Health",
  description:
    "Explore AKF's herbal solutions without worrying about any side effects.",
  buttonText: "Talk to us now",
  buttonHref: "/contact-us", // Add the appropriate link
};

function FertilityServices() {
  return (
    <>
      <section className="padding-container">
        <div className="w-full flex flex-col justify-center items-center mb-8">
          <h2 className="text-2xl md:text-4xl font-semibold text-primary mb-4 font-lexend text-center">
            Explore Our Specialized Herbal Solutions
          </h2>
          <p className="md:text-base text-[0.75rem] text-center text-gray font-lato mt-5">
            AKF can help you recover and boost vitality without any side
            effects?
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-4 max-w-7xl items-start m-auto mt-7">
          {fertilityData.map((data, index) => (
            <FertilityCard key={index} {...data} />
          ))}
        </div>
        <div className="flex justify-center mt-12">
          <Button
            href={"/contact-us"}
            variant="primary"
            size="lg"
            className="text-center text-[0.75rem] md:text-base rounded-md uppercase font-bold text-white bg-primary hover:bg-primary-dark transition-transform duration-300 transform hover:scale-105 hover:shadow-[0px_8px_40px_rgba(0,0,0,0.15)]"
          >
            GET YOUR PERSONALIZED REMEDY TODAY
          </Button>
        </div>
      </section>
      <hr className="bg-primary text-primary m-auto my-4 md:my-16 margin-container px-4" />
      <section className="padding-container">
        <div className="w-full flex flex-col justify-center items-center mb-8">
          <h2 className="text-2xl md:text-4xl font-semibold text-primary mb-4 font-lexend text-center">
            The Science Behind Our Herbal Remedies
          </h2>
          <p className="md:text-base text-[0.75rem] text-center text-gray font-lato mt-5">
            Understanding the science behind herbal remedies helps you
            appreciate the effectiveness and benefits of our formulations.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-7 mx-auto">
          {scienceData.map((item, index) => (
            <HerbalCard key={index} {...item} />
          ))}
        </div>
      </section>
      <CTAGeneral
        {...recogCTAData}
        containerClassName="my-20 bg-white border border-primary rounded-md flex-row-reverse"
        titleClassName="text-primary"
        descriptionClassName="text-gray text-left"
        buttonClassName="rounded-md bg-primary hover:bg-primary text-white transition-colors duration-300"
        imageClassName="flex flex-row items-center justify-end"
      />
    </>
  );
}

export default FertilityServices;
