"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Button from "./ui/button";
import { TypeAnimation } from "react-type-animation";
import VerticalInfiniteStrips from "../components/vertical-infinite-moving-cards";

const ScrollingImageStrip = ({ images, direction }) => {
  // Triple the images to ensure smooth infinite scroll
  const tripleImages = [...images];
  console.log(tripleImages);
  return (
    <div className={`strip-container ${direction}`}>
      <div className={`scrolling-strip ${direction}`}>
        {tripleImages.map((image, index) => (
          <Image
            key={`${image}-${index}`}
            src={image}
            alt={`Transformation ${index + 1}`}
            width={210}
            height={210}
            className="w-[210px] h-[210px] object-cover aspect-[1]"
          />
        ))}
      </div>
      {/* Duplicate the strip for seamless loop */}
      <div className={`scrolling-strip ${direction}`}>
        {tripleImages.map((image, index) => (
          <Image
            key={`${image}-${index}-duplicate`}
            src={image}
            alt={`Transformation ${index + 1}`}
            width={210}
            height={210}
            className="w-[210px] h-[210px] object-cover aspect-[1]"
          />
        ))}
      </div>
    </div>
  );
};
const ScrollingBackground = ({ imageSets }) => {
  return (
    <div className="scrolling-background">
      {imageSets.map((imageSet, index) => (
        <div key={index} className="strip-container">
          <ScrollingImageStrip
            images={imageSet}
            direction={index % 2 === 0 ? "scroll-up" : "scroll-down"}
          />
        </div>
      ))}
    </div>
  );
};

