import React from "react";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ChevronLeft, ChevronRight } from "lucide-react";

const NextArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-white/80 shadow-md hover:bg-white z-10"
  >
    <ChevronRight className="w-6 h-6" />
  </button>
);

const PrevArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-white/80 shadow-md hover:bg-white z-10"
  >
    <ChevronLeft className="w-6 h-6" />
  </button>
);

const ServicesCarousel = ({ testimonials }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="bg-white overflow-hidden">
      <div className="mx-auto">
        <div className="padding-container py-0">
          <h2 className="text-[1.5625rem] font-semibold leading-none text-primary md:text-[3.5rem] text-left lg:text-center">
            Client Reports
          </h2>
          <p className="text-[0.75rem] mt-5 md:text-lg text-left lg:text-center text-gray mx-0 lg:mx-auto">
            Here&apos;s some reports shared by our clients
          </p>
        </div>
        <div className="relative w-full py-16">
          <div className="mx-auto px-1 sm:px-1 lg:px-1">
            <Slider {...settings}>
              {testimonials.map((src, index) => (
                <div
                  key={index}
                  className="px-2 !flex !flex-row gap-2 h-full items-center justify-center"
                >
                  <div className="flex flex-row items-center justify-center relative w-[300px]">
                    {/* <Image
                  src={src}
                  alt={`Testimonial ${index + 1}`}
                  className="object-contain w-full h-full rounded-lg"
                  fill
                  // width={210}
                  // height={210}
                  priority={index < 4}
                  // style={{
                  //   width: "100%",
                  //   height: "100%",
                  // }}
                /> */}
                    <img
                      className="rounded-lg"
                      src={src}
                      alt={`Testimonial ${index + 1}`}
                      style={{
                        width: "100%",
                        height: "100%",
                      }}
                    />
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesCarousel;
