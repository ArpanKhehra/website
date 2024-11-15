"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const QuickLinks = () => {
  // const links = ["About AKF", "Services", "Plans", "Calculator", "Blogs"];

  const links = [
    { label: "About AKF", href: "/about-us" },
    { label: "Services", href: "/services" },
    { label: "Plans", href: "/plans" },
    { label: "Blogs", href: "/blogs" },
  ];

  const calculatorLinks = [
    { label: "BMI", href: "/calculators/bmi" },
    { label: "BMR", href: "/calculators/bmr" },
    { label: "LBM", href: "/calculators/lbm" },
  ];
  // const containerRef = useRef(null);
  // const linksRef = useRef([]);

  // useEffect(() => {
  //   const container = containerRef.current;
  //   const linkElements = linksRef.current;

  //   gsap.set(linkElements, { x: 50, opacity: 0 });

  //   ScrollTrigger.create({
  //     trigger: container,
  //     start: "top bottom",
  //     onEnter: () => {
  //       gsap.to(linkElements, {
  //         x: 0,
  //         opacity: 1,
  //         duration: 0.5,
  //         stagger: 0.1,
  //         ease: "power3.out",
  //       });
  //     },
  //     onLeaveBack: () => {
  //       gsap.to(linkElements, {
  //         x: 50,
  //         opacity: 0,
  //         duration: 0.5,
  //         stagger: 0.1,
  //         ease: "power3.in",
  //       });
  //     },
  //   });

  //   return () => {
  //     ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
  //   };
  // }, []);

  return (
    <div className="flex flex-col lg:flex-row gap-6 items-center lg:items-start text-sm sm:text-base font-medium text-neutral-700">
      <nav
        // ref={containerRef}
        className="flex flex-col items-center lg:items-start text-sm sm:text-base font-medium text-neutral-700"
      >
        <h3 className="text-base sm:text-lg font-bold leading-loose text-gray-900">
          Quick Links
        </h3>
        <ul className="flex flex-col items-center lg:items-start mt-3 sm:mt-5 space-y-6">
          {/* {links.map((link, index) => (
          <li
            key={index}
            //  ref={(el) => (linksRef.current[index] = el)}
          >
            <a
              className="text-gray hover:text-gray-600"
              href={`#${link.toLowerCase()}`}
            >
              {link}
            </a>
          </li>
        ))} */}
          {links.map((link, index) => (
            <li key={index}>
              <a className="text-gray hover:text-gray-600" href={link.href}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <nav
        // ref={containerRef}
        className="flex flex-col items-center lg:items-start text-sm sm:text-base font-medium text-neutral-700"
      >
        <h3 className="text-base sm:text-lg font-bold leading-loose text-gray-900">
          Calculators
        </h3>
        <ul className="flex flex-col items-center lg:items-start mt-3 sm:mt-5 space-y-6">
          {/* {links.map((link, index) => (
          <li
            key={index}
            //  ref={(el) => (linksRef.current[index] = el)}
          >
            <a
              className="text-gray hover:text-gray-600"
              href={`#${link.toLowerCase()}`}
            >
              {link}
            </a>
          </li>
        ))} */}
          {calculatorLinks.map((link, index) => (
            <li key={index}>
              <a className="text-gray hover:text-gray-600" href={link.href}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default QuickLinks;
