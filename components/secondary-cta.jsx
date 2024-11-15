"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Button from "./ui/button";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

export default function SecondaryCtA({
  buttonText = "Explore More",
  className,
}) {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);
  const buttonRef = useRef(null);
  const imagesRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const title = titleRef.current;
    const description = descriptionRef.current;
    const button = buttonRef.current;
    const images = imagesRef.current;

    const animateIn = () => {
      gsap.to([title, description], {
        x: 0,
        opacity: 1,
        duration: 0.5,
        stagger: 0.2,
        ease: "power3.out",
      });
      gsap.to([button, images], {
        x: 0,
        opacity: 1,
        duration: 0.5,
        stagger: 0.2,
        ease: "power3.out",
        delay: 0.3,
      });
    };

    const animateOut = () => {
      gsap.to([title, description], {
        x: -50,
        opacity: 0,
        duration: 0.5,
        stagger: 0.2,
        ease: "power3.in",
      });
      gsap.to([button, images], {
        x: 50,
        opacity: 0,
        duration: 0.5,
        stagger: 0.2,
        ease: "power3.in",
      });
    };

    ScrollTrigger.create({
      trigger: section,
      start: "top 80%",
      end: "bottom 20%",
      onEnter: animateIn,
      once: true,
      // onLeave: animateOut,
      // onEnterBack: animateIn,
      // onLeaveBack: animateOut,
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className={cn(
        "padding-container relative overflow-hidden md:shadow-[0px_0px_30px_0px_rgba(30,30,30,0.12)] margin-container",
        className // Apply passed className using cn
      )}
    >
      <div className="absolute inset-0 z-0">
        <Image
          src="/secondary-cta-bg.svg"
          alt="Background"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
      </div>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-4">
          <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
            <h2
              ref={titleRef}
              className="text-primary font-lexend text-[1.375rem] md:text-[2.5rem] font-semibold mb-4 md:mb-8"
            >
              Unlock the Power of Natural Remedies to Elevate Your Vitality and
              Well-Being.
            </h2>
            <p
              ref={descriptionRef}
              className="text-gray font-lato text-sm md:text-[1.5625rem] md:leading-[40px] font-medium mb-12"
            >
              At AKF, we specialize in crafting personalized herbal formulations
              tailored to naturally boost your vitality and overall wellness.
            </p>
            <div ref={buttonRef}>
              <Link
                href={"/contact-us"}
                className="bg-transparent rounded-md border-2 border-primary text-primary font-lato text-[0.75rem] md:text-base font-bold uppercase px-6 py-2 hover:bg-primary hover:text-white transition-colors duration-300 transform hover:scale-105 hover:shadow-[0px_8px_40px_rgba(0,0,0,0.15)]"
              >
                {buttonText}
              </Link>
            </div>
          </div>
          <div
            ref={imagesRef}
            className="w-full lg:w-1/2 relative h-[250px] md:h-[500px]"
          >
            <div className="absolute right-1/2 translate-x-1/2 md:translate-x-0 md:right-24 top-0 w-[150px] h-[150px] md:w-[300px] md:h-[300px]">
              <Image
                src="/secondaryCTAimg1.png"
                alt="Natural Remedies 1"
                layout="fill"
                objectFit="cover"
                className="rounded-[15px] z-50"
              />
            </div>
            <div className="absolute right-1/2 translate-x-3/4 md:translate-x-0 md:right-0 bottom-0 w-[125px] h-[125px] md:w-[250px] md:h-[250px]">
              <Image
                src="/secondaryCTAimg2.png"
                alt="Natural Remedies 2"
                layout="fill"
                objectFit="cover"
                className="rounded-[15px] z-10"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
