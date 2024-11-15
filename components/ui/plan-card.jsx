"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);
const PlanCard = ({
  image,
  title,
  description,
  buttonText,
  buttonColor,
  index,
  viewMore = true, // Default is true, so the button shows unless explicitly set to false
}) => {
  const cardRef = useRef(null);

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
    <article
      ref={cardRef}
      className="z-10 overflow-hidden flex flex-col w-full max-md:ml-0 rounded-2xl max-md:w-full group"
    >
      <div className="overflow-hidden flex flex-col grow pb-5 md:pb-9 w-full bg-white shadow-[0px_0px_40px_rgba(0,0,0,0.12)] text-zinc-800 transition-all duration-300 transform group-hover:scale-105 hover:shadow-[0px_0px_40px_rgba(0,0,0,0.12)]">
        {/* Image wrapper with fixed height */}
        <div className="relative w-full h-[287px]">
          <img
            loading="lazy"
            src={image}
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex flex-col items-start px-8 mt-8 max-md:px-5">
          <h3 className="text-[1.125rem] md:text-2xl font-semibold leading-tight text-neutral font-lexend">
            {title}
          </h3>
          <p className="self-stretch mt-4 text-[0.9375rem] md:text-xl md:leading-8 text-neutral font-lato">
            {description}
          </p>
          {/* Conditionally render the button based on the viewMore prop */}
          {viewMore && (
            <Link
              href={"/contact-us"}
              className={`mt-2 md:mt-10 text-[0.75rem] md:text-base font-medium text-center transition-colors duration-300 ${buttonColor} group-hover:text-primary font-lato text-primary`}
            >
              {buttonText}
            </Link>
          )}
        </div>
      </div>
    </article>
  );
};

export default PlanCard;
