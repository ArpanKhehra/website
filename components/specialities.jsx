"use client";
import React, { useRef, useEffect } from "react";
import SpecialtyCard from "./ui/speciality-card";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
const specialties = [
  {
    icon: "/nutrition-icon.png",
    title: "Nutrition",
    description:
      "Achieve the best of your health and physique with expert nutritionist Arpan.",
    bgColor: "bg-orange-100",
  },
  {
    icon: "/disease-management-icon.png",
    title: "Disease Management",
    description:
      "AKF provides comprehensive plans to help you manage and recover from diseases.",
    bgColor: "bg-orange-100",
  },
  {
    icon: "/weight-management-icon.png",
    title: "Weight Management",
    description:
      "Reach your ideal weight with Arpan's customized diet and workout plans.",
    bgColor: "bg-orange-400 bg-opacity-10",
  },
  {
    icon: "/health-icon.png",
    title: "Health Transformation",
    description:
      "Transform your health with Arpan's personalized diet and workout plans.",
    bgColor: "bg-orange-400 bg-opacity-10",
  },
];

export default function Specialities() {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const image = imageRef.current;
    const content = contentRef.current;

    const animateIn = () => {
      gsap.fromTo(
        image,
        { x: -100, opacity: 0 },
        { x: 0, opacity: 1, duration: 1, ease: "power3.out" }
      );
      gsap.fromTo(
        content,
        { x: 100, opacity: 0 },
        { x: 0, opacity: 1, duration: 1, ease: "power3.out" }
      );
    };

    const animateOut = () => {
      gsap.set(image, { x: -100, opacity: 0 });
      gsap.set(content, { x: 100, opacity: 0 });
    };

    ScrollTrigger.create({
      trigger: section,
      start: "top 80%",
      end: "bottom 20%",
      once: true,
      onEnter: animateIn,
      // onEnterBack: animateIn,
      // onLeave: animateOut,
      // onLeaveBack: animateOut,
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section ref={sectionRef} className="padding-container">
      <div className="">
        <div className="flex flex-col-reverse lg:flex-row gap-8 lg:gap-16 mb-6 md:mb-12">
          {/* This is image block main  */}

          <p className="block md:hidden text-[0.9375rem] md:text-2xl text-center lg:text-left sm:text-2xl font-extrabold text-dark font-lato">
            We&apos;re The Ones Who Care
          </p>
          <div ref={imageRef} className="">
            <Image
              loading="lazy"
              src="/special-banner.png"
              alt="Our Specialties illustration"
              className="bject-cover rounded-2xl"
              width={580}
              height={377}
            />
          </div>
          {/* This is first content block  */}
          <div
            ref={contentRef}
            className="w-full lg:w-1/2 flex flex-col justify-center"
          >
            <h2 className="text-[1.5625rem] text-center lg:text-left font-semibold leading-none text-primary md:text-[3.5rem] font-lexend">
              Our Specialties
            </h2>
            <p className="hidden md:block text-[0.9375rem] md:text-2xl text-center lg:text-left sm:text-2xl font-extrabold text-dark my-4 font-lato">
              We&apos;re The Ones Who Care
            </p>
            <p className="text-[0.75rem] md:text-lg text-gray font-lato text-center lg:text-left my-4 md:my-0">
              AKF tries to provide you with the most customized plans that are
              right for you.
            </p>
          </div>
        </div>
        {/* flex flex-col lg:flex-row flex-wrap */}
        <div className="-mx-2 grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4">
          {specialties.map((specialty, index) => (
            <SpecialtyCard key={index} {...specialty} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
