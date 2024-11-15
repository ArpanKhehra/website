"use client";
import React, { useEffect, useRef } from "react";
import QuickLinks from "./quick-links";
import Policies from "./policies";
import ContactUs from "./contact-us-footer";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  return (
    <footer className="flex flex-col items-center py-8 sm:py-12 w-full bg-[#FFF5E8]">
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-5 justify-between w-full padding-container">
        <div className="flex flex-col items-center justify-start my-auto">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/3bc19b5ccf921e84f45f13ff239455e8f3cddf87cf45171e52908a2acb9176a0?placeholderIfAbsent=true&apiKey=ac8a13c2ed9f4621b50f512c91ef2e1a"
            alt="Arpan Khera Fitness logo"
            className="object-contain w-24 sm:w-28 max-w-full aspect-[0.69]"
          />
          <h2 className="mt-3 text-lg sm:text-xl font-semibold leading-snug text-gray-900 text-center lg:text-left">
            Arpan Khera Fitness
          </h2>
          <p className="mt-1.5 text-xs font-medium leading-none text-center lg:text-left text-neutral-700">
            Reform your health with AKF
          </p>
        </div>
        <div className="flex flex-col-reverse items-center lg:items-start lg:flex-row justify-between gap-6 w-full lg:w-auto">
          <QuickLinks />
          <Policies />
          <ContactUs />
        </div>
      </div>
      <hr className="w-full mt-8 sm:mt-12 border border-yellow-600 border-solid min-h-[1px]" />
      <p className="mt-6 sm:mt-10 text-xs sm:text-sm font-medium leading-none text-neutral-700 text-center px-4">
        © 2024 Arpan Khehra Fitness. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
