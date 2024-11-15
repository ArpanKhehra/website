"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";

const journeySteps = [
  {
    title: "Free Consultation",
    content: [
      "60-minute consultation (phone)",
      "Discuss needs, goals, lifestyle habits, and diet",
      "Determine if we're a good fit to work together",
      "Prescribe the best path forward",
      "Determine if we're a good fit to work together",
      "Prescribe the best path forward",
      "Determine if we're a good fit to work together",
      "Prescribe the best path forward",
    ],
    image: "/free-consultation.jpg",
  },
  {
    title: "Health Assessment & Fitness Testing",
    content: [
      "Comprehensive health evaluation",
      "Fitness level assessment",
      "Identify areas for improvement",
    ],
    image: "/fitness-testing.jpg",
  },
  {
    title: "Lifestyle Assessment & Plan",
    content: [
      "Evaluate current lifestyle habits",
      "Develop personalized lifestyle improvement plan",
      "Set achievable goals",
    ],
    image: "/lifestyle-assesment.jpg",
  },
  {
    title: "Nutritional Analysis & Plan",
    content: [
      "Detailed nutritional assessment",
      "Create customized meal plans",
      "Address specific dietary needs",
    ],
    image: "/nutrition-analysis.jpg",
  },
  {
    title: "Eating Strategy Plan",
    content: [
      "Develop sustainable eating strategies",
      "Address emotional eating habits",
      "Provide meal timing recommendations",
    ],
    image: "/eating-strategy.jpg",
  },

  {
    title: "One-to-One Exercise",
    content: [
      "Personalized workout sessions",
      "Focus on proper form and technique",
      "Gradual progression of exercises",
    ],
    image: "/one-on-one-training.jpg",
  },
  {
    title: "Mindset Coaching",
    content: [
      "Address mental barriers",
      "Develop positive habits",
      "Provide motivation and support",
    ],
    image: "/mindset-coaching.jpg",
  },
];

export default function WellnessJourney() {
  const [activeStep, setActiveStep] = useState(0);

  const handleStepHover = (index) => {
    setActiveStep(index);
  };

  return (
    <section className="bg-white">
      <div className="padding-container mx-auto">
        <h2 className="text-[1.5625rem] md:text-[3.5rem] font-semibold leading-none text-primary text-center">
          7 Step Wellness Journey
        </h2>
        <p className="my-5 text-gray font-lato text-[0.75rem] mt-5 md:text-lg text-center">
          Discover the Power of Herbs for Men&apos;s Wellness
        </p>
        <div className="flex flex-col lg:flex-row gap-8 mt-10">
          <div className="w-full lg:w-1/2 overflow-y-auto pr-4 hide-scrollbar">
            {journeySteps.map((step, index) => (
              <div
                key={index}
                className={`overflow-hidden flex mb-4 transition-all duration-300 cursor-pointer border-[#FFCF91] border ${
                  activeStep === index
                    ? "bg-[#FFCF91] text-white"
                    : "bg-[#FFF5E8] text-black hover:bg-primary hover:text-white"
                } rounded-lg`}
                onMouseEnter={() => handleStepHover(index)}
              >
                <h3 className="overflow-hidden font-lexend text-[0.9375rem] md:text-xl leading-tight font-semibold gap-4 flex flex-row items-center text-black">
                  {" "}
                  <span className="p-4 inset inline-flex bg-white text-primary text-[0.9375rem] md:text-xl leading-tight">{`0${
                    index + 1
                  }`}</span>{" "}
                  {step.title}
                </h3>
              </div>
            ))}
          </div>
          <div className="w-full lg:w-1/2 lg:sticky lg:top-24">
            <div className="transition-opacity duration-300 ease-in-out">
              <div className="overflow-hidden mb-8">
                <img
                  src={journeySteps[activeStep].image}
                  alt={journeySteps[activeStep].title}
                  // width={500}
                  // height={400}
                  objectFit="contain" // Changed from "cover" to "contain"
                  objectPosition="center" // Center the image
                  style={{
                    width: "100%",
                    height: "100%", // Ensures it takes up the entire div
                  }}
                />
              </div>
              <h3 className="text-primary font-lexend text-[1.125rem] md:text-3xl font-semibold mb-4">
                {journeySteps[activeStep].title}
              </h3>
              <ul className="list-disc pl-5">
                {journeySteps[activeStep].content.map((item, index) => (
                  <li
                    key={index}
                    className="text-gray font-lexend text-[0.9375rem] md:text-lg mb-2"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
