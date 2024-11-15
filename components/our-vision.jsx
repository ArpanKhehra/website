"use client";
import React from "react";
import Image from "next/image";

const visionData = [
  {
    title: "Inspire Peak Performance:",
    content: "Help people reach their fitness goals, and loose weight.",
  },
  {
    title: "Make Wellness a Habit:",
    content:
      "Encourage a daily routine that includes fitness and mental well-being.",
  },
  {
    title: "Grow a Global Community:",
    content: "Build a supportive fitness community for people worldwide.",
  },
  {
    title: "Lead with Innovation:",
    content: "Set new trends by using the latest fitness techniques.",
  },
];

const missionData = [
  {
    title: "Personalized Fitness:",
    content:
      "Create workout and nutrition plans tailored to each person's goals.",
  },
  {
    title: "Complete Wellness:",
    content: "Focus on physical fitness, healthy eating, and mental health.",
  },
  {
    title: "Empowerment:",
    content:
      "Give clients the tools and support to take charge of their health journey.",
  },
  {
    title: "Commitment to Quality:",
    content:
      "Stay updated with the latest trends to deliver top-notch results.",
  },
];

function VisionMission() {
  return (
    <section className="flex flex-col rounded-xl padding-container">
      <div className="flex flex-row px-4 md:px-14 py-4 md:py-[3.75rem] w-full bg-light rounded-3xl max-md:px-5 max-md:max-w-full max-md:flex-col">
        {/* Vision Column */}
        <div className="flex flex-col w-1/2 pr-8 max-md:w-full max-md:pr-0">
          <div className="flex items-center mb-2 md:mb-6">
            <Image
              src="/vision-icon.svg"
              alt="Vision"
              width={50}
              height={35}
              className="mr-4 h-6 w-6 md:h-16 md:w-12"
            />
            <h2 className="text-2xl lg:text-5xl font-semibold text-black">
              Our Vision
            </h2>
          </div>
          <div className="text-xs sm:text-base md:text-lg lg:text-xl font-lato font-medium leading-relaxed text-gray">
            <p className="mb-4 font-lato">
              At Arpan Khehra Fitness, our vision is to:
            </p>
            <ul className="space-y-4 list-disc ml-3 md:ml-8">
              {visionData.map((item, index) => (
                <li key={index} className="text-gray font-lato">
                  <strong className="font-lato">{item.title}</strong>{" "}
                  {item.content}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Separator */}
        <div className="w-[2px] bg-primary mx-8 max-md:hidden"></div>

        {/* Mission Column */}
        <div className="flex flex-col w-1/2 pl-8 max-md:w-full max-md:pl-0 max-md:mt-8">
          <div className="flex items-center mb-2 md:mb-6">
            <Image
              src="/mission-icon.svg"
              alt="Mission"
              width={75}
              height={70}
              className="mr-4 h-6 w-6 md:h-16 md:w-12"
            />
            <h2 className="text-2xl lg:text-5xl font-semibold text-black">
              Our Mission
            </h2>
          </div>
          <div className="text-xs sm:text-base md:text-lg lg:text-xl font-medium leading-9 text-gray">
            <p className="mb-4 font-lato">
              At Arpan Khehra Fitness, our mission is to:
            </p>
            <ul className="space-y-4 list-disc ml-3 md:ml-8 font-lato">
              {missionData.map((item, index) => (
                <li
                  key={index}
                  className="text-gray font-lato text-xs sm:text-base md:text-lg lg:text-xl"
                >
                  <strong className="font-lato">{item.title}</strong>{" "}
                  {item.content}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default VisionMission;
