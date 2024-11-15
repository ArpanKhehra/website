"use client";

import React from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Button from "@/components/ui/button"; // Adjust the import path as needed
import { Player } from "@lottiefiles/react-lottie-player";
import VideoCarousel from "@/components/video-carousel";
export default function InlineImageAndParaAbout({
  content,
  images,
  className,
  imageClassName,
  imageWidth = 500,
  imageHeight = 500,
  videoWidth = 500,
  videoHeight = 500,
  containerClassName,
  textContainerClassName,
  sectionTitleClassName,
  titleClassName,
  subtitleClassName,
  descriptionClassName,
  philosophyTitleClassName,
  philosophyDescriptionClassName,
  lottieAnimationUrl = null, // New prop for Lottie animation
  useVideoCarousel = false, // New prop to toggle video carousel
  videos = [], // Pass the videos for the carousel
}) {
  return (
    <section
      className={cn(
        "flex flex-col justify-center items-center padding-container margin-container bg-white max-md:px-5 transition-transform duration-300 transform",
        containerClassName
      )}
    >
      <div className="w-full max-md:max-w-full">
        <div
          className={cn(
            "flex flex-row-reverse max-lg:flex-col w-full gap-8 md:gap-14 items-center justify-center",
            className
          )}
        >
          <div className="relative flex flex-col lg:w-1/2 max-md:ml-0 w-full items-center lg:items-end">
            {images.decorationExplosive && (
              <div className="hidden md:flex absolute -top-36 right-0 w-[105px] aspect-[0.31]">
                <Image
                  src={images.decorationExplosive}
                  alt="Decorative element"
                  layout="fill"
                  objectFit="contain"
                  priority
                  className="z-0"
                />
              </div>
            )}
            <div className="flex flex-col md:hidden">
              <h2
                className={cn(
                  "text-2xl font-bold text-left text-primary rotate-[2.4492937051703357e-16rad]",
                  sectionTitleClassName
                )}
              >
                {content?.sectionTitle}
              </h2>
              <div className="flex flex-col gap-4 mt-2">
                <div className="content">
                  <h1
                    className={cn(
                      "font-lexend self-stretch mr-6 text-2xl lg:text-5xl font-bold leading-none text-dark max-md:mr-2.5 max-md:max-w-full",
                      titleClassName
                    )}
                  >
                    {content?.title}
                  </h1>
                  <p
                    className={cn(
                      "font-lexend mt-2 text-[0.6875rem] md:text-lg font-semibold leading-[12px] md:leading-9 text-left text-primary max-md:max-w-full",
                      subtitleClassName
                    )}
                  >
                    {content?.subtitle}
                  </p>
                  <p
                    className={cn(
                      "self-stretch mt-5 text-sm md:text-lg !leading-[1.875rem] text-gray max-md:max-w-full font-lato",
                      descriptionClassName
                    )}
                  >
                    {content.description}
                  </p>
                </div>
              </div>
            </div>

            {lottieAnimationUrl ? (
              // If there's a Lottie animation, render the Lottie Player
              <div className="flex items-center justify-center">
                <Player autoplay loop src={lottieAnimationUrl} />
              </div>
            ) : useVideoCarousel && videos.length > 0 ? (
              // If useVideoCarousel is true, render the video carousel
              <VideoCarousel
                videos={videos}
                width={videoWidth} // Match video carousel with image dimensions
                height={videoHeight}
              />
            ) : (
              // Otherwise, render the image as default
              <Image
                src={images.mainImage}
                alt="Fitness Team"
                width={imageWidth}
                height={imageHeight}
                className={cn("z-10", imageClassName)}
              />
            )}
          </div>
          <div
            className={cn(
              "flex flex-col w-full lg:w-1/2  max-md:w-full",
              textContainerClassName
            )}
          >
            <div className="flex flex-col items-start self-stretch my-auto mt-2 md:mt-0 max-md:max-w-full">
              <h2
                className={cn(
                  "hidden md:flex text-2xl font-bold text-left text-primary rotate-[2.4492937051703357e-16rad]",
                  sectionTitleClassName
                )}
              >
                {content?.sectionTitle}
              </h2>
              <div className="flex flex-col gap-4 mt-2">
                <div className="content hidden md:flex flex-col">
                  <h1
                    className={cn(
                      "font-lexend self-stretch mr-6 text-2xl lg:text-5xl font-bold leading-none text-dark max-md:mr-2.5 max-md:max-w-full",
                      titleClassName
                    )}
                  >
                    {content?.title}
                  </h1>
                  <p
                    className={cn(
                      "font-lexend mt-2 text-[0.6875rem] md:text-lg font-semibold leading-[12px] md:leading-9 text-left text-primary max-md:max-w-full",
                      subtitleClassName
                    )}
                  >
                    {content?.subtitle}
                  </p>
                  <p
                    className={cn(
                      "self-stretch mt-5 text-sm md:text-lg !leading-[1.875rem] text-gray max-md:max-w-full font-lato",
                      descriptionClassName
                    )}
                  >
                    {content.description}
                  </p>
                </div>

                {content?.philosophy && (
                  <div className="content">
                    <h1
                      className={cn(
                        "font-lato self-stretch mr-6 text-2xl lg:text-5xl font-bold leading-tight text-dark max-md:mr-2.5 max-md:max-w-full",
                        philosophyTitleClassName
                      )}
                    >
                      {content.philosophy.title}
                    </h1>
                    <p
                      className={cn(
                        "self-stretch mt-3 text-sm md:text-lg sm:text-lg leading-relaxed md:!leading-[1.875rem] text-gray max-md:max-w-full font-lato",
                        philosophyDescriptionClassName
                      )}
                    >
                      {content.philosophy.description}
                    </p>
                  </div>
                )}

                {content?.button && (
                  <Button
                    href={content.button.href}
                    variant={content.button.variant}
                    size={content.button.size}
                    className="mt-6 rounded-md max-w-max"
                  >
                    {content.button.text}
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
