"use client";
import React from "react";
import Image from "next/image";
import Button from "./ui/button";

const CheckIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="15"
    height="11"
    viewBox="0 0 15 11"
    fill="none"
    className="flex-shrink-0"
  >
    <g clipPath="url(#clip0_364_1105)">
      <path
        d="M5.88166 10.4592C5.65069 10.4585 5.43038 10.3619 5.27332 10.1925L1.22332 5.88418C0.908063 5.5482 0.924852 5.02027 1.26082 4.70501C1.5968 4.38975 2.12473 4.40654 2.43999 4.74251L5.87332 8.40084L12.8817 0.734177C13.0754 0.492857 13.387 0.378817 13.6908 0.438018C13.9946 0.497218 14.2406 0.719906 14.3296 1.01633C14.4185 1.31276 14.3359 1.6341 14.115 1.85084L6.49832 10.1842C6.34273 10.3567 6.12223 10.4563 5.88999 10.4592H5.88166Z"
        fill="#2D3142"
      />
    </g>
    <defs>
      <clipPath id="clip0_364_1105">
        <rect width="15" height="11" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export default function MainCTA() {
  return (
    <section className="padding-container relative mt-8">
      <div className="max-w-7xl mx-auto  transition-transform duration-300 transform">
        {/* hover:scale-105 hover:shadow-[0px_8px_40px_rgba(0,0,0,0.15)] */}
        <div className="rounded-2xl bg-gradient-to-b from-[#DF9632] to-[#DBA760] relative">
          <div className="flex flex-col lg:flex-row items-center relative">
            <div className="z-100 w-full lg:w-[60%] p-8">
              <h2 className="text-white font-lexend text-xl md:text-[3rem] font-bold mb-8 leading-[120%]">
                Why You Should Join Arpan Khehra Fitness
              </h2>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center">
                  <CheckIcon />
                  <span className="ml-2 text-[#212B36] font-lato text-[0.75rem] md:text-sm font-normal leading-[18px]">
                    Personalised diet and workout plans suited for your
                    lifestyle, goals, medical conditions and food preferences
                  </span>
                </li>
                <li className="flex items-center">
                  <CheckIcon />
                  <span className="ml-2 text-[#212B36] font-lato text-[0.75rem] md:text-sm font-normal leading-[18px]">
                    Weekly monitoring with coach to understand your progress
                  </span>
                </li>
                <li className="flex items-center">
                  <CheckIcon />
                  <span className="ml-2 text-[#212B36] font-lato text-[0.75rem] md:text-sm font-normal leading-[18px]">
                    Regular plan updates as per your progress and needs
                  </span>
                </li>
              </ul>
              <Button
                href={"/contact-us"}
                className="z-100 px-6 py-3 bg-white bg-opacity-50 rounded-full text-black text-center font-lato text-[0.75rem] md:text-base font-medium hover:bg-opacity-70 transition-colors duration-300"
              >
                Become a member
              </Button>
            </div>
            <div className="-z-0 hidden md:block absolute top-0 left-0 md:-top-32 md:left-52 w-[750px] h-[835px] transform-rotate rotate-[-12.762deg] aspect-[1.171]">
              <Image
                src="/bg-svg-cta.svg"
                alt="Decorative element"
                layout="fill"
                objectFit="contain"
                priority
                className="-z-0"
              />
            </div>
            <div className="w-full lg:w-[48%] lg:absolute lg:-right-[10rem] lg:-top-50 lg:bottom-0">
              <div className="w-full h-full lg:w-[460px] lg:h-[545px] relative">
                <Image
                  src="/cta-arpan.png"
                  alt="Arpan Khehra"
                  layout="fill"
                  objectFit="cover"
                  className="w-full h-full object-cover z-108"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
