"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Policies = () => {
  // const policies = ["Blog", "Newsletter", "Help Centre", "Careers", "Support"];

  const policies = [
    { label: "Terms & Condition", href: "/terms" },
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Refund Policy", href: "/refund-policy" },
  ];
  // const containerRef = useRef(null);
  // const policiesRef = useRef([]);

  // useEffect(() => {
  //   const container = containerRef.current;
  //   const policyElements = policiesRef.current;

  //   gsap.set(policyElements, { x: -50, opacity: 0 });

  //   ScrollTrigger.create({
  //     trigger: container,
  //     start: "top bottom",
  //     onEnter: () => {
  //       gsap.to(policyElements, {
  //         x: 0,
  //         opacity: 1,
  //         duration: 0.5,
  //         stagger: 0.1,
  //         ease: "power3.out",
  //       });
  //     },
  //     onLeaveBack: () => {
  //       gsap.to(policyElements, {
  //         x: -50,
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
    <nav
      // ref={containerRef}
      className="flex flex-col items-center lg:items-start text-sm sm:text-base font-medium text-neutral-700"
    >
      <h3 className="text-base sm:text-lg font-bold leading-loose text-gray-900">
        Policies
      </h3>
      <ul className="flex flex-col items-center lg:items-start mt-3 sm:mt-5 space-y-6">
        {policies.map((policy, index) => (
          <li
            key={index}
            //  ref={(el) => (policiesRef.current[index] = el)}
          >
            <a className="text-gray hover:text-gray-600" href={policy.href}>
              {policy.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Policies;
