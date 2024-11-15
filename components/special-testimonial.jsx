"use client";

import React from "react";
import SpecialTestimonialCard from "./special-testimonial-card";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
import { wpTestimonials } from "@/utilities/data";
import Image from "next/image";

// const testimonials = [
//   {
//     rating: 4.5,
//     review:
//       "Very good experience Arpan took the time to listen and prescribe the right medication. Very convenient too, no hastle. Just book a slot per your convenience and have a telephone conversation, and you are done.",
//     name: "Craig Vaccaro",
//   },
//   {
//     rating: 5,
//     review:
//       "Very good experience Arpan took the time to listen and prescribe the right medication. Very convenient too, no hastle. Just book a slot per your convenience and have a telephone conversation, and you are done.",
//     name: "Craig Vaccaro",
//   },
//   {
//     rating: 4.5,
//     review:
//       "Very good experience Arpan took the time to listen and prescribe the right medication. Very convenient too, no hastle. Just book a slot per your convenience and have a telephone conversation, and you are done.",
//     name: "Craig Vaccaro",
//   },
//   // Add more testimonials to ensure smooth looping
// ];

const SpecialTestimonialSection = () => {
  return (
    <section className="py-12 px-4 overflow-hidden bg-white">
      <h2 className="text-[1.5625rem] font-semibold leading-none text-primary md:text-[3.5rem] text-center">
        Client Testimonials
      </h2>
      <p className="text-[0.75rem] mt-5 md:text-lg font-lato text-center text-gray max-md:max-w-full">
        Here&apos;s what some of our happy clients have to say
      </p>
      <div className="flex flex-col ml-5 w-full max-md:ml-0 max-md:w-full">
        <div className="flex flex-row flex-wrap grow gap-5 mt-2 md:mt-10 max-md:max-w-full">
          <InfiniteMovingCards
            items={wpTestimonials}
            direction="left"
            speed="slow"
            className="mt-7"
            pauseOnHover={false}
          >
            {(src) => (
              <div className="flex items-center justify-center w-64 h-auto aspect-[9/16]">
                {/* <SpecialTestimonialCard {...testimonial} /> */}
                <div className="relative w-full h-full">
                  <img
                    src={src}
                    alt="Gallery image"
                    className="w-full h-full object-contain rounded-lg"
                  />
                </div>
              </div>
            )}
          </InfiniteMovingCards>
        </div>
      </div>
    </section>
  );
};

export default SpecialTestimonialSection;
