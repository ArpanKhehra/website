"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Button from "./ui/button";
import PlanCard from "./ui/plan-card";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
const plans = [
  {
    title: "PERSONAL TRAINING",
    description:
      "Best one-on-one online consulting and focused personal training",
    image: "/path-to-personal-training-image.jpg",
  },
  {
    title: "Diet Plan /Meal Plan",
    description: "Best customized diet plans to achieve your desired weight",
    image: "/path-to-diet-plan-image.jpg",
  },
  {
    title: "Workout plan",
    description: "Best workout plans to help you reach your goal",
    image: "/path-to-workout-plan-image.jpg",
  },
];

const planData = [
  {
    image: "/personal-training-banner.png",
    title: "PERSONAL TRAINING",
    description:
      "Best one-on-one online consulting and focused personal training",
    buttonText: "View Details",
    buttonColor: "text-gray",
  },
  {
    image: "/diet-plan-banner.png",
    title: "Diet Plan /Meal Plan",
    description: "Best customized diet plans to achieve your desired weight",
    buttonText: "View Details",
    buttonColor: "text-gray",
  },
  {
    image: "/workout-plan-banner.png",
    title: "Workout plan",
    description: "Best workout plans to help you reach your goal",
    buttonText: "View Details",
    buttonColor: "text-gray",
  },
];

export default function Plans({ viewMore }) {
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
    <section ref={sectionRef} className="flex flex-col relative">
      <div className="hidden lg:inline absolute -top-48 right-0 z-10 w-[105px] aspect-[0.31] max-lg:rotate-90 transition-transform duration-300">
        <Image
          src="/ornament-dots.svg"
          alt="Decorative element"
          layout="fill"
          objectFit="contain"
          priority
        />
      </div>
      <div className="hidden lg:inline absolute -bottom-48 left-0 z-10 w-[105px] aspect-[0.31] max-lg:rotate-90 transition-transform duration-300">
        <Image
          src="/ornament-dots.svg"
          alt="Decorative element"
          layout="fill"
          objectFit="contain"
          priority
        />
      </div>
      <div className="padding-container flex relative flex-col items-center w-full max-md:px-5 max-md:max-w-full">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/e7eff94c672713e2a2da0a967c28cd994f55f8cac46d82da2bfd23b6e174477d?placeholderIfAbsent=true&apiKey=ac8a13c2ed9f4621b50f512c91ef2e1a"
          alt=""
          className="object-cover absolute inset-0 size-full"
        />
        <div className="flex relative flex-col items-center mb-6 w-full max-md:mb-2.5 max-md:max-w-full">
          <h2
            ref={titleRef}
            className="text-[1.5625rem] font-lexend font-semibold leading-none text-primary md:text-[3.5rem]"
          >
            Our Plans
          </h2>
          <p
            ref={descriptionRef}
            className="text-[0.75rem] mt-5 md:text-lg font-lato text-center text-gray max-md:max-w-full"
          >
            Your journey is unique. Your Nutrition Plan Should Be Too.
          </p>
          <div className="self-stretch mt-5 md:mt-10 max-md:max-w-full">
            <div class="grid grid-cols-3 gap-8 max-lg:grid-cols-1 max-lg:max-w-lg lg:w-full mx-auto">
              {planData.map((plan, index) => (
                <PlanCard
                  viewMore={viewMore}
                  key={index}
                  {...plan}
                  index={index}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