const Hero = () => {
  const imageSets = [
    [
      "/banner-trns-1.svg",
      "/banner-trns-2.svg",
      "/banner-trns-3.svg",
      "/banner-trns-4.svg",
      "/banner-trns-5.svg",
      // "/banner-trns-6.svg",
      // "/banner-trns-7.svg",
      // "/banner-trns-8.svg",
      // "/banner-trns-9.svg",
      // "/banner-trns-10.svg",
    ],
    [
      "/banner-trns-11.svg",
      "/banner-trns-12.svg",
      "/banner-trns-13.svg",
      "/banner-trns-14.svg",
      "/banner-trns-15.svg",
      // "/banner-trns-16.svg",
      // "/banner-trns-17.svg",
      // "/banner-trns-18.svg",
      // "/banner-trns-19.svg",
      // "/banner-trns-20.svg",
    ],
    [
      "/banner-trns-21.svg",
      "/banner-trns-22.svg",
      "/banner-trns-23.svg",
      "/banner-trns-24.svg",
      "/banner-trns-25.svg",
      // "/banner-trns-26.svg",
      // "/banner-trns-27.svg",
      // "/banner-trns-28.svg",
      // "/banner-trns-29.svg",
      // "/banner-trns-30.svg",
    ],
    [
      "/banner-trns-31.svg",
      "/banner-trns-32.svg",
      "/banner-trns-33.svg",
      "/banner-trns-34.svg",
      "/banner-trns-35.svg",
      // "/banner-trns-36.svg",
      // "/banner-trns-37.svg",
      // "/banner-trns-38.svg",
      // "/banner-trns-39.svg",
      // "/banner-trns-40.svg",
    ],
    [
      "/banner-trns-41.svg",
      "/banner-trns-42.svg",
      "/banner-trns-43.svg",
      "/banner-trns-44.svg",
      "/banner-trns-45.svg",
      // "/banner-trns-46.svg",
      // "/banner-trns-47.svg",
      // "/banner-trns-48.svg",
      // "/banner-trns-49.svg",
      // "/banner-trns-50.svg",
    ],
    [
      "/banner-trns-51.svg",
      "/banner-trns-52.svg",
      "/banner-trns-53.svg",
      "/banner-trns-54.svg",
      "/banner-trns-55.svg",
      // "/banner-trns-56.svg",
      // "/banner-trns-57.svg",
      // "/banner-trns-58.svg",
      // "/banner-trns-59.svg",
      // "/banner-trns-60.svg",
    ],
    [
      "/banner-trns-1.svg",
      "/banner-trns-2.svg",
      "/banner-trns-3.svg",
      "/banner-trns-4.svg",
      "/banner-trns-5.svg",
      // "/banner-trns-6.svg",
      // "/banner-trns-7.svg",
      // "/banner-trns-8.svg",
      // "/banner-trns-9.svg",
      // "/banner-trns-10.svg",
    ],
  ];

  const imageSetsMobile = [
    [
      "/banner-trns-1.svg",
      "/banner-trns-2.svg",
      "/banner-trns-3.svg",
      "/banner-trns-4.svg",
      "/banner-trns-5.svg",
      // "/banner-trns-6.svg",
      // "/banner-trns-7.svg",
      // "/banner-trns-8.svg",
      // "/banner-trns-9.svg",
      // "/banner-trns-10.svg",
    ],
    [
      "/banner-trns-11.svg",
      "/banner-trns-12.svg",
      "/banner-trns-13.svg",
      "/banner-trns-14.svg",
      "/banner-trns-15.svg",
      // "/banner-trns-16.svg",
      // "/banner-trns-17.svg",
      // "/banner-trns-18.svg",
      // "/banner-trns-19.svg",
      // "/banner-trns-20.svg",
    ],
    [
      "/banner-trns-21.svg",
      "/banner-trns-22.svg",
      "/banner-trns-23.svg",
      "/banner-trns-24.svg",
      "/banner-trns-25.svg",
      // "/banner-trns-26.svg",
      // "/banner-trns-27.svg",
      // "/banner-trns-28.svg",
      // "/banner-trns-29.svg",
      // "/banner-trns-30.svg",
    ],
    [
      "/banner-trns-31.svg",
      "/banner-trns-32.svg",
      "/banner-trns-33.svg",
      "/banner-trns-34.svg",
      "/banner-trns-35.svg",
      // "/banner-trns-36.svg",
      // "/banner-trns-37.svg",
      // "/banner-trns-38.svg",
      // "/banner-trns-39.svg",
      // "/banner-trns-40.svg",
    ],

    // Add more image sets if needed
  ];

  const [isMobile, setIsMobile] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false); // Add a loading state
  console.log(isMobile);

  // Effect to determine if the device is mobile
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Adjust the width threshold as needed
    };

    handleResize(); // Check on mount
    setIsLoaded(true); // Set the component as loaded once the screen size is detected
    window.addEventListener("resize", handleResize); // Check on resize

    return () => {
      window.removeEventListener("resize", handleResize); // Cleanup
    };
  }, []);

  return (
    <section className="w-full min-h-[26rem] md:min-h-[43.75rem] relative overflow-hidden">
      {isMobile ? (
        // <ScrollingBackground imageSets={imageSetsMobile} />
        <div className="scrolling-background">
          <div
            className="strip-container"
            style={{
              height: "100%",
              width: "100%",
            }}
          >
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
              src="/phone-view-720p-new.mov"
            />
          </div>
        </div>
      ) : (
        <div className="scrolling-background">
          <div
            className="strip-container"
            style={{
              height: "100%",
              width: "100%",
            }}
          >
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
              src="/hero-video-desktop.mov"
            />
          </div>
        </div>
      )}

      <div
        className="absolute inset-0 bg-gradient-to-r from-black/90 to-black/10"
        // className="absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg, rgba(24, 24, 24, 0.99) 20.61%, rgba(0, 0, 0, 0.00) 101.49%)",
        }}
      ></div>
      <div className="max-page mt-0 md:mt-[12.5rem] padding-container relative z-20 flex items-center">
        <div className="flex flex-col w-full lg:w-[80%] mt-16 md:mt-10">
          <h1 className="text-[1.75rem] md:text-6xl hero-heading font-lexend">
            Wellness is a Journey.
          </h1>
          <h1 className="text-[1.75rem] md:text-6xl hero-heading mt-2 font-lexend">
            Let&apos;s Walk it Together
          </h1>

          <p className="text-[0.75rem] leading-[150%] md:text-xl hero-description mt-6 max-w-[300px] md:max-w-[620px] font-lato">
            AKF Fitness is committed to transforming Lives with Nutrition and
            Fitness via Personal trainings, customized diet & workout plans
          </p>
          <Button
            variant="primary"
            size="lg"
            className="mt-10 w-[120px] h-[20px] md:h-auto md:w-fit rounded-sm md:rounded-xl text-[0.5rem] md:text-base cursor-pointer font-lato px-4 py-3 md:px-8 md:py-4"
            href="/contact-us"
          >
            BECOME A MEMBER
          </Button>
        </div>
        <div className="hidden lg:block lg:w-[40%]">
          {/* You can add images or content here if needed */}
        </div>
      </div>
    </section>
  );
};

export default Hero;
