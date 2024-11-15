"use client";

import React from "react";
import Image from "next/image";
import { Star } from "lucide-react";

const SpecialTestimonialCard = ({ rating, review, name }) => {
  return (
    <article className="flex flex-col items-start p-6 mx-auto w-full bg-orange-50 rounded-2xl shadow-[0px_3px_8px_0px_rgba(0,0,0,0.15)] max-md:px-5 mt-0 md:mt-8 font-lato">
      <div className="flex flex-col w-full max-w-[322px]">
        <div className="flex gap-1 items-start self-start">
          {[...Array(5)].map((_, index) => (
            <Star
              key={index}
              size={24}
              fill={index < Math.floor(rating) ? "#CD892D" : "none"}
              color="#CD892D"
            />
          ))}
        </div>
        <p className="font-lato mt-8 text-[0.75rem] md:text-lg leading-relaxed md:leading-[1.875rem] text-neutral-900 font-lato">
          {review}
        </p>
      </div>
      <div className="flex gap-2 md:gap-5 items-center mt-6 text-lg font-semibold leading-loose text-neutral-900 w-full">
        <Image
          src="/avatar.svg"
          alt={`Avatar of ${name}`}
          width={60}
          height={60}
          className="object-contain shrink-0 w-6 h-6 md:w-14 md:h-14 self-stretch my-auto aspect-square"
        />
        <p className="self-stretch my-auto w-full font-lato text-sm md:text-lg">
          {name}
        </p>
      </div>
    </article>
  );
};

export default SpecialTestimonialCard;
