"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Tabs = ({ allTabs, children, defaultTab }) => {
  const [activeTab, setActiveTab] = useState(defaultTab);
  const contentRef = useRef(null);

  console.log(activeTab);

  // Updated health sections for each tab
  const healthSectionsByTab = {
    "Rehabilitation & Recovery": [
      { id: "natural-remedies", title: "Natural Remedies" },
      {
        id: "guide-to-natural-supplement",
        title: "Guide to Natural Supplement",
      },
      { id: "detoxification-programs", title: "Detoxification Programs" },
      { id: "ligament-and-muscle", title: "Ligament and Muscle" },
      { id: "muscles-strengthen", title: "Muscles Strengthen" },
      {
        id: "stretching-management-technique",
        title: "Stretching Management Technique",
      },
      {
        id: "mobility-stress-management-technique",
        title: "Mobility Stress Management Technique",
      },
    ],
    "Body & Lifestyle": [
      { id: "photoshoot-look", title: "Photoshoot Look" },
      { id: "relationship-with-food", title: "Improve Relationship with Food" },
      { id: "healthy-eating", title: "Intuitive and Healthy Eating" },
      { id: "pre-post-natal", title: "Pre & Post-Natal Nutrition" },
      { id: "athlete-training", title: "Athlete Training Programs" },
      { id: "brain-wellness", title: "Brain Wellness" },
      { id: "superfoods", title: "Incorporating Superfoods" },
      { id: "performance-enhancement", title: "Performance Enhancement" },
    ],
    "Medical Conditions": [
      { id: "gut-health", title: "Gut Health" },
      { id: "ibs", title: "IBS" },
      { id: "diabetes", title: "Diabetes" },
      { id: "pcos", title: "PCOS" },
      {
        id: "hormonal-imbalance",
        title: "Hormonal Imbalance (Thyroid, Insulin)",
      },
      { id: "cholesterol", title: "Cholesterol" },
      { id: "blood-pressure", title: "Blood Pressure" },
    ],
  };

  const activeContent = allTabs.find((tab) => tab.title === activeTab);
  const healthSections = healthSectionsByTab[activeTab] || [];

  useEffect(() => {
    if (contentRef.current) {
      const listItems = contentRef.current.querySelectorAll("li");
      const image = contentRef.current.querySelector(".image-container");
      const title = contentRef.current.querySelector("h3");
      const text = contentRef.current.querySelector(".expandable-text");

      gsap.set(listItems, { x: -50, opacity: 0 });
      gsap.set([image, title, text], { x: 50, opacity: 0 });

      ScrollTrigger.batch(listItems, {
        onEnter: (elements) => {
          gsap.to(elements, {
            x: 0,
            opacity: 1,
            stagger: 0.1,
            duration: 0.5,
            ease: "power3.out",
            overwrite: true,
          });
        },
        // onLeave: (elements) => {
        //   gsap.set(elements, { x: -50, opacity: 0, overwrite: true });
        // },
        // onEnterBack: (elements) => {
        //   gsap.to(elements, {
        //     x: 0,
        //     opacity: 1,
        //     stagger: 0.1,
        //     duration: 0.5,
        //     ease: "power3.out",
        //     overwrite: true,
        //   });
        // },
        // onLeaveBack: (elements) => {
        //   gsap.set(elements, { x: -50, opacity: 0, overwrite: true });
        // },
      });

      gsap.to([image, title, text], {
        x: 0,
        opacity: 1,
        duration: 0.5,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: contentRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      });

      return () => {
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      };
    }
  }, [activeTab]);

  return (
    <div className="flex flex-col gap-4">
      <div className="grid w-full grid-cols-2 gap-2 md:gap-0 md:grid-cols-3 items-center justify-center">
        {allTabs.map((tab, index) => (
          <button
            key={tab.title}
            onClick={() => setActiveTab(tab.title)}
            className={`text-black rounded-md font-lato h-full lg:h-auto px-3 py-2 text-center lg:px-8 lg:py-6 text-[0.75rem] md:text-[1.5625rem] font-semibold ${
              activeTab === tab.title
                ? "bg-[#FFCF91]"
                : "text-black bg-[#FFF5E8]"
            } ${
              // Apply col-span-2 to the last button on small screens and col-span-1 on larger screens
              index === allTabs.length - 1 ? "col-span-2 md:col-span-1" : ""
            }`}
          >
            {tab.title}
          </button>
        ))}
      </div>
      {/* Render the Active Tab Content */}
      <div className="mb-8 w-full flex flex-row padding">
        {activeContent && (
          <div
            ref={contentRef}
            className="flex flex-col-reverse lg:flex-row gap:4 md:gap-14"
          >
            <div className="w-full lg:w-1/2 px-0 lg:px-8 py-4">
              <ul className="space-y-5">
                {healthSections.map((section) => (
                  <li
                    key={section.id}
                    className="py-2 hover:text-primary border border-b-primary border-t-0 border-l-0 border-r-0 text-sm md:text-2xl text-black font-lato font-semibold"
                  >
                    {section.title}
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-4 flex flex-col sm:flex-row lg:flex-col gap-8 w-full lg:w-1/2">
              <div className="w-full image-container">
                <Image
                  src={activeContent.image}
                  alt={activeContent.title}
                  width={595}
                  height={338}
                  className="rounded-lg object-cover w-full h-64"
                />
              </div>
              <div className="w-full">
                <h3 className="text-xl md:text-[1.75rem] font-semibold text-primary mb-4 font-lato">
                  {activeContent.title}
                </h3>
                <div className="expandable-text">
                  <ExpandableText description={activeContent.description} />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const Tab = ({ children }) => {
  return <div>{children}</div>;
};

const ExpandableText = ({ description }) => {
  const [isExpanded, setIsExpanded] = React.useState(false);
  const isLongText = description.length > 3700;

  return (
    <div>
      <p
        className={`text-sm md:text-lg font-lato text-gray ${
          isExpanded ? "" : "line-clamp-20"
        }`}
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

export { Tabs, Tab };
