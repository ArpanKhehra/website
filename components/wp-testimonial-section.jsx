"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import WhatsappTestimonialCarousel from "@/components/whatsapp-testimonials";
import { wpTestimonials } from "../utilities/data";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function WPTestimonialSection() {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);
  const carouselRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const title = titleRef.current;
    const description = descriptionRef.current;
    const carousel = carouselRef.current;

    gsap.set([title, description], { x: -50, opacity: 0 });
    gsap.set(carousel, { y: 50, opacity: 0 });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
        once: true,
      },
    });

    tl.to([title, description], {
      x: 0,
      opacity: 1,
      duration: 0.5,
      stagger: 0.2,
      ease: "power3.out",
    }).to(
      carousel,
      {
        y: 0,
        opacity: 1,
        duration: 0.5,
        ease: "power3.out",
      },
      "-=0.3"
    );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section ref={sectionRef} className="flex flex-col relative">
      <div className="flex relative !pb-0 flex-col items-center w-full max-md:px-5 pb-12 md:pb-24 max-md:max-w-full">
        <div className="padding-container flex relative flex-col items-center -mb-6 w-full max-md:mb-2.5 max-md:max-w-full">
          <h2
            ref={titleRef}
            className="text-[1.5625rem] font-semibold text-center leading-none text-primary md:text-[3.5rem] font-lexend"
          >
            Client Feedbacks
          </h2>
          <p
            ref={descriptionRef}
            className="text-[0.75rem] mt-5 md:text-lg leading-none text-center text-gray max-md:max-w-full font-lato"
          >
            Choose the online nutrition coaching that&apos;s right for you
          </p>
        </div>
        <div
          ref={carouselRef}
          className="self-stretch mt-4 max-md:mt-4 max-md:max-w-full"
        >
          <WhatsappTestimonialCarousel testimonials={wpTestimonials} />
        </div>
      </div>
    </section>
  );
}
