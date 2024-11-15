"use client";

import React from "react";
import Button from "./button";
import Image from "next/image";
import { cn } from "@/lib/utils"; // Assuming you have this utility

export default function CTAGeneral({
  image,
  title,
  description,
  buttonText,
  buttonHref,
  containerClassName,
  imageClassName,
  contentClassName,
  titleClassName,
  descriptionClassName,
  buttonClassName,
}) {
  return (
    <section
      className={
        "relative max-w-xs md:max-w-lg lg:max-w-4xl xl:max-w-7xl m-auto rounded-2xl bg-gradient-to-r from-[#CD892D] to-[#FFC97F]"
      }
    >
      <div className="absolute top-0 left-0 -z-1 w-[250px] aspect-[0.31]">
        <Image
          src="/decorator-rect.svg"
          alt="Decorative element"
          width={500}
          height={500}
          priority
        />
      </div>
      <div
        className={cn(
          "flex gap-2 md:gap-5 max-lg:flex-col",
          containerClassName
        )}
      >
        <div
          className={cn(
            "relative overflow-hidden lg:w-[44%] w-full pl-6 pr-6 md:pl-0 md:pr-28 py-6 md:py-16",
            imageClassName
          )}
        >
          <Image
            src="/ellipse-decorator.svg"
            alt="Decorative element"
            width={100}
            height={200}
            priority
          />
          <Image
            src={image}
            alt="Promotional image"
            width={300}
            height={300}
            // layout="fill"
            // objectFit="cover"
            priority
          />
        </div>
        <div
          className={cn(
            "flex flex-col w-full lg:w-[56%] items-center max-md:w-full",
            contentClassName
          )}
        >
          <div className="flex flex-col items-start self-stretch pl-6 pr-6 md:pr-0 md:pl-28 py-6 md:py-16 my-auto text-neutral-700 mt-2 md:mt-0 md:mb-0 max-md:max-w-full">
            <h1
              className={cn(
                "text-2xl md:text-4xl leading-tight font-bold max-md:max-w-full text-gray",
                titleClassName
              )}
            >
              {title}
            </h1>
            <p
              className={cn(
                "mt-5 md:mt-8 text-sm md:text-lg leading-relaxed text-center max-md:max-w-full text-gray font-lato",
                descriptionClassName
              )}
            >
              {description}
            </p>
            <Button
              href={buttonHref}
              className={cn(
                "z-10 px-8 py-3 mt-8 text-base font-medium text-center text-black bg-white rounded-3xl bg-blend-normal max-md:px-5 transition-transform duration-300 transform hover:scale-105 hover:shadow-[0px_8px_40px_rgba(0,0,0,0.15)]",
                buttonClassName
              )}
            >
              {buttonText}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
