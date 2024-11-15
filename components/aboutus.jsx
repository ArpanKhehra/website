"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Button from "./ui/button";
import CountUp from "react-countup";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { number: 8, text: "Year's Experience" },
  { number: 500, text: "Members" },
  { number: 1500, text: "Customers" },
  { number: 10000, text: "Reviews" },
];

export default function AboutUs() {
  const sectionRef = useRef(null);
  const leftElementsRef = useRef([]);
  const rightElementsRef = useRef([]);
  const imageRef = useRef(null);
  const statsRef = useRef([]);

  useEffect(() => {
    const section = sectionRef.current;
    const leftElements = leftElementsRef.current;
    const rightElements = rightElementsRef.current;
    const image = imageRef.current;
    const statBoxes = statsRef.current;

    const animateIn = (elements, direction) => {
      gsap.to(elements, {
        x: 0,
        opacity: 1,
        duration: 0.5,
        stagger: 0.1,
        ease: "power3.out",
      });
    };

    const animateOut = (elements, direction) => {
      gsap.to(elements, {
        x: direction === "left" ? -50 : 50,
        opacity: 0,
        duration: 0.5,
        stagger: 0.1,
        ease: "power3.in",
      });
    };

    const createTrigger = (elements, direction) => {
      ScrollTrigger.create({
        trigger: section,
        start: "top 80%",
        end: "bottom 20%",
        onEnter: () => animateIn(elements, direction),
        onLeave: () => animateOut(elements, direction),
        onEnterBack: () => animateIn(elements, direction),
        onLeaveBack: () => animateOut(elements, direction),
      });
    };

    createTrigger(leftElements, "left");
    createTrigger(rightElements, "right");
    createTrigger(image, "left");

    // For stat boxes
    ScrollTrigger.create({
      trigger: section,
      start: "top 80%",
      end: "bottom 20%",
      once: true,
      onEnter: () => {
        gsap.to(statBoxes, {
          x: 0,
          opacity: 1,
          duration: 0.5,
          stagger: 0.1,
          ease: "power3.out",
        });
      },
      // onLeave: () => {
      //   gsap.to(statBoxes, {
      //     x: (index) => (index % 2 === 0 ? -50 : 50),
      //     opacity: 0,
      //     duration: 0.5,
      //     stagger: 0.1,
      //     ease: "power3.in",
      //   });
      // },
      // onEnterBack: () => {
      //   gsap.to(statBoxes, {
      //     x: 0,
      //     opacity: 1,
      //     duration: 0.5,
      //     stagger: 0.1,
      //     ease: "power3.out",
      //   });
      // },
      // onLeaveBack: () => {
      //   gsap.to(statBoxes, {
      //     x: (index) => (index % 2 === 0 ? -50 : 50),
      //     opacity: 0,
      //     duration: 0.5,
      //     stagger: 0.1,
      //     ease: "power3.in",
      //   });
      // },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="padding-container margin-container md:!mb-32"
    >
      <div className="mx-auto">
        <div className="flex flex-col-reverse lg:flex-row gap-8">
          {/* Desktop left */}
          <div className="w-full lg:w-1/2 hidden lg:block">
            <div
              className="rounded-[20px] bg-white shadow-[0px_0px_35px_0px_rgba(30,30,30,0.12)] p-4 lg:p-8"
              style={{
                height: "100%",
              }}
            >
              <h3
                ref={(el) => (leftElementsRef.current[0] = el)}
                className="text-primary font-lexend text-[0.75rem] md:text-xl font-bold leading-[120%] mb-2"
              >
                Who We Are
              </h3>
              <h2
                ref={(el) => (leftElementsRef.current[1] = el)}
                className="text-black font-lexend text-[2.1875rem] md:text-[3.4375rem] font-semibold leading-[40px] md:leading-[120%] mb-2"
              >
                Arpan Khehra
              </h2>
              <p
                ref={(el) => (leftElementsRef.current[2] = el)}
                className="text-primary font-lexend text-[0.75rem] md:text-base font-semibold leading-[20px] md:leading-[120%] mb-3"
              >
                Entrepreneur & Fitness Trainer- AKF
              </p>
              <p
                ref={(el) => (rightElementsRef.current[0] = el)}
                className="text-gray font-lato text-[0.75rem] md:text-lg font-normal !leading-[2rem] my-8"
              >
                With over 8 years of dedicated experience in the field of body
                nutrition personal training is focused on bringing the best in
                you. Arpan is a renowned expert in transforming lives through
                fitness. Having successfully assisted over 1000 clients, Arpan
                specializes in crafting personalized diet plans and rigorous
                training regimes tailored to your unique goals. Having
                successfully assisted over 1000 clients, Arpan specializes in
                crafting personalized diet plans and rigorous training regimes
                tailored to your unique goals.
              </p>
              <p
                ref={(el) => (rightElementsRef.current[1] = el)}
                className="text-black font-lexend text-sm md:text-xl font-medium leading-[120%] my-4"
              >
                Join us on this transformative journey and unlock your full
                potential with Arpan Khehra
              </p>
              <Link
                href={"/contact-us"}
                ref={(el) => (rightElementsRef.current[2] = el)}
                className="mt-8 inline-block rounded-md bg-primary text-white font-lato text-[0.75rem] md:text-base font-medium uppercase px-6 py-3"
              >
                Book Consultation
              </Link>
            </div>
          </div>
          <div className="justify-between w-full lg:w-1/2 flex flex-col gap-4 md:gap-6 flex-1">
            <div
              ref={imageRef}
              className="rounded-[25px] overflow-hidde flex flex-row justify-center lg:justify-start"
            >
              <Image
                className=""
                src="/about-banner.png"
                alt="Arpan Khehra"
                width={573}
                height={325}
                objectFit="cover"
                style={
                  {
                    // width: "100%",
                  }
                }
              />
            </div>
            {/* Mobile  */}
            <div className="w-full lg:w-1/2 lg:hidden block">
              <div className="bg-white p-4 lg:p-8">
                <h3
                  ref={(el) => (leftElementsRef.current[0] = el)}
                  className="text-primary font-lexend text-[0.75rem] md:text-xl font-bold leading-[120%] mb-2 md:mb-5"
                >
                  Who We Are
                </h3>
                <h2
                  ref={(el) => (leftElementsRef.current[1] = el)}
                  className="text-black font-lexend text-[2.1875rem] md:text-[3.4375rem] font-semibold leading-[120%] mb-2 md:mb-6"
                >
                  Arpan Khehra
                </h2>
                <p
                  ref={(el) => (leftElementsRef.current[2] = el)}
                  className="text-primary font-lexend text-[0.75rem] md:text-base font-semibold leading-[120%] mb-3 md:mb-10"
                >
                  Entrepreneur & Fitness Trainer- AKF
                </p>
                <p
                  ref={(el) => (rightElementsRef.current[0] = el)}
                  className="text-gray font-lato text-[0.75rem] leading-[20px] md:text-lg font-normal md:leading-[35px] mb-8"
                >
                  With over 8 years of dedicated experience in the field of body
                  nutrition personal training is focused on bringing the best in
                  you. Arpan is a renowned expert in transforming lives through
                  fitness. Having successfully assisted over 1000 clients, Arpan
                  specializes in crafting personalized diet plans and rigorous
                  training regimes tailored to your unique goals. Having
                  successfully assisted over 1000 clients, Arpan specializes in
                  crafting personalized diet plans and rigorous training regimes
                  tailored to your unique goals.
                </p>
                <p
                  ref={(el) => (rightElementsRef.current[1] = el)}
                  className="text-black font-lexend text-sm tmd:text-xl font-medium leading-[20px] md:leading-[30px] mb-10"
                >
                  Join us on this transformative journey and unlock your full
                  potential with Arpan Khehra
                </p>
                <Link
                  href="/contact-us"
                  ref={(el) => (rightElementsRef.current[2] = el)}
                  className="rounded-md bg-primary text-white font-lato text-[0.75rem] md:text-base font-medium uppercase px-6 py-3"
                >
                  Book Consultation
                </Link>
              </div>
            </div>
            <div className="rounded-none md:rounded-[20px] bg-white shadow-none md:shadow-[0px_0px_30px_0px_rgba(30,30,30,0.12)] px-3 py-6 lg:p-6">
              <div className="grid grid-cols-2 lg:grid-cols-2 gap-4">
                {stats.map((stat, index) => (
                  <div
                    key={index}
                    ref={(el) => (statsRef.current[index] = el)}
                    className="rounded-[21px] bg-[#FFF5E8] p-4 text-left flex flex-col items-start justify-start"
                  >
                    <p className="text-black font-lexend text-2xl md:text-4xl font-semibold leading-[34px] mb-2">
                      <CountUp
                        end={stat.number}
                        duration={2}
                        suffix={stat.number > 5 ? "+" : ""}
                        enableScrollSpy
                        scrollSpyOnce={false}
                      />
                    </p>
                    <p className="text-black font-lato text-xs md:text-lg font-medium leading-[34px]">
                      {stat.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
