"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Tabs, Tab } from "@/components/ui/tabs";

gsap.registerPlugin(ScrollTrigger);

const healthSections = [
  {
    id: "natural-remedies",
    title: "Natural Remedies",
  },
  {
    id: "guide-to-natural-supplement",
    title: "Guide to Natural Supplement",
  },
  {
    id: "detoxification-programs",
    title: "Detoxification Programs",
  },
  {
    id: "ligament-and-muscle",
    title: "Ligament and Muscle",
  },
  {
    id: "muscles-strengthen",
    title: "Muscles Strengthen",
  },
  {
    id: "stretching-management-technique",
    title: "Stretching Management Technique",
  },
  {
    id: "mobility-stress-management-technique",
    title: "Mobility Stress Management Technique",
  },
];

const tabContent = [
  {
    id: "rehabilitation-recovery",
    title: "Rehabilitation & Recovery",
    image: "/rehab-and-revcovery-banner.png",
    description:
      "Rehabilitation & Recovery at Arpan Khehra Fitness (AKF) is dedicated to assisting individuals in recovering from injuries and regaining strength, mobility, and overall health. AKF takes clients through a step-by-step process of restoring functionality, preventing future injuries, and achieving long-term well-being by integrating tailored rehabilitation exercises with proven healing methods. Our approach combines targeted workouts, flexibility training, and dietary advice to promote a complete and effective recovery, allowing clients to return to their active lifestyles stronger than before.",
  },
  {
    id: "body-lifestyle",
    title: "Body & Lifestyle",
    image: "/rehab-and-revcovery-banner.png",
    description:
      "Our Body & Lifestyle program at AKF focuses on holistic wellness, combining physical fitness with lifestyle optimization. We provide personalized workout plans, nutritional guidance, and stress management techniques to help you achieve a balanced and healthy lifestyle. Our approach emphasizes sustainable habits that promote long-term well-being and vitality.",
  },
  {
    id: "medical-conditions",
    title: "Medical Conditions",
    image: "/rehab-and-revcovery-banner.png",
    description:
      "At AKF, we understand that certain medical conditions require specialized attention in fitness and wellness routines. Our Medical Conditions program is designed to cater to individuals with specific health concerns, offering tailored exercise plans and nutritional advice that complement medical treatments. We work closely with healthcare professionals to ensure safe and effective fitness strategies for various medical conditions.",
  },
];

const HealthTransformTabs = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const title = titleRef.current;
    const description = descriptionRef.current;

    gsap.set([title, description], { y: 50, opacity: 0 });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
        once: true,
      },
    });

    tl.to(title, { y: 0, opacity: 1, duration: 0.5, ease: "power3.out" }).to(
      description,
      { y: 0, opacity: 1, duration: 0.5, ease: "power3.out" },
      "-=0.3"
    );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div ref={sectionRef} className="padding-container mx-auto py-12">
      <h2
        ref={titleRef}
        className="text-[1.5rem] md:text-[3.5rem] font-semibold leading-none text-primary text-center font-lexend"
      >
        Transform Your Health
      </h2>
      <p
        ref={descriptionRef}
        className="text-[0.75rem] mt-5 md:text-lg leading-none text-center text-gray max-md:max-w-full font-lato"
      >
        Choose the option that best suits your goals and let&apos;s get started
      </p>

      <div className="flex flex-col gap-8 mt-14">
        <div className="w-full flex flex-col-reverse">
          <Tabs
            allTabs={tabContent}
            defaultTab={tabContent[0].title}
            className="flex flex-col-reverse gap-8"
          >
            {tabContent.map((tab) => (
              <Tab key={tab.id} label={tab.title}>
                <AnimatedTabContent tab={tab} />
              </Tab>
            ))}
          </Tabs>
        </div>
      </div>
    </div>
  );
};

const AnimatedTabContent = ({ tab }) => {
  const listRef = useRef(null);
  const imageRef = useRef(null);
  const titleRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const listItems = listRef.current.children;
    const image = imageRef.current;
    const title = titleRef.current;
    const text = textRef.current;

    gsap.set(listItems, { x: -50, opacity: 0 });
    gsap.set(image, { x: 50, opacity: 0 });
    gsap.set(title, { x: 50, opacity: 0 });
    gsap.set(text, { x: 50, opacity: 0 });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: listRef.current,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
      },
    });

    tl.to(listItems, {
      x: 0,
      opacity: 1,
      duration: 0.5,
      stagger: 0.1,
      ease: "power3.out",
    })
      .to(
        image,
        { x: 0, opacity: 1, duration: 0.5, ease: "power3.out" },
        "-=0.3"
      )
      .to(
        title,
        { x: 0, opacity: 1, duration: 0.5, ease: "power3.out" },
        "-=0.3"
      )
      .to(
        text,
        { x: 0, opacity: 1, duration: 0.5, ease: "power3.out" },
        "-=0.3"
      );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="flex flex-row gap-14">
      <div className="w-1/2 px-8 py-4">
        <ul ref={listRef} className="space-y-2">
          {healthSections.map((section) => (
            <li
              key={section.id}
              className="py-2 hover:text-primary border border-b-primary border-t-0 border-l-0 border-r-0 text-2xl text-black"
            >
              {section.title}
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-4 flex flex-col gap-8 w-1/2">
        <div ref={imageRef} className="w-full">
          <Image
            src={tab.image}
            alt={tab.title}
            width={595}
            height={338}
            className="rounded-lg object-cover w-full h-64"
          />
        </div>
        <div className="w-full">
          <h3
            ref={titleRef}
            className="text-2xl font-semibold text-primary mb-4"
          >
            {tab.title}
          </h3>
          <div ref={textRef}>
            <ExpandableText description={tab.description} />
          </div>
        </div>
      </div>
    </div>
  );
};

const ExpandableText = ({ description }) => {
  const [isExpanded, setIsExpanded] = React.useState(false);
  const isLongText = description.length > 3700;

  return (
    <div>
      <p
        className={`text-lg text-gray-700 ${isExpanded ? "" : "line-clamp-4"}`}
      >
        {description}
      </p>
      {isLongText && (
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-primary mt-2"
        >
          {isExpanded ? "Read less" : "Read more"}
        </button>
      )}
    </div>
  );
};

export default HealthTransformTabs;
