"use client";

import React from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Button from "@/components/ui/button"; // Adjust the import path as needed

export default function InlineImageAndContent({
  content,
  images,
  className,
  imageClassName,
  imageWidth = 500,
  imageHeight = 500,
  containerClassName,
  textContainerClassName,
  sectionTitleClassName,
  titleClassName,
  subtitleClassName,
  descriptionClassName,
  philosophyTitleClassName,
  philosophyDescriptionClassName,
}) {
  return (
    <section
      className={cn(
        "flex flex-col justify-center items-center padding-container margin-container bg-white max-md:px-5",
        containerClassName
      )}
    >
      <div className="w-full max-md:max-w-full">
        <div
          className={cn(
            "flex flex-row-reverse max-lg:flex-col w-full gap-8 md:gap-20 items-center justify-center",
            className
          )}
        >
          <div className="relative flex flex-col w-full lg:w-1/2 max-md:ml-0 max-lg:w-full items-center lg:items-end">
            {images.decorationExplosive && (
              <div className="absolute -top-36 right-0 w-[105px] aspect-[0.31]">
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

            <Image
              src={images.mainImage}
              alt="Fitness Team"
              width={imageWidth}
              height={imageHeight}
              className={cn("z-10", imageClassName)}
            />
          </div>
          <div
            className={cn(
              "flex flex-col ml-5 w-full lg:w-1/2 max-md:ml-0 max-md:w-full",
              textContainerClassName
            )}
          >
            <div className="flex flex-col items-start self-stretch my-auto max-md:mt-10 max-md:max-w-full">
              <h2
                className={cn(
                  "text-3xl font-bold text-center text-primary font-lexend",
                  sectionTitleClassName
                )}
              >
                {content?.sectionTitle}
              </h2>
              <div className="flex flex-col gap-4">
                <div className="content">
                  <h1
                    className={cn(
                      "self-stretch mr-6 text-[1.5625rem] font-bold leading-none text-dark max-md:mr-2.5 max-md:max-w-full md:text-4xl font-lato",
                      titleClassName
                    )}
                  >
                    {content?.title}
                  </h1>
                  <p
                    className={cn(
                      "mt-6 text-xl font-semibold leading-9 text-left text-primary max-md:max-w-full font-lato",
                      subtitleClassName
                    )}
                  >
                    {content?.subtitle}
                  </p>
                  <p
                    className={cn(
                      "self-stretch mt-3 text-sm md:text-base leading-relaxed md:leading-8 text-gray max-md:max-w-full font-lato",
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
                        "self-stretch mr-6 text-4xl font-bold leading-5xl text-dark max-md:mr-2.5 max-md:max-w-full max-md:text-4xl",
                        philosophyTitleClassName
                      )}
                    >
                      {content.philosophy.title}
                    </h1>
                    <p
                      className={cn(
                        "self-stretch mt-3 text-lg leading-8 text-gray max-md:max-w-full font-lato",
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
