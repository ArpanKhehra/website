"use client";

import React, { useState } from "react";
import Image from "next/image";
import MainCTA from "@/components/main-cta";
import { ChevronLeft, ChevronRight } from "lucide-react";

const GalleryCarousel = ({ images }) => {
  const [activePage, setActivePage] = useState(0);
  const totalPages = Math.ceil(images.length / 12);

  const handlePageChange = (pageIndex) => {
    setActivePage(Math.max(0, Math.min(pageIndex, totalPages - 1)));
  };

  const handlePrev = () => {
    console.log(activePage);
    handlePageChange(activePage - 1);
  };

  const handleNext = () => {
    console.log(activePage);
    handlePageChange(activePage + 1);
  };

  return (
    <div className="relative overflow-hidden mx-auto">
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{
          transform: `translateX(-${activePage * 100}%)`,
        }}
      >
        {[...Array(totalPages)].map((_, pageIndex) => (
          <div
            key={pageIndex}
            className="flex-shrink-0 padding-container margin-container bg-white"
            style={{ width: "100%" }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {images
                .slice(pageIndex * 12, (pageIndex + 1) * 12)
                .map((src, imgIndex) => (
                  <div
                    key={imgIndex}
                    className="relative rounded-md shadow-[0px_0px_35px_0px_rgba(30,30,30,0.2)] hover:shadow-[0px_0px_35px_#FDDAAC] transition-transform hover:scale-105"
                  >
                    <>
                      <div className="before-pill absolute top-0 left-0 bg-white p-2 px-4 text-center text-base text-dark z-10">
                        Before
                      </div>
                      <div className="after-pill absolute top-0 right-0 bg-white p-2 px-4 text-center text-base text-dark z-10">
                        After
                      </div>
                    </>

                    <Image
                      src={src}
                      width={385}
                      height={385}
                      className="w-full transform"
                      alt={`Gallery image ${pageIndex * 12 + imgIndex + 1}`}
                    />
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>
      <div
        style={{
          zIndex: "1000",
        }}
        className="relative flex justify-center items-center mb-[70px] gap-4"
      >
        <button
          onClick={handlePrev}
          disabled={activePage === 0}
          className="w-10 h-10 flex items-center justify-center bg-gray-200 text-gray-600 rounded-full disabled:opacity-50 border-primary border"
        >
          <ChevronLeft size={24} />
        </button>
        {[...Array(totalPages)].map((_, index) => (
          <button
            key={index}
            onClick={() => handlePageChange(index)}
            className={`border-primary border rounded-full w-10 h-10 flex items-center justify-center text-sm font-medium ${
              activePage === index
                ? "bg-primary text-white"
                : "bg-gray-200 text-gray-600 hover:bg-gray-300"
            }`}
          >
            {index + 1}
          </button>
        ))}
        <button
          onClick={handleNext}
          disabled={activePage === totalPages - 1}
          className="w-10 h-10 flex items-center justify-center bg-gray-200 text-gray-600 rounded-full disabled:opacity-50 border-primary border"
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </div>
  );
};

const GalleryPage = () => {
  const aboutUsContent = {
    header: {
      title: "Gallery",
      subtitle:
        "From personal training sessions to milestone achievements, experience the dedication and passion that drive our members towards their fitness goals.",
    },
    images: {
      headerDecoration: "/ornament-dots.svg",
      mainImage: "/about-intro.svg",
      decorationExplosive: "/ornament-dots-explosive.svg",
    },
  };

  // const images = Array(36).fill("/gallery-page-01.svg");
  // const images = Array(12).fill("/gallery-page-01.svg"); // Keep increaing this number to total number of images
  // const images = Array.from(
  //   { length: 12 },
  //   (_, index) => `/gallery-page-${(index + 1).toString().padStart(2, "0")}.png`
  // );
  const images = Array.from(
    { length: 60 },
    (_, index) => `/banner-trns-${index + 1}.png`
  );

  return (
    <main className="relative overflow-hidden">
      <section className="relative overflow-hidden py-20 md:py-40 p-2 bg-orange-50 !pb-12">
        <div className="hidden md:inline absolute top-0 right-0 z-10 w-[105px] aspect-[0.31]">
          <Image
            src={aboutUsContent.images.headerDecoration}
            alt="Decorative element"
            layout="fill"
            objectFit="contain"
            priority
          />
        </div>
        <div className="hidden md:inline absolute top-0 -left-4 z-10 w-[105px] aspect-[0.31]">
          <Image
            src={aboutUsContent.images.headerDecoration}
            alt="Decorative element"
            layout="fill"
            objectFit="contain"
            priority
          />
        </div>
        <h2 className="text-6xl font-semibold leading-none text-primary max-md:text-4xl text-center mt-10 font-lexend">
          {aboutUsContent.header.title}
        </h2>
        <p className="font-lexend mt-7 text-lg text-gray max-md:max-w-full max-w-[60%] text-center m-auto leading-[32px]">
          {aboutUsContent.header.subtitle}
        </p>
      </section>
      <GalleryCarousel images={images} />
      <MainCTA />
    </main>
  );
};

export default GalleryPage;
