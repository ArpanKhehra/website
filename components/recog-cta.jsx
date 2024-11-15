"use client";
import React from "react";
import Button from "./ui/button";
import Image from "next/image";
import { cn } from "@/lib/utils"; // Assuming you have this utility

export default function RecogCTA({
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
      className={cn(
        "max-w-sm md:max-w-xl lg:max-w-4xl xl:max-w-7xl m-auto rounded-2xl bg-gradient-to-r from-[#FFC97F] to-[#CD892D] transition-transform duration-300 transform hover:scale-105 hover:shadow-[0px_8px_40px_rgba(0,0,0,0.15)]",
        containerClassName
      )}
    >
      <div className="flex lg:flex-row gap-5 flex-col overflow-hidden">
        <div
          className={cn(
            "relative aspect-[1.16] overflow-hidden w-full lg:w-[44%] max-md:w-full",
            imageClassName
          )}
        >
          <Image
            src={image}
            alt="Promotional image"
            layout="fill"
            objectFit="cover"
            priority
            className="[transform:rotateY(180deg)]"
          />
        </div>
        <div
          className={cn(
            "relative justify-center flex flex-col ml-5 px-4 py-6 lg:p-0 w-full lg:w-[56%] max-md:ml-0 max-md:w-full",
            contentClassName
          )}
        >
          <div
            style={{
              zIndex: "-1",
            }}
            className="absolute -right-28 -bottom-28 w-[873px] h-[738px]"
          >
            <Image
              src="/decorator-02.svg"
              alt="Decorative element"
              layout="fill"
              objectFit="contain"
              priority
            />
          </div>
          <div className="flex flex-col items-start self-stretch text-neutral-700 mt-5 md:mt-10 max-md:max-w-full">
            <h1
              className={cn(
                "self-stretch text-4xl font-bold max-md:max-w-full text-gray",
                titleClassName
              )}
            >
              {title}
            </h1>
            <p
              className={cn(
                "mt-8 text-lg leading-none text-left max-md:max-w-full text-gray",
                descriptionClassName
              )}
            >
              {description}
            </p>
            <Button
              href={buttonHref}
              className={cn(
                "px-8 py-3 mt-8 text-base font-medium text-center text-black bg-white rounded-3xl bg-blend-normal max-md:px-5",
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
