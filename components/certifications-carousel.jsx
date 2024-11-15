"use client";

import React from "react";
import Image from "next/image";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

const certLogos = [
  { src: "/afsa-logo.png", alt: "American Sports & Fitness Association" },
  { src: "/optimum-nutrition-logo.png", alt: "Optimum Nutrition" },
  { src: "/nasma-logo.png", alt: "NASM" },
  { src: "/precision-nutrition-logo.png", alt: "Precision Nutrition" },
  { src: "/nest-logo.png", alt: "NESTA" },
  { src: "/cimspa-logo.png", alt: "CIMSPA" },
];

export default function CertificationsCarousel() {
  return (
    <section className="padding-container !px-0 !pb-0 bg-white">
      <div className="">
        <h2 className="text-center text-[0.625rem] md:text-[1.25rem] font-lato font-medium leading-[28px] text-black">
          Trusted and Recognised By world largest fitness companies
        </h2>

        <InfiniteMovingCards
          items={certLogos}
          direction="left"
          speed="fast"
          pauseOnHover={false}
          className=""
        >
          {(logo) => (
            <div className="w-[180px] h-[90px] mx-8 flex items-center justify-center bg-white">
              <Image
                src={logo.src}
                alt={logo.alt}
                width={180}
                height={90}
                className="w-full max-w-full max-h-full object-contain"
              />
            </div>
          )}
        </InfiniteMovingCards>
      </div>
    </section>
  );
}
