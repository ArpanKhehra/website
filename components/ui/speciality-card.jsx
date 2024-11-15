"use client";

import React, { useRef, useEffect } from "react";
import openLink from "../../utilities/open-link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const SpecialtyCard = ({ icon, title, description, bgColor, index }) => {
  const isPrimary = bgColor === "bg-primary";
  const cardRef = useRef(null);
  // Create hover image path by adding -hover before the extension
  const hoverIcon = icon.replace(".png", "-hover.png");

  useEffect(() => {
    const card = cardRef.current;

    gsap.set(card, { y: 50, opacity: 0 });

    ScrollTrigger.create({
      trigger: card,
      start: "top bottom-=100",
      once: true,
      onEnter: () =>
        gsap.to(card, {
          y: 0,
          opacity: 1,
          duration: 0.5,
          ease: "power3.out",
          delay: index * 0.1,
        }),
      // onLeave: () =>
      //   gsap.to(card, { y: 50, opacity: 0, duration: 0.5, ease: "power3.in" }),
      // onEnterBack: () =>
      //   gsap.to(card, {
      //     y: 0,
      //     opacity: 1,
      //     duration: 0.5,
      //     ease: "power3.out",
      //     delay: index * 0.1,
      //   }),
      // onLeaveBack: () =>
      //   gsap.to(card, { y: 50, opacity: 0, duration: 0.5, ease: "power3.in" }),
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [index]);

  return (
    <article ref={cardRef} className="z-20 flex flex-col w-full">
      <div className="flex flex-col justify-between items-start p-3 md:p-4 h-full bg-white rounded-[16px] border border-solid border-[rgba(230,232,236,0.50)] transition-all duration-300 group hover:shadow-[0px_12px_56px_0px_rgba(6,28,61,0.12)]">
        <div
          className={`flex items-center justify-center w-12 h-12 md:w-16 md:h-16 ${bgColor} rounded-lg transition-all duration-300`}
        >
          <img
            loading="lazy"
            src={icon}
            alt={`${title} icon`}
            className={`w-6 h-6 md:w-8 md:h-8 object-contain transition-all duration-300`}
            // className={`w-6 h-6 md:w-8 md:h-8 object-contain transition-all duration-300
            //   ${
            //     isPrimary
            //       ? "brightness-0 invert"
            //       : "group-hover:brightness-0 group-hover:invert"
            //   }`}
            style={{
              width: "100%",
              height: "100%",
            }}
          />
          {/* <img
            loading="lazy"
            src={icon}
            alt={`${title} icon`}
            className="w-6 h-6 md:w-8 md:h-8 object-contain transition-all duration-300 group-hover:[src:var(--hover-src)]"
            style={{ "--hover-src": `url(${hoverIcon})` }}
            onMouseEnter={(e) => (e.currentTarget.src = hoverIcon)}
            onMouseLeave={(e) => (e.currentTarget.src = icon)}
          /> */}
          {/* <img
            loading="lazy"
            src={icon}
            alt={`${title} icon`}
            className="w-6 h-6 md:w-8 md:h-8 object-contain transition-all duration-300"
            onLoad={() => {
              // Preload hover image
              const img = new Image();
              img.src = hoverIcon;
            }}
            data-hover={hoverIcon}
          /> */}
        </div>
        <div className="flex flex-col self-stretch pt-1 mt-2 md:mt-5 w-full">
          <h3 className="text-[0.8125rem] md:text-lg font-medium leading-none text-black font-lexend">
            {title}
          </h3>
          <p className="mt-3 text-xs md:text-sm leading-5 text-gray font-lato">
            {description}
          </p>
        </div>
        <button className="flex gap-2 items-center mt-5 text-xs md:text-sm font-semibold leading-none text-primary group-hover:text-primary transition-colors duration-300">
          <span
            onClick={() => {
              openLink("/contact-us", true);
            }}
            className="relative inline-flex items-center justify-start gap-1 md:gap-2 font-lato"
          >
            Learn More
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="transition-transform duration-300 group-hover:translate-x-1"
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
            <span className="absolute bottom-0 md:-bottom-2 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
          </span>
        </button>
      </div>
    </article>
  );
};

export default SpecialtyCard;
