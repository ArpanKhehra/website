"use client";

import React from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
import Button from "./ui/button";
import Image from "next/image";

const galleryImages = [
  "/gallery-1.png",
  "/gallery-2.png",
  "/gallery-3.png",

  // Add more image paths as needed
];

export default function Gallery() {
  return (
    <section className="overflow-hidden padding-container !pr-0 bg-orange-50 max-md:pl-5">
      <div className="flex gap-5 max-lg:flex-col-reverse">
        <div className="flex flex-col w-full lg:w-[30%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col items-start self-stretch my-auto text-black mt-5 md:mt-10 w-full">
            <h1 className="text-[1.5rem] md:text-[2.5rem] font-semibold w-full font-lexend">
              Discover Our Fitness Oasis
            </h1>
            <p className="mt-3 text-sm md:text-base leading-7 text-gray font-lato">
              Explore some of our best results in our gallery.
            </p>
            <Button
              variant="tertiary"
              className="w-[250px] font-lato border border-primary text-primary hover:bg-primary hover:text-white transition-colors duration-300 bg-transparent rounded-none mt-6 md:mt-12"
              href={"/gallery"}
            >
              View Gallery
            </Button>
          </div>
        </div>
        <div className="flex flex-col ml-5 w-full lg:w-[70%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-row flex-wrap grow gap-5 mt-2 md:mt-10 max-md:max-w-full">
            <InfiniteMovingCards
              items={galleryImages}
              direction="left"
              speed="fast"
              pauseOnHover={false}
            >
              {(src) => (
                <Image
                  src={src}
                  width={280}
                  height={320}
                  alt="Gallery image"
                  className="w-[280px] h-[320px] object-cover aspect-[1]"
                />
              )}
            </InfiniteMovingCards>
          </div>
        </div>
      </div>
    </section>
  );
}
