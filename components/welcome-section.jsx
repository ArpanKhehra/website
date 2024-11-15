"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Button from "./ui/button";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function WelcomeSection() {
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
      once: true, // Ensures animation only runs once
      onEnter: animateIn, // Animation plays once on entry
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="flex flex-col justify-center items-center padding-container bg-white"
    >
      <div className="w-full max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          <div
            ref={imageRef}
            className="flex flex-col items-center justify-center w-full lg:w-1/2"
          >
            <Image
              src="/intro-banner.png"
              alt="Fitness Team"
              width={573}
              height={452}
              className="rounded-lg shadow-lg w-full h-auto object-cover"
            />
            {/* <Image
              src="/intro-banner.jpg"
              alt="Fitness Team"
              width={573}
              height={452}
              className="rounded-lg shadow-lg w-full h-auto object-cover"
            /> */}
          </div>
          <div
            ref={contentRef}
            className="flex flex-col w-full lg:w-1/2 items-start justify-center"
          >
            <div className="flex flex-col items-start self-stretch">
              <h2 className="text-2xl sm:text-3xl font-bold text-primary font-lexend w-full text-center md:text-left">
                Welcome to
              </h2>
              <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold leading-tight text-dark mt-2 font-lexend w-full text-center md:text-left">
                Arpan Khehra Fitness
              </h1>
              <p className="mt-3 text-[0.6875rem] md:text-lg sm:text-xl font-semibold leading-snug text-primary font-lexend text-center md:text-left w-full">
                Transforming Lives Through Fitness and Nutrition
              </p>
              <p className="mt-4 text-sm md:text-base sm:text-lg leading-relaxed text-gray font-lato text-center md:text-left w-full">
                With over 8 years of dedicated experience in the field of body
                nutrition personal training is focused on bringing the best in
                you. Arpan is a renowned expert in transforming lives through
                fitness. Having successfully assisted over 1000 clients, Arpan
                specializes in crafting personalized diet plans and rigorous
                training regimes tailored to your unique goals.
              </p>
              <Button
                href={"/contact-us"}
                variant="primary"
                className="mt-6 bg-primary text-white px-6 py-2 rounded-md text-[0.75rem] md:text-[1rem] font-medium hover:bg-primary-dark transition-colors duration-300 font-lato m-auto md:ml-0 mt-4"
              >
                KNOW MORE
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
